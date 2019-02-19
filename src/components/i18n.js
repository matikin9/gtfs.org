import i18n from "i18next";
import Backend from 'i18next-xhr-backend';
import LngDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend) // load translation using xhr -> see /public/locales
  .use(LngDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
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
