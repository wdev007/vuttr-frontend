import React, { createContext, useState } from 'react';
import { AppContextData } from '../models/appContextData';

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <AppContext.Provider value={{ visible, setVisible, show, setShow }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
