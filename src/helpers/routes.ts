interface Routes {
  index: () => string;
  conditions: () => string;
  login: () => string;
  signUp: () => string;
  signUpBaby: () => string;
  signUpBox: () => string;
  signUpInfo: () => string;
  signUpPayment: () => string;
  accountBaby: () => string;
  accountInfo: () => string;
  accountBox: () => string;
  accountPayment: () => string;
  accountSettings: () => string;
  contact: () => string;
  formules: () => string;
  faq: () => string;
  aboutUs: () => string;
}

export const routes: Routes = {
  index: () => "/",
  conditions: () => "/conditions-generales",
  login: () => "/login",
  signUp: () => "/inscription",
  signUpBaby: () => "/inscription/mon-bebe",
  signUpBox: () => "/inscription/mon-coffret",
  signUpInfo: () => "/inscription/mes-infos",
  signUpPayment: () => "/inscription/reglement",
  accountBaby: () => "/compte/mon-bebe",
  accountInfo: () => "/compte/mes-infos",
  accountBox: () => "/compte/mon-coffret",
  accountPayment: () => "/compte/paiements",
  accountSettings: () => "/compte/parametres",
  contact: () => "/contact",
  formules: () => "/formules",
  faq: () => "/faq",
  aboutUs: () => "/a-propos",
};
