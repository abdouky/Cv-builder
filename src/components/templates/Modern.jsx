import { t } from '../../i18n/index.js'

export default function Modern({ cvData, language, dir }) {
  const { personal, contact, photo, summary, experience, education, skills, projects, certifications, languages } = cvData

  return (
    <div className="tpl-modern" dir={dir}>
      {/* Header */}
      <div className="m-header">
        {photo ? (
          <img src={photo} alt="" className="header-photo" />
        ) : (
          <div className="header-placeholder">👤</div>
        )}
        <div className="header-info">
          {personal.fullName && <div className="h-name">{personal.fullName}</div>}
          {personal.jobTitle && <div className="h-title">{personal.jobTitle}</div>}
          {personal.city && <div className="h-city">📍 {personal.city}</div>}
        </div>
      </div>

      {/* Contact bar */}
      {(contact.email || contact.phone || contact.linkedin || contact.github || contact.website) && (
        <div className="m-contact-bar">
          {contact.email && <span>✉ {contact.email}</span>}
          {contact.phone && <span>📞 {contact.phone}</span>}
          {contact.linkedin && <span><a href={contact.linkedin}>LinkedIn</a></span>}
          {contact.github && <span><a href={contact.github}>GitHub</a></span>}
          {contact.website && <span><a href={contact.website}>Website</a></span>}
        </div>
      )}

      {/* Body */}
      <div className="m-body">
        <div className="left-col">
          {/* Summary */}
          {summary && (
            <div className="m-section">
              <div className="m-section-title">⟡ {t(language, 'section.summary')}</div>
              <div className="m-summary-text">{summary}</div>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div className="m-section">
              <div className="m-section-title">◈ {t(language, 'section.experience')}</div>
              {experience.map(exp => (
                <div className="m-exp-item" key={exp.id}>
                  <div className="m-exp-header">
                    <div className="m-exp-title">{exp.title}</div>
                    <div className="m-exp-dates">{exp.startDate}{exp.endDate ? ` – ${exp.endDate}` : ''}</div>
                  </div>
                  <div className="m-exp-company">{exp.company}</div>
                  {exp.description && <div className="m-exp-desc">{exp.description}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="m-section">
              <div className="m-section-title">◉ {t(language, 'section.education')}</div>
              {education.map(edu => (
                <div className="m-edu-item" key={edu.id}>
                  <div className="m-edu-degree">{edu.degree}</div>
                  <div className="m-edu-institution">{edu.institution}</div>
                  <div className="m-edu-duration">{edu.duration}</div>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div className="m-section">
              <div className="m-section-title">◆ {t(language, 'section.projects')}</div>
              {projects.map(proj => (
                <div className="m-proj-item" key={proj.id}>
                  <div className="m-proj-name">{proj.name}</div>
                  {proj.description && <div className="m-proj-desc">{proj.description}</div>}
                  {proj.url && <div className="m-proj-url"><a href={proj.url}>{proj.url}</a></div>}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="right-col">
          {/* Skills */}
          {skills.length > 0 && (
            <div className="m-section">
              <div className="m-section-title">◎ {t(language, 'section.skills')}</div>
              <div className="m-skills-grid">
                {skills.map(skill => (
                  <span className="m-skill-tag" key={skill.id}>{skill.name}</span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div className="m-section">
              <div className="m-section-title">◑ {t(language, 'section.languages')}</div>
              {languages.map(lang => (
                <div className="m-lang-item" key={lang.id}>
                  <span>{lang.name}</span>
                  <span className="m-lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div className="m-section">
              <div className="m-section-title">✦ {t(language, 'section.certifications')}</div>
              {certifications.map(cert => (
                <div className="m-cert-item" key={cert.id}>
                  <div className="m-cert-name">{cert.name}</div>
                  <div className="m-cert-issuer">{cert.issuer}{cert.date ? `, ${cert.date}` : ''}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
