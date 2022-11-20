const withPlugins = require("next-compose-plugins");
const { withSentryConfig } = require("@sentry/nextjs");

const isLocalLikeBuildEnv =
  !process.env.BUILD_ENV || process.env.BUILD_ENV === "local";
const isProductionLikeRuntime = process.env.NODE_ENV === "production";

// const configPath = path.resolve(
//   "src/config/env",
//   `${process.env.BUILD_ENV}.json`
// );

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const nextPlugins = [
  (nextConfig) => withSentryConfig(nextConfig, sentryWebpackPluginOptions),
]

const config = withPlugins(nextPlugins, {
  // Enable <React.StrictMode> in application
  reactStrictMode: true,

  fileExtensions: ["jpg", "jpeg", "png", "gif"],

  // Optional build-time configuration options
  sentry: {
    // See the sections below for information on the following options:
    //   'Configure Source Maps':
    //     - disableServerWebpackPlugin
    //     - disableClientWebpackPlugin
    //     - hideSourceMaps
    //     - widenClientFileUpload
    //   'Configure Legacy Browser Support':
    //     - transpileClientSDK
    //   'Configure Serverside Auto-instrumentation':
    //     - autoInstrumentServerFunctions
    //     - excludeServerRoutes
  },

  // https://nextjs.org/docs/advanced-features/compiler
  compiler: {
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: isLocalLikeBuildEnv,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: isLocalLikeBuildEnv,
      // Empty by default.
      // topLevelImportPaths: [],
      // Defaults to ["index"].
      // meaninglessFileNames: [],
      // Enabled by default.
      // cssProp: false,
      // Empty by default.
      // namespace: false,
      // Not supported yet.
      // minify: isLocalLikeBuildEnv,
      // Not supported yet.
      // transpileTemplateLiterals: isLocalLikeBuildEnv,
      // Not supported yet.
      // pure: isLocalLikeBuildEnv,
    },
  },

  webpack(config) {
    // config.resolve.alias["config/env"] = configPath;

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    // config.env = {
    //   gaTrackingId: ""
    // }

    return config;
  },
});

// module.exports = withSentryConfig(config, sentryWebpackPluginOptions);
module.exports = config;
