import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr } from './utils/TestConfig';
import axios from 'axios'

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
  create: jest.fn(),
}))

const appSetUp = (props={}) => {
  return shallow(<App/>);
}
describe('App Component', () => {
  let component:any;
  beforeEach(() => {
    component = appSetUp();
  });

  it('Should render without error', () => {
      const wrapper = findByTestAttr(component, 'appComponent');
      expect(wrapper.length).toBe(1);
  });
})