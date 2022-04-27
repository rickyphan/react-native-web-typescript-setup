import React from 'react';
import App from '../src/components/App';
import renderer from 'react-test-renderer';

it('should render app', () => {
  const component = renderer.create(<App />);
  expect(component.toJSON()).not.toBeUndefined();
});
