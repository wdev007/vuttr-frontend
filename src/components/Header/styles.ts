import styled from 'styled-components';
import { Input, Checkbox } from 'antd';

export const Title = styled.h1`
  font-size: 42px;
  color: #170c3a;

  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const SubTitle = styled.h4`
  font-size: 30px;
  color: #170c3a;

  @media (max-width: 960px) {
    text-align: center;
  }
`;

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
    font-size: 18px;
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
  button:active {
    background: #244aa8 0% 0% no-repeat padding-box;
  }

  @media (max-width: 960px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    div {
      flex-direction: column;
      width: auto;
    }
    div > span {
      margin-bottom: 10px;
    }
    button {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;

export const Search = styled(Input)`
  padding: 10px;
  max-width: 403px;
  max-height: 50px;

  &:focus,
  &:hover,
  &:active,
  .ant-input-affix-wrapper {
    border-color: #ebeaed;
  }

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
    font-size: 20px;
    letter-spacing: 0.4px;
    color: #b1adb9;
    opacity: 1;
  }

  @media (max-width: 960px) {
    width: 400px;
  }
  @media (max-width: 585px) {
    width: 260px;
  }
`;

export const Check = styled(Checkbox)`
  width: 250px;

  color: #170c3a;
  font-size: 14px;
  margin-left: 10px;
`;
