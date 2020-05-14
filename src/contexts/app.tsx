import React, { createContext } from 'react';
import { AppContextData } from '../models/appContextData';

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  return (
    <AppContext.Provider value={{ visible: false }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
