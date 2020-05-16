import React, { useEffect, useState, useContext } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import api from '../../services/api';

import { Tool } from '../../models/tool';

import AppContext from '../../contexts/app';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import FormComponent from '../../components/Form';

const Dashboard: React.FC = () => {
  const [form] = Form.useForm();
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
        iconTitle={PlusOutlined}
        visible={visible}
        onCancel={() => setVisible(false)}
        title="Add new tool"
        onOk={() => {
          console.log('aq');
        }}
        okText="Add tool"
        cancelText="Cancel"
      >
        <FormComponent formRef={form} />
      </Modal>
    </>
  );
};

export default Dashboard;
