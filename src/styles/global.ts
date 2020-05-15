import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #FCFCFD;
    -webkit-font-smoothing: antialiased
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px
  }

  body, input, button {
    font: 16px 'Source Sans Pro', sans-serif;
  }
  button {
    cursor: pointer;
  }

  .ant-modal-header, .ant-modal-footer {
    border: none;
  }

  .ant-btn {
    width: 100px;
    color: #fff;
    background: #F95E5A 0% 0% no-repeat padding-box;
    border-radius: 5px;
  }
  .ant-btn:hover {
    background: #CC4C4C 0% 0% no-repeat padding-box;
    color: #fff;
    border: none;
  }
  .ant-btn:active {
    background: #A53F3F 0% 0% no-repeat padding-box;
  }
  .ant-btn-primary {
    width: 100px;
    background: #365DF0 0% 0% no-repeat padding-box;
    border-radius: 5px;
    border: none;
  }
  .ant-btn-primary:hover {
    background: #2F55CC 0% 0% no-repeat padding-box;
  }
  .ant-btn-primary:active {
    background: #244AA8 0% 0% no-repeat padding-box;
  }

`;
