import { createContext, ReactNode, useEffect, useState } from "react";
import { getTheme, ThemeName } from "../style/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../style/global";

// 상수화
const DEFAULT_THEME_NAME = 'light';
const THEME_LOCALSTORAGE_KEY = 'book-store-theme';

interface State {
    themeName: ThemeName,
    toggleTheme: () => void;
}

export const state = {
    themeName: 'light' as ThemeName,
    toggleTheme: () => {}
}

export const ThemeContext = createContext<State>(state);

export const BookStoreThemeProvider = ({children}: 
    {children: ReactNode}) => {
        // 토글 기능
        const [themeName, setThemeName] = useState<ThemeName>('light');
        
        // 지역 상태
        const toggleTheme = () => {
            setThemeName(themeName === 'light' ? 'dark' : 'light');
             // 저장하는 부분
            localStorage.setItem(THEME_LOCALSTORAGE_KEY, themeName === 'light'
            ? 'dark' : 'light');
        }

        // 초기화 하는 부분
        useEffect(() => {
            const savedThemeName = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as ThemeName
            setThemeName(savedThemeName || DEFAULT_THEME_NAME);
        }, [])

        return (
            <ThemeContext.Provider value={{themeName, toggleTheme}}>
                <ThemeProvider theme={getTheme(themeName)}>
                    <GlobalStyle themeName={themeName}/>
                        {children}
                    </ThemeProvider>
                </ThemeContext.Provider>
        )
}