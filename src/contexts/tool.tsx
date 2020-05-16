import React, { createContext, useEffect, useState } from 'react';
import { Tool, ToolContextData } from 'models';
import api from '../services/api';

const ToolContext = createContext({} as ToolContextData);

export const ToolProvider: React.FC = ({ children }) => {
  const [tools, setTools] = useState<Array<Tool>>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const { data } = await api.get<Array<Tool>>('/tools');
      setTools(prevTools => [...prevTools, ...data]);
    }
    loadData();
  }, []);

  return (
    <ToolContext.Provider value={{ tools }}>{children}</ToolContext.Provider>
  );
};

export default ToolContext;
