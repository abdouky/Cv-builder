import { useState } from 'react'
import { t } from '../../i18n/index.js'

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone) {
  return phone === '' || /^[+\d\s\-()]{6,20}$/.test(phone)
}

export default function ContactSection({ data, onChange, language }) {
  const [touched, setTouched] = useState({})

  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value })
  }

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }))
  }

  const emailError = touched.email && data.email && !validateEmail(data.email)
    ? t(language, 'validation.emailInvalid')
    : touched.email && !data.email
    ? t(language, 'validation.emailRequired')
    : null

  const phoneError = touched.phone && !validatePhone(data.phone)
    ? t(language, 'validation.phoneInvalid')
    : null

  return (
    <div className="form-section">
      <h2>{t(language, 'section.contact')}</h2>

      <div className="form-row">
        <div className="form-group">
          <label>{t(language, 'field.email')} *</label>
          <input
            type="email"
            value={data.email}
            onChange={e => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            style={emailError ? { borderColor: 'var(--color-error)' } : {}}
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="form-group">
          <label>{t(language, 'field.phone')}</label>
          <input
            type="tel"
            value={data.phone}
            onChange={e => handleChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            style={phoneError ? { borderColor: 'var(--color-error)' } : {}}
          />
          {phoneError && <div className="error">{phoneError}</div>}
        </div>
      </div>

      <div className="form-group">
        <label>{t(language, 'field.linkedin')}</label>
        <input
          type="url"
          value={data.linkedin}
          onChange={e => handleChange('linkedin', e.target.value)}
          placeholder="https://linkedin.com/in/..."
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>{t(language, 'field.github')}</label>
          <input
            type="url"
            value={data.github}
            onChange={e => handleChange('github', e.target.value)}
            placeholder="https://github.com/..."
          />
        </div>
        <div className="form-group">
          <label>{t(language, 'field.website')}</label>
          <input
            type="url"
            value={data.website}
            onChange={e => handleChange('website', e.target.value)}
            placeholder="https://..."
          />
        </div>
      </div>
    </div>
  )
}
