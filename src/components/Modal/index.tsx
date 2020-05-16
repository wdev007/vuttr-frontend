import React from 'react';

import { ModalContainer } from './styles';

import Title from './Title';

interface Props {
  visible: boolean;
  title: string;
  okText: string;
  cancelText: string;
  iconTitle: React.FC;
  onOk: () => void;
  onCancel: () => void;
}

const ModalComponent: React.FC<Props> = ({
  children,
  title,
  visible,
  onOk,
  onCancel,
  iconTitle,
  okText,
  cancelText,
}) => (
  <ModalContainer
    title={<Title description={title} icon={iconTitle} />}
    visible={visible}
    onOk={() => {
      onOk();
      ModalContainer.destroyAll();
    }}
    onCancel={() => {
      onCancel();
      ModalContainer.destroyAll();
    }}
    okText={okText}
    cancelText={cancelText}
  >
    {children}
  </ModalContainer>
);

export default ModalComponent;
