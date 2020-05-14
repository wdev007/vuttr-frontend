import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Header', () => {
  it('Should render Header of Application: ', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('app-header')).toBeTruthy();
  });
});
