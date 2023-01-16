/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

jest.mock('react-markdown', () => (props: any) => {
  return <>{props.children}</>;
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
