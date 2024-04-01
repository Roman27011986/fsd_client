import {
    useState, useMemo, FC, ReactNode,
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme = localStorage
    .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export interface IThemeProviderProps {
   children: ReactNode;
   initialTheme?: Theme;
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
