import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const DarkmodeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle to {theme === 'light' ? 'Dark' : 'light'}
    </button>
  )
}

export default DarkmodeButton
