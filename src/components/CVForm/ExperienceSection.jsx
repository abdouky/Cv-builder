import { t } from '../../i18n/index.js'

function genId() {
  return Math.random().toString(36).slice(2)
}

export default function ExperienceSection({ items, onChange, language }) {
  const add = () => {
    onChange([...items, { id: genId(), company: '', title: '', startDate: '', endDate: '', description: '' }])
  }

  const remove = (id) => {
    onChange(items.filter(item => item.id !== id))
  }

  const update = (id, field, value) => {
    onChange(items.map(item => item.id === id ? { ...item, [field]: value } : item))
  }

  const moveUp = (index) => {
    if (index === 0) return
    const arr = [...items]
    ;[arr[index - 1], arr[index]] = [arr[index], arr[index - 1]]
    onChange(arr)
  }

  const moveDown = (index) => {
    if (index === items.length - 1) return
    const arr = [...items]
    ;[arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
    onChange(arr)
  }

  return (
    <div className="form-section">
      <h2>{t(language, 'section.experience')}</h2>

      {items.map((item, index) => (
        <div className="list-item" key={item.id}>
          <div className="list-item-header">
            <strong style={{ fontSize: '0.875rem' }}>{item.company || `#${index + 1}`}</strong>
            <div className="list-item-actions">
              <button className="btn-icon" onClick={() => moveUp(index)} disabled={index === 0}>
                {t(language, 'btn.moveUp')}
              </button>
              <button className="btn-icon" onClick={() => moveDown(index)} disabled={index === items.length - 1}>
                {t(language, 'btn.moveDown')}
              </button>
              <button className="btn-danger" onClick={() => remove(item.id)}>
                {t(language, 'btn.remove')}
              </button>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{t(language, 'field.company')}</label>
              <input value={item.company} onChange={e => update(item.id, 'company', e.target.value)} />
            </div>
            <div className="form-group">
              <label>{t(language, 'field.jobTitle')}</label>
              <input value={item.title} onChange={e => update(item.id, 'title', e.target.value)} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{t(language, 'field.startDate')}</label>
              <input value={item.startDate} onChange={e => update(item.id, 'startDate', e.target.value)} placeholder="YYYY-MM" />
            </div>
            <div className="form-group">
              <label>{t(language, 'field.endDate')}</label>
              <input value={item.endDate} onChange={e => update(item.id, 'endDate', e.target.value)} placeholder="YYYY-MM" />
            </div>
          </div>

          <div className="form-group">
            <label>{t(language, 'field.description')}</label>
            <textarea
              value={item.description}
              onChange={e => update(item.id, 'description', e.target.value)}
              rows={3}
            />
          </div>
        </div>
      ))}

      <button className="add-btn" onClick={add}>
        {t(language, 'btn.addExperience')}
      </button>
    </div>
  )
}
