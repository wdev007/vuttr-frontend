import { createContext } from 'react';
import { AppContextData } from '../models/appContextData';

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  return AppContext.Provider({ children, value: { visible: false } });
};

export default AppContext;
