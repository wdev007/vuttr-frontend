import React from 'react';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

import { Title, SubTitle, SearchBar, Search, Check } from './styles';

const HeaderComponent: React.FC = () => (
  <header data-testid="app-header">
    <Title>VUTTR</Title>
    <SubTitle>Very Userful Tools Remember</SubTitle>

    <SearchBar>
      <div>
        <Search prefix={<SearchOutlined />} placeholder="search" />
        <Check>search in tags only</Check>
      </div>
      <button type="button">
        <PlusOutlined /> Add
      </button>
    </SearchBar>
  </header>
);

export default HeaderComponent;
