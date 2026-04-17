import { t } from '../../i18n/index.js'

function genId() {
  return Math.random().toString(36).slice(2)
}

function ProjectsSection({ items, onChange, language }) {
  const add = () => onChange([...items, { id: genId(), name: '', description: '', url: '' }])
  const remove = id => onChange(items.filter(i => i.id !== id))
  const update = (id, field, value) => onChange(items.map(i => i.id === id ? { ...i, [field]: value } : i))

  return (
    <div className="form-section">
      <h2>{t(language, 'section.projects')}</h2>
      {items.map((item, idx) => (
        <div className="list-item" key={item.id}>
          <div className="list-item-header">
            <strong style={{ fontSize: '0.875rem' }}>{item.name || `#${idx + 1}`}</strong>
            <button className="btn-danger" onClick={() => remove(item.id)}>{t(language, 'btn.remove')}</button>
          </div>
          <div className="form-group">
            <label>{t(language, 'field.projectName')}</label>
            <input value={item.name} onChange={e => update(item.id, 'name', e.target.value)} />
          </div>
          <div className="form-group">
            <label>{t(language, 'field.projectDesc')}</label>
            <textarea value={item.description} onChange={e => update(item.id, 'description', e.target.value)} rows={2} />
          </div>
          <div className="form-group">
            <label>{t(language, 'field.projectUrl')}</label>
            <input value={item.url} onChange={e => update(item.id, 'url', e.target.value)} placeholder="https://..." />
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={add}>{t(language, 'btn.addProject')}</button>
    </div>
  )
}

function CertificationsSection({ items, onChange, language }) {
  const add = () => onChange([...items, { id: genId(), name: '', issuer: '', date: '' }])
  const remove = id => onChange(items.filter(i => i.id !== id))
  const update = (id, field, value) => onChange(items.map(i => i.id === id ? { ...i, [field]: value } : i))

  return (
    <div className="form-section">
      <h2>{t(language, 'section.certifications')}</h2>
      {items.map((item, idx) => (
        <div className="list-item" key={item.id}>
          <div className="list-item-header">
            <strong style={{ fontSize: '0.875rem' }}>{item.name || `#${idx + 1}`}</strong>
            <button className="btn-danger" onClick={() => remove(item.id)}>{t(language, 'btn.remove')}</button>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>{t(language, 'field.certName')}</label>
              <input value={item.name} onChange={e => update(item.id, 'name', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t(language, 'field.certIssuer')}</label>
              <input value={item.issuer} onChange={e => update(item.id, 'issuer', e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label>{t(language, 'field.certDate')}</label>
            <input value={item.date} onChange={e => update(item.id, 'date', e.target.value)} placeholder="YYYY-MM" />
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={add}>{t(language, 'btn.addCertification')}</button>
    </div>
  )
}

function LanguagesSection({ items, onChange, language }) {
  const add = () => onChange([...items, { id: genId(), name: '', level: '' }])
  const remove = id => onChange(items.filter(i => i.id !== id))
  const update = (id, field, value) => onChange(items.map(i => i.id === id ? { ...i, [field]: value } : i))

  return (
    <div className="form-section">
      <h2>{t(language, 'section.languages')}</h2>
      {items.map((item, idx) => (
        <div className="list-item" key={item.id}>
          <div className="list-item-header">
            <strong style={{ fontSize: '0.875rem' }}>{item.name || `#${idx + 1}`}</strong>
            <button className="btn-danger" onClick={() => remove(item.id)}>{t(language, 'btn.remove')}</button>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>{t(language, 'field.languageName')}</label>
              <input value={item.name} onChange={e => update(item.id, 'name', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t(language, 'field.level')}</label>
              <input value={item.level} onChange={e => update(item.id, 'level', e.target.value)} placeholder="B2, Fluent..." />
            </div>
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={add}>{t(language, 'btn.addLanguage')}</button>
    </div>
  )
}

export default function OptionalSections({ projects, certifications, languages, onProjectsChange, onCertificationsChange, onLanguagesChange, language }) {
  return (
    <>
      <ProjectsSection items={projects} onChange={onProjectsChange} language={language} />
      <CertificationsSection items={certifications} onChange={onCertificationsChange} language={language} />
      <LanguagesSection items={languages} onChange={onLanguagesChange} language={language} />
    </>
  )
}
