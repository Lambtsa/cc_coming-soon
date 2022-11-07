import { EUR, GBP, SEK } from "@dinero.js/currencies";
import { dinero, toFormat } from "dinero.js";
import type { Currency, DineroOptions } from "dinero.js";
import { useEffect, useState } from "react";
import { Locale } from "@constants/locales";

type CurrencyType = "EUR" | "GBP" | "SEK";

const currencyMapper = (currency: CurrencyType): Currency<number> => {
  switch (currency) {
    case "EUR":
      return EUR;
    case "SEK":
      return SEK;
    case "GBP":
      return GBP;
    default:
      return EUR;
  }
};

interface UseCurrencyProps {
  currency: CurrencyType;
}

interface CurrencyFormatOptions extends Intl.NumberFormatOptions {
  overruleCurrency?: CurrencyType;
}

export const useCurrency = ({ currency }: UseCurrencyProps) => {
  const [currencyCode, setCurrencyCode] = useState<Currency<number>>(EUR);
  const [locale, setLocale] = useState<Locale>("en-US");

  useEffect(() => {
    switch (currency) {
      case "EUR":
        setCurrencyCode(EUR);
        setLocale("de-DE");
        break;
      case "GBP":
        setCurrencyCode(GBP);
        setLocale("en-GB");
        break;
      case "SEK":
        setCurrencyCode(SEK);
        setLocale("sv-SE");
        break;
    }
  }, [currency]);

  /**
   * Currency string formatter. By default it will format per store country.  
   * Can pass `overruleCurrency` in options to overrule default store currency
   * @param price
   * @param options - { overruleCurrency: Currency<number> }
   * @returns formatted currency
   * @example
      const { intlFormat } = useCurrency({ storeCurrency: "EUR" });
      intlFormat(10000, { overruleCurrency: "EUR" }) // 100,00 €
   */
  const intlFormat = (price: number, options: CurrencyFormatOptions = {}) => {
    const transformer = ({ amount, currency }: DineroOptions<number>) => {
      return amount.toLocaleString(locale, {
        ...options,
        style: "currency",
        currency: currency.code,
      });
    };
    const d = dinero({
      amount: price,
      currency: options.overruleCurrency
        ? currencyMapper(options.overruleCurrency)
        : currencyCode,
    });

    return toFormat(d, transformer);
  };

  return {
    formatPrice: intlFormat,
  };
};
