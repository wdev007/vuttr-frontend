import React from 'react';
import HeaderComponent from '../components/Header';

import 'antd/dist/antd.css';
import GlobalStyles from '../styles/global';

export default {
  title: 'UI/Header',
  component: HeaderComponent,
};

export const Header = (): React.ReactElement => (
  <>
    <GlobalStyles />
    <HeaderComponent />
  </>
);
