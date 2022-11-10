import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document { 
  render(): JSX.Element {
    return (
      <Html>
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
          {/* enable google analytics script */}
          {/* TODO: add preconnect to google.tagmanager.com */}
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
