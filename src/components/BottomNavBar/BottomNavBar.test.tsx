import React from 'react';
import ReactDOM from 'react-dom';
import BottomNavBar from './BottomNavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BottomNavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
