import React, { useContext } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form } from 'antd';

import { Tool } from 'models';
import api from '../../services/api';

import AppContext from '../../contexts/app';
import ToolContext from '../../contexts/tool';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import FormComponent from '../../components/Form';

const Dashboard: React.FC = () => {
  const [form] = Form.useForm();
  const { visible, setVisible, show, setShow } = useContext(AppContext);
  const { tools, setTools } = useContext(ToolContext);

  const handleSubmit = async (): Promise<void> => {
    try {
      const { title, link, description, tags } = await form.validateFields();

      const { data } = await api.post<Tool>('/tools', {
        title,
        link,
        description,
        tags: tags.split(' '),
      });

      setTools((prevTools: Tool[]) => [...prevTools, data]);
      setVisible(false);
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = (): void => {
    setShow(false);
    setVisible(false);
  };

  return (
    <>
      <Header />
      {tools.map(tool => (
        <Card
          checkedTag={tool.checkedTag}
          id={tool.id}
          key={`${tool.id}-${Date.now()}`}
          title={tool.title}
          description={tool.description}
          link={tool.link}
          tags={tool.tags}
        />
      ))}
      <Modal
        iconTitle={PlusOutlined}
        visible={visible && show}
        onCancel={closeModal}
        title="Add new tool"
        onOk={handleSubmit}
        okText="Add tool"
        cancelText="Cancel"
      >
        <FormComponent formRef={form} />
      </Modal>
    </>
  );
};

export default Dashboard;
