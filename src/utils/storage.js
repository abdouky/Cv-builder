const STORAGE_KEY = 'cv_builder_data'

export function saveToStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.warn('Failed to save to localStorage', e)
  }
}

export function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    console.warn('Failed to load from localStorage', e)
    return null
  }
}
