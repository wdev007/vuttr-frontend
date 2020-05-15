import React, { createContext, useState } from 'react';
import { AppContextData } from '../models/appContextData';

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <AppContext.Provider value={{ visible, setVisible }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
