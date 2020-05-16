import React, { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import CardComponent from '../components/Card';

import 'antd/dist/antd.css';
import GlobalStyles from '../styles/global';

export default {
  title: 'UI/Card',
  component: CardComponent,
  decorators: [(state: any) => <MemoryRouter>{state()}</MemoryRouter>],
};

export const Card = (): ReactElement => (
  <>
    <GlobalStyles />
    <CardComponent
      id="Notion"
      title="Notion"
      tags={[
        'organization',
        'planning',
        'collaboration',
        'writing',
        'calendar',
      ]}
      link="https://notion.so"
      description="All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. "
    />
  </>
);

export const CardWithCheckedTag = (): ReactElement => (
  <>
    <GlobalStyles />
    <CardComponent
      checkedTag="json"
      id="json-server"
      title="json-server"
      tags={['api', 'json', 'schema', 'node', 'github', 'rest']}
      link="https://github.com/typicode/json-server"
      description="Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges."
    />
  </>
);

CardWithCheckedTag.story = {
  name: 'Card with tag checked',
};
