import { t } from '../i18n/index.js'

const thumbStyles = {
  1: { background: 'linear-gradient(to bottom, #fff 30%, #f1f5f9 30%)', border: '1px solid #e2e8f0' },
  2: { background: 'linear-gradient(to right, #2563eb 35%, #f1f5f9 35%)' },
  3: { background: 'linear-gradient(to bottom, #1e293b 40%, #fff 40%)' },
}

export default function TemplateSelector({ template, setTemplate, language }) {
  return (
    <div>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', marginBottom: 8 }}>
        {t(language, 'template.label')}
      </div>
      <div className="template-selector">
        {[1, 2, 3].map(num => {
          const key = num === 1 ? 'classic' : num === 2 ? 'sidebar' : 'modern'
          return (
            <div
              key={num}
              className={`template-card${template === num ? ' active' : ''}`}
              onClick={() => setTemplate(num)}
            >
              <div className="template-thumb" style={thumbStyles[num]} />
              {t(language, `template.${key}`)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
