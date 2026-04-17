import { useRef } from 'react'
import { t } from '../../i18n/index.js'

export default function PersonalSection({ data, photo, onChange, onPhotoChange, language }) {
  const fileRef = useRef()

  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value })
  }

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => onPhotoChange(ev.target.result)
    reader.readAsDataURL(file)
  }

  return (
    <div className="form-section">
      <h2>{t(language, 'section.personalInfo')}</h2>

      {/* Photo */}
      <div className="form-group">
        <label>{t(language, 'section.photo')}</label>
        <div className="photo-upload">
          {photo ? (
            <img src={photo} alt="Profile" className="photo-preview" />
          ) : (
            <div className="photo-placeholder">👤</div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button className="btn-secondary" onClick={() => fileRef.current.click()}>
              {t(language, 'btn.choosePhoto')}
            </button>
            {photo && (
              <button className="btn-danger" onClick={() => onPhotoChange(null)}>
                {t(language, 'btn.removePhoto')}
              </button>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handlePhotoUpload}
          />
        </div>
      </div>

      <div className="form-group">
        <label>{t(language, 'field.fullName')} *</label>
        <input
          type="text"
          value={data.fullName}
          onChange={e => handleChange('fullName', e.target.value)}
          placeholder={t(language, 'field.fullName')}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>{t(language, 'field.jobTitle')}</label>
          <input
            type="text"
            value={data.jobTitle}
            onChange={e => handleChange('jobTitle', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>{t(language, 'field.city')}</label>
          <input
            type="text"
            value={data.city}
            onChange={e => handleChange('city', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
