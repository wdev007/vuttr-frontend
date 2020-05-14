import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 145px;
  width: 100%;

  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  transition: transform 0.2s;

  & + div {
    margin-top: 10px;
  }

  &:hover {
    transform: translateX(5px);
    box-shadow: 0px 5px 7px #0000000d;
  }

  div {
    display: flex;
    justify-content: space-between;

    margin: 5px 5px 0;
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 100px;
  height: 40px;
  background: #f95e5a 0% 0% no-repeat padding-box;
  color: #fff;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #cc4c4c 0% 0% no-repeat padding-box;
  }
  &:active {
    background: #a53f3f 0% 0% no-repeat padding-box;
  }
`;
