import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const themes = {
  vanilla: 'theme-vanilla',
  chocolate: 'theme-chocolate',
  strawberry: 'theme-strawberry',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('cookie-theme');
    return savedTheme && Object.keys(themes).includes(savedTheme) ? savedTheme : 'vanilla';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    Object.values(themes).forEach(themeClass => {
      root.classList.remove(themeClass);
    });

    root.classList.add(themes[theme]);
    localStorage.setItem('cookie-theme', theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    if (themes[newTheme]) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
