import PersonalSection from './PersonalSection.jsx'
import ContactSection from './ContactSection.jsx'
import SummarySection from './SummarySection.jsx'
import ExperienceSection from './ExperienceSection.jsx'
import EducationSection from './EducationSection.jsx'
import SkillsSection from './SkillsSection.jsx'
import OptionalSections from './OptionalSections.jsx'

export default function CVForm({ cvData, updateCvData, language }) {
  return (
    <div>
      <PersonalSection
        data={cvData.personal}
        photo={cvData.photo}
        onChange={val => updateCvData('personal', val)}
        onPhotoChange={val => updateCvData('photo', val)}
        language={language}
      />
      <ContactSection
        data={cvData.contact}
        onChange={val => updateCvData('contact', val)}
        language={language}
      />
      <SummarySection
        value={cvData.summary}
        onChange={val => updateCvData('summary', val)}
        language={language}
      />
      <ExperienceSection
        items={cvData.experience}
        onChange={val => updateCvData('experience', val)}
        language={language}
      />
      <EducationSection
        items={cvData.education}
        onChange={val => updateCvData('education', val)}
        language={language}
      />
      <SkillsSection
        items={cvData.skills}
        onChange={val => updateCvData('skills', val)}
        language={language}
      />
      <OptionalSections
        projects={cvData.projects}
        certifications={cvData.certifications}
        languages={cvData.languages}
        onProjectsChange={val => updateCvData('projects', val)}
        onCertificationsChange={val => updateCvData('certifications', val)}
        onLanguagesChange={val => updateCvData('languages', val)}
        language={language}
      />
    </div>
  )
}
