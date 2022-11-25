import type { AppProps, NextWebVitalsMetric } from "next/app";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
import { Fragment } from "react";
import { theme } from "@styles";
import { GlobalStyle } from "@styles";
import translations from "@locales/fr-FR.json";
import { ToastProvider } from "@context/ToastContext";

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric);
};

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IntlProvider
        locale="fr-FR"
        messages={translations}
        textComponent={Fragment}
      >
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </IntlProvider>
    </ThemeProvider>
  );
}
