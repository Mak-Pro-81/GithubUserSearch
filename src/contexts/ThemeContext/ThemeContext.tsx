import { createContext, useState, ReactNode } from 'react';

interface iThemeContext {
  themeMode: string;
  toggleThemeMode(): void;
}

interface IThemeContextProvider {
  children: ReactNode;
}

export const ThemeContext = createContext<iThemeContext>({
  themeMode: '',
  toggleThemeMode: () => ({}),
});

export const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
  const [themeMode, setThemeMode] = useState<string>('light');

  const toggleThemeMode = () => {
    setThemeMode(prevValue => (prevValue === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>{children}</ThemeContext.Provider>
  );
};
