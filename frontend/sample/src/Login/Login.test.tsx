import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './Login';
import { mount, shallow } from 'enzyme';
import { findByTestAttr } from '../utils/TestConfig';
import userEvent from "@testing-library/user-event";
import axios from 'axios';
import mockAxios from 'jest-mock-axios';
import UppercaseProxy from './UppercaseProxy';
import { createMemoryHistory } from 'history';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
  create: jest.fn(),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('SignIn/SignUp test', () => {
  beforeEach(() => {
    render(<Login />);
  });
  // afterEach(() => {
  //   // cleaning up the mess left behind the previous test
  //   mockAxios.reset();
  // });


  test('visibility check', () => {
    const wrapper = shallow(<Login />);
    // render(<Login />);
    expect(screen.getByTestId('errmsg')).not.toBeVisible();
    expect(screen.getByTestId('sigin-in-btn')).toBeDisabled();
    expect(findByTestAttr(wrapper, 'email').length).toBe(1);
    expect(findByTestAttr(wrapper, 'password').length).toBe(1);
  });

  test('enable button when credentials are given', () => {
    // render(<Login />);
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'sowmiya' },
    });
    expect(screen.getByTestId('sigin-in-btn')).toBeDisabled();
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'password' },
    });
    expect(screen.getByTestId('sigin-in-btn')).toBeEnabled();
  });

  // test('enter inavlid email and password', async () => {
  //   userEvent.type(screen.getByTestId("email"), "michael.doe@gmail.com");
  //   userEvent.type(screen.getByTestId("password"), "12345");    
  //   expect(screen.getByTestId('sigin-in-btn')).toBeEnabled();
  //   expect(
  //     screen.getByTestId("errmsg")
  //   ).not.toBeVisible();
  //   userEvent.click(screen.getByTestId('sigin-in-btn'));
  //   await waitFor(() => {
  //     expect(screen.getByText("Hello User, Your Email are Not Registered ,Pls Sign Up")).toBeInTheDocument();
  //     expect(
  //       screen.getByTestId("errmsg")
  //     ).toBeVisible();
  //   });
  // });

  test('enter valid email and password', async()=>{
    
    const history = createMemoryHistory();
    userEvent.type(screen.getByTestId("email"), "sowmiya@yopmail.com");
    userEvent.type(screen.getByTestId("password"), "Augusta@12"); 
    expect(screen.getByTestId('sigin-in-btn')).toBeEnabled();

    userEvent.click(screen.getByTestId('sigin-in-btn'));
    
    expect(
      screen.getByTestId("errmsg")
    ).not.toBeVisible();
    // window.localStorage.setItem('token', JSON.stringify("12345flaskfjlak"));
    await waitFor(() => {
      expect(
        screen.getByTestId("errmsg")
      ).not.toBeVisible();
    });
  })
})