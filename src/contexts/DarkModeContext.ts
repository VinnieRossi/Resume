import React from 'react';

const DarkModeContext = React.createContext(false);

export const DarkModeProvider = DarkModeContext.Provider;
export const DarkModeConsumer = DarkModeContext.Consumer;

export default DarkModeContext;
