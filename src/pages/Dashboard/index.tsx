import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import Card from '../../components/Card';
import { Tool } from '../../models/tool';

const Dashboard: React.FC = () => {
  const [tools, setTools] = useState<Array<Tool>>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const { data } = await api.get<Array<Tool>>('/tools');
      setTools(prevTools => [...prevTools, ...data]);
    }
    loadData();
  }, []);

  return (
    <>
      <Header />
      {tools.map(tool => (
        <Card
          id={tool.id}
          key={tool.id}
          title={tool.title}
          description={tool.description}
          link={tool.link}
          tags={tool.tags}
        />
      ))}
    </>
  );
};

export default Dashboard;
