import styled from 'styled-components';
import { Form, Input } from 'antd';

// const {  } = Form;

export const FormStyled = styled(Form)``;

export const InputStyled = styled(Input)`
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;

  &::placeholder {
    color: #b1adb9;
  }
`;

export const TextArea = styled(Input.TextArea)`
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;

  &::placeholder {
    color: #b1adb9;
  }
`;
