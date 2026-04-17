import { t } from '../../i18n/index.js'

export default function Classic({ cvData, language, dir }) {
  const { personal, contact, photo, summary, experience, education, skills, projects, certifications, languages } = cvData

  return (
    <div className="tpl-classic" dir={dir}>
      {/* Header */}
      <div className="cv-header">
        {photo && <img src={photo} alt="" className="cv-photo" />}
        {personal.fullName && <div className="name">{personal.fullName}</div>}
        {personal.jobTitle && <div className="job-title">{personal.jobTitle}</div>}
        {personal.city && <div className="city">{personal.city}</div>}
        <div className="contact-bar">
          {contact.email && <span>✉ {contact.email}</span>}
          {contact.phone && <span>📞 {contact.phone}</span>}
          {contact.linkedin && <span><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></span>}
          {contact.github && <span><a href={contact.github} target="_blank" rel="noreferrer">GitHub</a></span>}
          {contact.website && <span><a href={contact.website} target="_blank" rel="noreferrer">Website</a></span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="section">
          <div className="section-title">{t(language, 'section.summary')}</div>
          <p style={{ fontSize: 11, color: '#475569', lineHeight: 1.7 }}>{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="section">
          <div className="section-title">{t(language, 'section.experience')}</div>
          {experience.map(exp => (
            <div className="exp-item" key={exp.id}>
              <div className="exp-top">
                <div>
                  <div className="title">{exp.title}</div>
                  <div className="company">{exp.company}</div>
                </div>
                <div className="dates">{exp.startDate}{exp.endDate ? ` – ${exp.endDate}` : ''}</div>
              </div>
              {exp.description && <div className="desc">{exp.description}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="section">
          <div className="section-title">{t(language, 'section.education')}</div>
          {education.map(edu => (
            <div className="edu-item" key={edu.id}>
              <div className="edu-top">
                <div>
                  <div className="degree">{edu.degree}</div>
                  <div className="institution">{edu.institution}</div>
                </div>
                <div className="duration">{edu.duration}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="section">
          <div className="section-title">{t(language, 'section.skills')}</div>
          <div className="skills-list">
            {skills.map(skill => (
              <span className="skill-tag" key={skill.id}>{skill.name}</span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="section">
          <div className="section-title">{t(language, 'section.projects')}</div>
          {projects.map(proj => (
            <div key={proj.id} style={{ marginBottom: 10 }}>
              <div style={{ fontWeight: 600, fontSize: 12 }}>{proj.name}</div>
              {proj.description && <div style={{ fontSize: 11, color: '#475569' }}>{proj.description}</div>}
              {proj.url && <div><a href={proj.url} style={{ fontSize: 11, color: '#2563eb' }}>{proj.url}</a></div>}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="section">
          <div className="section-title">{t(language, 'section.certifications')}</div>
          {certifications.map(cert => (
            <div key={cert.id} style={{ marginBottom: 8 }}>
              <span style={{ fontWeight: 600, fontSize: 12 }}>{cert.name}</span>
              {cert.issuer && <span style={{ fontSize: 11, color: '#64748b' }}> — {cert.issuer}</span>}
              {cert.date && <span style={{ fontSize: 11, color: '#64748b' }}>, {cert.date}</span>}
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <div className="section">
          <div className="section-title">{t(language, 'section.languages')}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
            {languages.map(lang => (
              <div key={lang.id} style={{ fontSize: 11 }}>
                <strong>{lang.name}</strong>{lang.level ? `: ${lang.level}` : ''}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
