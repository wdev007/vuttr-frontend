import React, { useContext } from 'react';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

import { Title, SubTitle, SearchBar, Search, Check } from './styles';
import AppContext from '../../contexts/app';

const HeaderComponent: React.FC = () => {
  const { setVisible } = useContext(AppContext);

  const showModal = (): void => {
    setVisible(true);
  };

  return (
    <header data-testid="app-header">
      <Title>VUTTR</Title>
      <SubTitle>Very Userful Tools Remember</SubTitle>

      <SearchBar>
        <div>
          <Search prefix={<SearchOutlined />} placeholder="search" />
          <Check>search in tags only</Check>
        </div>
        <button type="button" onClick={showModal}>
          <PlusOutlined /> Add
        </button>
      </SearchBar>
    </header>
  );
};

export default HeaderComponent;
