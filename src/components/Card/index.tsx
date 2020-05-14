import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Tool } from '../../models/tool';
import { CardContainer, ButtonRemove } from './styles';

const CardComponent: React.FC<Tool> = ({
  id,
  title,
  link = '',
  description,
  tags,
}) => (
  <CardContainer id={id}>
    <div>
      <a href={link}>{title}</a>
      <ButtonRemove type="button">
        <AiOutlineClose /> remove
      </ButtonRemove>
    </div>
    <p>{description}</p>
    {tags.length && tags?.map(tag => <strong key={tag}>#{tag}</strong>)}
  </CardContainer>
);

export default CardComponent;
