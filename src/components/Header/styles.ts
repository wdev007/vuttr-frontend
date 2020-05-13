import styled from 'styled-components';
import { Input, Checkbox } from 'antd';

export const Title = styled.h1`
  font: Semibold 26px/32px Source Sans Pro;
  color: #170c3a;
  opacity: 1;
`;

export const SubTitle = styled.h4``;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  margin: 30px 0;

  div {
    display: flex;
    align-items: baseline;

    width: 50%;
  }

  button {
    width: 174px;
    height: 50px;

    margin-left: auto;
    background: #365df0 0% 0% no-repeat padding-box;
    color: #fff;
    border: none;
    border-radius: 5px;
    opacity: 1;
  }

  button:hover {
    background: #2f55cc 0% 0% no-repeat padding-box;
  }
`;

export const Search = styled(Input)`
  padding: 10px;
  max-width: 403px;
  max-height: 50px;

  &,
  input {
    text-align: left;
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    opacity: 1;
  }

  input::placeholder {
    width: 270px;
    height: 25px;

    letter-spacing: 0.4px;
    color: #b1adb9;
    opacity: 1;
  }
`;

export const Check = styled(Checkbox)`
  width: 250px;

  color: #170c3a;
  font: Regular 20px/26px Source Sans Pro;
  margin-left: 10px;
`;
