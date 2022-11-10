module.exports = {
  // Run type-check on changes to TypeScript files
  "**/*.ts?(x)": () => "npm run lint:tsc",
  // Run ESLint on changes to JavaScript/TypeScript files
  "**/*.(ts|js)?(x)": (filenames) => `npm run lint . ${filenames.join(" ")}`,
};
