import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
import { Fragment } from "react";
import { theme } from "@styles";
import { GlobalStyle } from "@styles";
import translations from "@locales/fr-FR.json";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IntlProvider
        locale="fr-FR"
        messages={translations}
        textComponent={Fragment}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  );
}
