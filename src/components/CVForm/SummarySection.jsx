import { t } from '../../i18n/index.js'

export default function SummarySection({ value, onChange, language }) {
  return (
    <div className="form-section">
      <h2>{t(language, 'section.summary')}</h2>
      <div className="form-group">
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={4}
          placeholder="..."
        />
      </div>
    </div>
  )
}
