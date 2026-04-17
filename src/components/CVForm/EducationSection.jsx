import { t } from '../../i18n/index.js'

function genId() {
  return Math.random().toString(36).slice(2)
}

export default function EducationSection({ items, onChange, language }) {
  const add = () => {
    onChange([...items, { id: genId(), institution: '', degree: '', duration: '' }])
  }

  const remove = (id) => {
    onChange(items.filter(item => item.id !== id))
  }

  const update = (id, field, value) => {
    onChange(items.map(item => item.id === id ? { ...item, [field]: value } : item))
  }

  return (
    <div className="form-section">
      <h2>{t(language, 'section.education')}</h2>

      {items.map((item, index) => (
        <div className="list-item" key={item.id}>
          <div className="list-item-header">
            <strong style={{ fontSize: '0.875rem' }}>{item.institution || `#${index + 1}`}</strong>
            <button className="btn-danger" onClick={() => remove(item.id)}>
              {t(language, 'btn.remove')}
            </button>
          </div>

          <div className="form-group">
            <label>{t(language, 'field.institution')}</label>
            <input value={item.institution} onChange={e => update(item.id, 'institution', e.target.value)} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{t(language, 'field.degree')}</label>
              <input value={item.degree} onChange={e => update(item.id, 'degree', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t(language, 'field.duration')}</label>
              <input value={item.duration} onChange={e => update(item.id, 'duration', e.target.value)} placeholder="2020 - 2023" />
            </div>
          </div>
        </div>
      ))}

      <button className="add-btn" onClick={add}>
        {t(language, 'btn.addEducation')}
      </button>
    </div>
  )
}
