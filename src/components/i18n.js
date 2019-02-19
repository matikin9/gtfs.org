import i18n from "i18next";
import LngDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: require("../../static/locales/en/translation.json"),
    menu: require("../../static/locales/en/menu.json")
  },
  es: {
    translation: require("../../static/locales/es/translation.json"),
    menu: require("../../static/locales/es/menu.json")
  }
};

i18n
  .use(LngDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',

    preload: ['en', 'es'],

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    detection: {
      order: ['path']
    },

    ns: [
      'translation',
      'menu'
    ],

    debug: true
  });

  export default i18n;
