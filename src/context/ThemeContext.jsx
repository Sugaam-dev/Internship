import React, { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }){
const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

useEffect(()=>{
document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
localStorage.setItem('theme', theme)
}, [theme])

const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light')

return (
<ThemeContext.Provider value={{ theme, toggle }}>
{children}
</ThemeContext.Provider>
)
}

export function useTheme(){
return useContext(ThemeContext)
}