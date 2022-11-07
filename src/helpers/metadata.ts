import URL from "@constants/url";
import { routes } from "./routes";
export interface MetaData {
  title: string;
  description: string;
  url: string;
}

interface Pages {
  default: MetaData;
  index: MetaData;
  conditions: MetaData;
  login: MetaData;
  signUp: MetaData;
  signUpBaby: MetaData;
  signUpBox: MetaData;
  signUpInfo: MetaData;
  signUpPayment: MetaData;
  accountBaby: MetaData;
  accountInfo: MetaData;
  accountBox: MetaData;
  accountPayment: MetaData;
  accountSettings: MetaData;
  contact: MetaData;
  formules: MetaData;
  faq: MetaData;
  aboutUs: MetaData;
}

const buildUrl = (path: string): string => {
  return process.env.NODE_ENV === "production"
    ? `${URL.PROD}${path}`
    : `${URL.DEV}${path}`;
};

export const pageData: Pages = {
  default: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.index()),
  },
  index: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.index()),
  },
  conditions: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.conditions()),
  },
  login: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.login()),
  },
  signUp: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.signUp()),
  },
  signUpBaby: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.signUpBaby()),
  },
  signUpBox: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.signUpBox()),
  },
  signUpInfo: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.signUpInfo()),
  },
  signUpPayment: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.signUpPayment()),
  },
  accountBaby: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.accountBaby()),
  },
  accountInfo: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.accountInfo()),
  },
  accountBox: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.accountBox()),
  },
  accountPayment: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.accountPayment()),
  },
  accountSettings: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.accountSettings()),
  },
  contact: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.contact()),
  },
  formules: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.formules()),
  },
  faq: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.faq()),
  },
  aboutUs: {
    title:
      "Charlie's Closet | Habillez votre enfant sans déshabiller la planète",
    description: "Habillez votre enfant sans déshabiller la planète",
    url: buildUrl(routes.aboutUs()),
  },
};
