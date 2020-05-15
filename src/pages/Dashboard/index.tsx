import React, { useEffect, useState, useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import api from '../../services/api';

import AppContext from '../../contexts/app';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import { Tool } from '../../models/tool';

const Dashboard: React.FC = () => {
  const { visible, setVisible } = useContext(AppContext);
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
      <Modal
        iconTitle={AiOutlineClose}
        visible={visible}
        onCancel={() => setVisible(false)}
        title="Add new tool"
        onOk={() => {
          console.log('aq');
        }}
        okText="Add tool"
        cancelText="Cancel"
      />
    </>
  );
};

export default Dashboard;
