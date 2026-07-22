'use client'

import * as React from 'react'

export type Theme = 'dark' | 'light' | 'system'

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const savedTheme = (localStorage.getItem(storageKey) as Theme) || defaultTheme
    setThemeState(savedTheme)
  }, [defaultTheme, storageKey])

  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      setThemeState(newTheme)
    },
    [storageKey]
  )

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
