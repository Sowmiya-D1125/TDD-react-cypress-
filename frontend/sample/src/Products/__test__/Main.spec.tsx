import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Product from '../Product';
import { shallow } from 'enzyme';


test('displays heading', () => {
    render(<Product />);
    const linkElement = screen.getByText(/Products List/i);
    expect(linkElement).toBeInTheDocument();
});

describe('button functionality', () => {
    it('text should not be visible', () => {
        const wrapper = shallow(<Product/>)
        expect(wrapper.exists("h4")).toBe(false);
    })
    it('should be visible',async()=>{
        render(<Product/>);
        fireEvent.click(screen.getByText('show'))
        await waitFor(() => expect(screen.getByText("Hi, Welcome to Our page")).toBeTruthy())
    })
    it('toggle between show btn' , async() => {
        const wrapper = shallow(<Product/>)
        render(<Product/>);

        if(wrapper.exists("h4")){
            fireEvent.click(screen.getByText('show'))
        await waitFor(() => expect(screen.getByText("Hi, Welcome to Our page")).toBeInTheDocument())
        }
        else {
            fireEvent.click(screen.getByText('show'))
            await waitFor(() => expect(screen.getByText("Hi, Welcome to Our page")).toBeTruthy())
        }
    })
})
