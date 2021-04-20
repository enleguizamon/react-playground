import React from 'react';

//crear el contexto
const ThemeContext = React.createContext({});

//creamos y exportamos el provider
export const ThemeProvider = ThemeContext.Provider;

//exportar el contexto
export default ThemeContext;