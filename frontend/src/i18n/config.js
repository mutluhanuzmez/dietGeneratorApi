import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).
use(initReactI18next).init({
  fallbackLng: 'en',
  lng: i18n.options.lng,
  resources: {
    en: {
      translations: require('./local/en/translations.json')
    },
    tr: {
      translations: require('./local/tr/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});
console.log(i18n)

i18n.languages = ['en', 'tr'];

export default i18n;