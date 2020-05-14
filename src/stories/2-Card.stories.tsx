import React, { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import CardComponent from '../components/Card';

export default {
  title: 'Card',
  component: CardComponent,
  decorators: [(state: any) => <MemoryRouter>{state()}</MemoryRouter>],
};

export const Card = (): ReactElement => (
  <CardComponent
    id="olamundo"
    title="Olá mundo"
    tags={['oi', 'ola']}
    link="www.google.com"
    description="oi aq description"
  />
);
