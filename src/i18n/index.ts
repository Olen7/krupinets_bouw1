import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enCommon from './locales/en/common.json'
import enHome from './locales/en/home.json'
import enAbout from './locales/en/about.json'
import enContact from './locales/en/contact.json'
import enPortfolio from './locales/en/portfolio.json'
import enReviews from './locales/en/reviews.json'

import nlCommon from './locales/nl/common.json'
import nlHome from './locales/nl/home.json'
import nlAbout from './locales/nl/about.json'
import nlContact from './locales/nl/contact.json'
import nlPortfolio from './locales/nl/portfolio.json'
import nlReviews from './locales/nl/reviews.json'

export const defaultNS = 'common'

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        contact: enContact,
        portfolio: enPortfolio,
        reviews: enReviews,
      },
      nl: {
        common: nlCommon,
        home: nlHome,
        about: nlAbout,
        contact: nlContact,
        portfolio: nlPortfolio,
        reviews: nlReviews,
      },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'nl'],
    load: 'languageOnly',
    defaultNS,
    ns: ['common', 'home', 'about', 'contact', 'portfolio', 'reviews'],
    interpolation: { escapeValue: false },
    detection: { caches: ['localStorage'] },
  })

export default i18next
