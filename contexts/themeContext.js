import React, { useState } from "react"

const defaultTheme = 'light'

export const ThemeContext = React.createContext({
    theme: defaultTheme,
    changeTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme)

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}