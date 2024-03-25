import React, { createContext, useContext, useState, useEffect } from 'react';

const Themecontext = createContext();

export const useTheme = () => {
  return useContext(Themecontext);
};

export const ThemeProvider = ({ children }) => {
  const [isdarkmode, setIsdarkmode] = useState(false);

  const Themetoggle = () => {
    setIsdarkmode((prevState) => !prevState);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [isdarkmode]);

  const theme = isdarkmode ? 'Dark' : 'Light';

  return (
    <Themecontext.Provider value={{ theme, Themetoggle }}>
      {children}
    </Themecontext.Provider>
  );
};
