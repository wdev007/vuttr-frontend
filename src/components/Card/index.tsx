import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import api from '../../services/api';

import { Tool } from '../../models';
import ToolContext from '../../contexts/tool';
import Modal from '../Modal';

import { CardContainer, ButtonRemove, Link } from './styles';

const CardComponent: React.FC<Tool> = ({
  id,
  title,
  link = '',
  description,
  tags,
  checkedTag,
}) => {
  const [show, setShow] = useState(false);
  const { setTools } = useContext(ToolContext);

  const closeModal = (): void => {
    setShow(false);
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
          <ButtonRemove type="button" onClick={() => setShow(true)}>
            <AiOutlineClose /> remove
          </ButtonRemove>
        </div>
        <p>{description}</p>
        <div className="tags-container">
          {tags.length &&
            tags?.map(tag => (
              <strong
                key={tag}
                className={checkedTag === tag ? 'checked-tag' : ''}
              >
                #{tag}
              </strong>
            ))}
        </div>
      </CardContainer>
      <Modal
        visible={show}
        iconTitle={AiOutlineClose}
        title="Remove tool"
        cancelText="Cancel"
        okText="Yes, remove"
        onCancel={closeModal}
        onOk={handleDelete}
      >
        <p>
          Are you sure you want to remove
          <strong className="text-negrito">{title}</strong> ?
        </p>
      </Modal>
    </>
  );
};

export default CardComponent;
