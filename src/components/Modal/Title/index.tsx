import React from 'react';

import { Container } from './styles';

interface Props {
  icon: React.FC;
  description: string;
}

const TitleModal: React.FC<Props> = ({ description, icon: Icon }) => (
  <Container>
    <Icon />
    <span>{description}</span>
  </Container>
);

export default TitleModal;
