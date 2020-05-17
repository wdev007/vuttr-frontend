import React from 'react';
import { shallow } from 'enzyme';

import Card from '../components/Card';

describe('Card', () => {
  const props = {
    id: 'Notion',
    title: 'Notion',
    tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
    link: 'https://notion.so',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
  };

  it('should render correctly with no props', () => {
    const component = shallow(<Card {...props} />);

    expect(component).toMatchSnapshot();
  });
});
