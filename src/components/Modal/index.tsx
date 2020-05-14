import React from 'react';
import { Modal } from 'antd';

interface Props {
  visible: boolean;
  title: string;
  onOk: () => void;
  onCancel: () => void;
}

const ModalComponent: React.FC<Props> = ({
  children,
  title,
  visible,
  onOk,
  onCancel,
}) => (
  <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
    {children}
  </Modal>
);

export default ModalComponent;
