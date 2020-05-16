import React from 'react';

import { FormInstance } from 'antd/lib/form';
import { FormStyled, InputStyled, TextArea } from './styles';

const { Item } = FormStyled;

interface Props {
  formRef: FormInstance;
}

const FormComponent: React.FC<Props> = ({ formRef }) => {
  return (
    <FormStyled form={formRef} name="add_tool" layout="vertical">
      <Item name="title" label="Tool Name">
        <InputStyled type="text" placeholder="Name" />
      </Item>
      <Item name="links" label="Tool Link">
        <InputStyled type="url" placeholder="Link..." />
      </Item>
      <Item name="description" label="Tool description">
        <TextArea placeholder="Description..." />
      </Item>
      <Item name="tags" label="Tags">
        <InputStyled type="text" placeholder="Tags..." />
      </Item>
    </FormStyled>
  );
};

export default FormComponent;
