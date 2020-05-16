import React from 'react';
import { action } from '@storybook/addon-actions';
import { PlusOutlined } from '@ant-design/icons';
import ModalComponent from '../components/Modal';

import 'antd/dist/antd.css';
import GlobalStyles from '../styles/global';

export default {
  title: 'UI/Modal',
  component: ModalComponent,
};

export const Modal = (): React.ReactElement => (
  <>
    <GlobalStyles />
    <ModalComponent
      title="Add Toll"
      visible
      onOk={action('When is ok')}
      onCancel={action('Cancel')}
      okText="Ok"
      cancelText="cancel"
      iconTitle={PlusOutlined}
    >
      <h1>Modal</h1>
    </ModalComponent>
  </>
);
