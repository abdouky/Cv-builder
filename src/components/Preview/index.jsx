import { useRef, useState, useEffect } from 'react'
import { t, getDir } from '../../i18n/index.js'
import { downloadPDF } from '../../utils/pdf.js'
import TemplateSelector from '../TemplateSelector.jsx'
import Classic from '../templates/Classic.jsx'
import Sidebar from '../templates/Sidebar.jsx'
import Modern from '../templates/Modern.jsx'
import './Preview.css'

const PREVIEW_WIDTH = 794

export default function Preview({ cvData, language, template, setTemplate }) {
  const containerRef = useRef()
  const [scale, setScale] = useState(1)
  const [downloading, setDownloading] = useState(false)
  const dir = getDir(language)

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        setScale(Math.min(1, containerWidth / PREVIEW_WIDTH))
      }
    }
    updateScale()
    const ro = new ResizeObserver(updateScale)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  const handleDownload = async () => {
    setDownloading(true)
    try {
      await downloadPDF('cv-preview', cvData, language, template)
    } finally {
      setDownloading(false)
    }
  }

  const TemplateComponent = template === 1 ? Classic : template === 2 ? Sidebar : Modern

  return (
    <div style={{ width: '100%' }}>
      <div className="preview-controls">
        <TemplateSelector template={template} setTemplate={setTemplate} language={language} />
        <button
          className="download-btn"
          onClick={handleDownload}
          disabled={downloading}
        >
          {downloading ? '...' : t(language, 'btn.downloadPDF')}
        </button>
      </div>

      <div ref={containerRef} className="preview-wrapper">
        <div
          className="preview-scaler"
          style={{ transform: `scale(${scale})`, width: PREVIEW_WIDTH, transformOrigin: 'top left' }}
        >
          <div
            id="cv-preview"
            className="a4-preview"
            dir={dir}
          >
            <TemplateComponent cvData={cvData} language={language} dir={dir} />
          </div>
        </div>
        <div style={{ height: 1123 * scale }} />
      </div>
    </div>
  )
}
