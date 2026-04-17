import { t } from '../../i18n/index.js'

function genId() {
  return Math.random().toString(36).slice(2)
}

export default function SkillsSection({ items, onChange, language }) {
  const add = () => {
    onChange([...items, { id: genId(), name: '' }])
  }

  const remove = (id) => {
    onChange(items.filter(item => item.id !== id))
  }

  const update = (id, value) => {
    onChange(items.map(item => item.id === id ? { ...item, name: value } : item))
  }

  return (
    <div className="form-section">
      <h2>{t(language, 'section.skills')}</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
        {items.map(item => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 20, padding: '4px 10px' }}>
            <input
              value={item.name}
              onChange={e => update(item.id, e.target.value)}
              placeholder={t(language, 'field.skillName')}
              style={{ border: 'none', background: 'transparent', outline: 'none', width: 80, fontSize: '0.85rem' }}
            />
            <button
              onClick={() => remove(item.id)}
              style={{ border: 'none', background: 'none', color: 'var(--color-error)', cursor: 'pointer', fontSize: '1rem', lineHeight: 1, padding: '0 2px' }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <button className="add-btn" onClick={add}>
        {t(language, 'btn.addSkill')}
      </button>
    </div>
  )
}
