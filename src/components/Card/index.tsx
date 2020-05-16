import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import api from '../../services/api';

import { Tool } from '../../models';
import ToolContext from '../../contexts/tool';
import AppContext from '../../contexts/app';
import Modal from '../Modal';

import { CardContainer, ButtonRemove, Link } from './styles';

const CardComponent: React.FC<Tool> = ({
  id,
  title,
  link = '',
  description,
  tags,
}) => {
  const [show, setShow] = useState(false);
  const { visible, setVisible } = useContext(AppContext);
  const { setTools } = useContext(ToolContext);

  const showModal = (): void => {
    setShow(true);
    setVisible(true);
  };

  const closeModal = (): void => {
    setShow(false);
    setVisible(false);
  };

  const handleDelete = async (): Promise<void> => {
    try {
      await api.delete(`/tools/${id}`);
      setTools((prevTools: Tool[]) => prevTools.filter(tool => tool.id !== id));
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CardContainer id={id}>
        <div className="actions-container">
          <Link href={link || ''} className={link ? '' : 'disabled'}>
            {title}
          </Link>
          <ButtonRemove type="button" onClick={showModal}>
            <AiOutlineClose /> remove
          </ButtonRemove>
        </div>
        <p>{description}</p>
        <div className="tags-container">
          {tags.length && tags?.map(tag => <strong key={tag}>#{tag}</strong>)}
        </div>
      </CardContainer>
      <Modal
        visible={visible && show}
        iconTitle={AiOutlineClose}
        title="Remove tool"
        cancelText="Cancel"
        okText="Yes, remove"
        onCancel={closeModal}
        onOk={handleDelete}
      >
        <p>Are you sure you want to remove {title}?</p>
      </Modal>
    </>
  );
};

export default CardComponent;
