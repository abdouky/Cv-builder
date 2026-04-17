import en from './en.js'
import fr from './fr.js'
import ar from './ar.js'

const translations = { en, fr, ar }

export function t(lang, key) {
  const dict = translations[lang] || translations['en']
  return dict[key] || translations['en'][key] || key
}

export function getDir(lang) {
  return lang === 'ar' ? 'rtl' : 'ltr'
}

export { translations }
