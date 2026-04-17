import { useState, useEffect } from 'react'
import { t, getDir } from './i18n/index.js'
import { loadFromStorage } from './utils/storage.js'
import { useAutoSave } from './hooks/useAutoSave.js'
import LanguageSelector from './components/LanguageSelector.jsx'
import CVForm from './components/CVForm/index.jsx'
import Preview from './components/Preview/index.jsx'

const defaultCvData = {
  personal: { fullName: '', jobTitle: '', city: '' },
  contact: { email: '', phone: '', linkedin: '', github: '', website: '' },
  photo: null,
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: [],
}

function App() {
  const [language, setLanguage] = useState('en')
  const [template, setTemplate] = useState(1)
  const [cvData, setCvData] = useState(defaultCvData)
  const [mobileTab, setMobileTab] = useState('form')

  useEffect(() => {
    const saved = loadFromStorage()
    if (saved) {
      if (saved.language) setLanguage(saved.language)
      if (saved.template) setTemplate(saved.template)
      if (saved.cvData) setCvData({ ...defaultCvData, ...saved.cvData })
    }
  }, [])

  const savePayload = { language, template, cvData }
  useAutoSave(savePayload)

  const dir = getDir(language)

  const updateCvData = (section, value) => {
    setCvData(prev => ({ ...prev, [section]: value }))
  }

  return (
    <div dir={dir}>
      <header className="app-header">
        <h1>{t(language, 'app.title')}</h1>
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </header>

      <div className="mobile-tabs">
        <button
          className={mobileTab === 'form' ? 'active' : ''}
          onClick={() => setMobileTab('form')}
        >
          {t(language, 'app.formTab')}
        </button>
        <button
          className={mobileTab === 'preview' ? 'active' : ''}
          onClick={() => setMobileTab('preview')}
        >
          {t(language, 'app.previewTab')}
        </button>
      </div>

      <main className="app-main">
        <div className={`form-panel${mobileTab !== 'form' ? ' hidden' : ''}`}>
          <CVForm
            cvData={cvData}
            updateCvData={updateCvData}
            language={language}
          />
        </div>
        <div className={`preview-panel${mobileTab !== 'preview' ? ' hidden' : ''}`}>
          <Preview
            cvData={cvData}
            language={language}
            template={template}
            setTemplate={setTemplate}
          />
        </div>
      </main>
    </div>
  )
}

export default App
