import type { DocumentContext } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { JSXElementConstructor, ReactElement, ReactFragment } from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  /**
   * Add styled-components server-side render support
   * Taken from https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.tsx
   */
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles:
      | ReactFragment
      | ReactElement<any, string | JSXElementConstructor<any>>[];
    html: string;
    head?: (JSX.Element | null)[] | undefined;
  }> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  public render(): JSX.Element {
    return (
      <Html lang="fr">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Oleo+Script:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="canonical" href="https://www.charlies-closet.com" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.gaTrackingId}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.gaTrackingId}');
            `,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
