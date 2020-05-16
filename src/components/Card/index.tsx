import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Tool } from '../../models/tool';
import { CardContainer, ButtonRemove, Link } from './styles';

const CardComponent: React.FC<Tool> = ({
  id,
  title,
  link = '',
  description,
  tags,
}) => (
  <CardContainer id={id}>
    <div className="actions-container">
      <Link href={link || '#'} className={link ? '' : 'disabled'}>
        {title}
      </Link>
      <ButtonRemove type="button">
        <AiOutlineClose /> remove
      </ButtonRemove>
    </div>
    <p>{description}</p>
    <div className="tags-container">
      {tags.length && tags?.map(tag => <strong key={tag}>#{tag}</strong>)}
    </div>
  </CardContainer>
);

export default CardComponent;
