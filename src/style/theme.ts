import exp from "constants";

export type ThemeName = 'light'| 'dark'
// 키 제한
type ColorKey = 'primary' | 'background' | 'secondary' | 'third';

interface Theme {
    // string -> ThemeName
    name: ThemeName,
    color: Record<ColorKey, string>
    // color: {
    //     // primary: string,
    //     // background: string,
    //     // secondary: string
    //     [key: string]: string 
    // }
}

export const light: Theme = {
    name: 'light',
    color: {
        primary: 'brown',
        background: 'lightgray',        
        secondary: 'blue',
        third: 'green'
    }
};

export const dark: Theme = {
    name: 'dark',
    color: {
        primary: 'coral',
        background: 'midnightblue',      
        secondary: 'darkblue',
        third: 'darkgreen'
    }
};

export const getTheme = (themeName: ThemeName): Theme => {
    switch (themeName) {
        case "light":
            return light;
        case 'dark':
            return dark;
    }
}