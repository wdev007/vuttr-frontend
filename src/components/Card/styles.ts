import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 145px;
  width: 100%;

  position: relative;
  overflow: auto;

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

  div.actions-container {
    display: flex;
    justify-content: space-between;
  }

  div.tags-container {
    display: flex;
    position: absolute;
    flex-wrap: wrap;

    strong {
      font-weight: bold;
      color: #000;
    }

    strong.checked-tag {
      background-color: #12db89;
    }
  }

  div,
  p,
  strong {
    margin: 8px 8px 0;
  }

  @media (max-width: 585px) {
    div.actions-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      a,
      button {
        margin-bottom: 10px;
      }
    }
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

export const Link = styled.a`
  font-size: 20px;

  &.disabled {
    pointer-events: none;
  }
`;
