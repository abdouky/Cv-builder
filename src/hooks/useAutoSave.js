import { useEffect } from 'react'
import { saveToStorage } from '../utils/storage.js'

export function useAutoSave(data) {
  useEffect(() => {
    const timer = setTimeout(() => {
      saveToStorage(data)
    }, 500)
    return () => clearTimeout(timer)
  }, [data])
}
