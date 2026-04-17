import { t } from '../../i18n/index.js'

export default function Sidebar({ cvData, language, dir }) {
  const { personal, contact, photo, summary, experience, education, skills, projects, certifications, languages } = cvData

  return (
    <div className="tpl-sidebar" dir={dir}>
      {/* Sidebar */}
      <div className="sidebar">
        {photo ? (
          <img src={photo} alt="" className="profile-photo" />
        ) : (
          <div className="photo-placeholder">👤</div>
        )}

        {personal.fullName && <div className="s-name">{personal.fullName}</div>}
        {personal.jobTitle && <div className="s-title">{personal.jobTitle}</div>}
        {personal.city && <div className="s-city">{personal.city}</div>}

        {/* Contact */}
        {(contact.email || contact.phone || contact.linkedin || contact.github || contact.website) && (
          <div>
            <div className="s-section-title">{t(language, 'section.contact')}</div>
            {contact.email && <div className="contact-item">✉ {contact.email}</div>}
            {contact.phone && <div className="contact-item">📞 {contact.phone}</div>}
            {contact.linkedin && <div className="contact-item"><a href={contact.linkedin}>LinkedIn</a></div>}
            {contact.github && <div className="contact-item"><a href={contact.github}>GitHub</a></div>}
            {contact.website && <div className="contact-item"><a href={contact.website}>Website</a></div>}
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <div className="s-section-title">{t(language, 'section.skills')}</div>
            {skills.map(skill => (
              <div className="skill-item" key={skill.id}>{skill.name}</div>
            ))}
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <div className="s-section-title">{t(language, 'section.languages')}</div>
            {languages.map(lang => (
              <div className="lang-item" key={lang.id}>
                <span>{lang.name}</span>
                <span style={{ opacity: 0.7 }}>{lang.level}</span>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <div className="s-section-title">{t(language, 'section.certifications')}</div>
            {certifications.map(cert => (
              <div key={cert.id} style={{ marginBottom: 8, fontSize: 10 }}>
                <div style={{ fontWeight: 600 }}>{cert.name}</div>
                {cert.issuer && <div style={{ opacity: 0.7 }}>{cert.issuer}</div>}
                {cert.date && <div style={{ opacity: 0.6 }}>{cert.date}</div>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main */}
      <div className="main">
        {/* Summary */}
        {summary && (
          <div className="m-section">
            <div className="m-section-title">{t(language, 'section.summary')}</div>
            <p className="summary-text">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="m-section">
            <div className="m-section-title">{t(language, 'section.experience')}</div>
            {experience.map(exp => (
              <div className="exp-item" key={exp.id}>
                <div className="exp-header">
                  <div className="exp-title">{exp.title}</div>
                  <div className="exp-dates">{exp.startDate}{exp.endDate ? ` – ${exp.endDate}` : ''}</div>
                </div>
                <div className="exp-company">{exp.company}</div>
                {exp.description && <div className="exp-desc">{exp.description}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="m-section">
            <div className="m-section-title">{t(language, 'section.education')}</div>
            {education.map(edu => (
              <div className="edu-item" key={edu.id}>
                <div className="edu-header">
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-duration">{edu.duration}</div>
                </div>
                <div className="edu-institution">{edu.institution}</div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div className="m-section">
            <div className="m-section-title">{t(language, 'section.projects')}</div>
            {projects.map(proj => (
              <div key={proj.id} style={{ marginBottom: 10 }}>
                <div style={{ fontWeight: 600, fontSize: 12 }}>{proj.name}</div>
                {proj.description && <div style={{ fontSize: 11, color: '#475569' }}>{proj.description}</div>}
                {proj.url && <div><a href={proj.url} style={{ fontSize: 11, color: '#1e3a5f' }}>{proj.url}</a></div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
