import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export async function downloadPDF(elementId, cvData, language, templateNumber) {
  const element = document.getElementById(elementId)
  if (!element) return

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    allowTaint: true,
  })

  const imgData = canvas.toDataURL('image/jpeg', 0.95)
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = pdf.internal.pageSize.getHeight()
  const imgWidth = canvas.width
  const imgHeight = canvas.height
  const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
  const imgX = (pdfWidth - imgWidth * ratio) / 2
  const imgY = 0

  pdf.addImage(imgData, 'JPEG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)

  const name = (cvData.personal?.fullName || 'CV').replace(/\s+/g, '_')
  pdf.save(`CV_${name}_${language}_Template${templateNumber}.pdf`)
}
