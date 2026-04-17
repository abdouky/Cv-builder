export default function LanguageSelector({ language, setLanguage }) {
  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
  ]

  return (
    <div className="lang-selector">
      {langs.map(l => (
        <button
          key={l.code}
          className={`lang-btn${language === l.code ? ' active' : ''}`}
          onClick={() => setLanguage(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
