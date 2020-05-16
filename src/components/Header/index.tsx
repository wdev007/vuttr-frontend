import React, { useContext, useState, useEffect } from 'react';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

import api from '../../services/api';

import { Title, SubTitle, SearchBar, Search, Check } from './styles';

import AppContext from '../../contexts/app';
import ToolContext from '../../contexts/tool';
import useDebounce from '../../hooks/useDebounce';

const HeaderComponent: React.FC = () => {
  const [input, setInput] = useState('');
  const [check, setCheck] = useState(false);
  const { setVisible, setShow } = useContext(AppContext);
  const { setTools } = useContext(ToolContext);
  const debouncedSearch = useDebounce(input, 500);

  const showModal = (): void => {
    setVisible(true);
    setShow(true);
  };

  useEffect(() => {
    if (debouncedSearch) {
      const search = async (): Promise<void> => {
        const url = check
          ? `/tools?tags_like=${debouncedSearch}`
          : `/tools?title=${debouncedSearch}`;
        const { data } = await api.get(url);
        setTools(data);
      };
      search();
    } else {
      const request = async (): Promise<void> => {
        const { data } = await api.get('/tools');
        setTools(() => [...data]);
      };
      request();
    }
  }, [debouncedSearch, check]);

  return (
    <header data-testid="app-header">
      <Title>VUTTR</Title>
      <SubTitle>Very Userful Tools Remember</SubTitle>

      <SearchBar>
        <div>
          <Search
            prefix={<SearchOutlined />}
            placeholder="search"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <Check onChange={e => setCheck(e.target.checked)}>
            search in tags only
          </Check>
        </div>
        <button type="button" onClick={showModal}>
          <PlusOutlined /> Add
        </button>
      </SearchBar>
    </header>
  );
};

export default HeaderComponent;
