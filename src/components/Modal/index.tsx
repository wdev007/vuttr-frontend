import React from 'react';
import { Modal } from 'antd';

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
  <Modal
    title={<Title description={title} icon={iconTitle} />}
    visible={visible}
    onOk={onOk}
    onCancel={onCancel}
    okText={okText}
    cancelText={cancelText}
  >
    {children}
  </Modal>
);

export default ModalComponent;
