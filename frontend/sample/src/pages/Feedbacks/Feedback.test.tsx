import { fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";
import Feedback from "./Feedback";
import userEvent from "@testing-library/user-event";
import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
describe('Testing Feedback', () => {
    const resizeWindow = (x: any, y: any) => {
        window.innerWidth = x;
        window.innerHeight = y;
        window.dispatchEvent(new Event('resize'));
    }
    test('should works their functionality', async () => {


        render(<Feedback />)

        expect(screen.getByRole('emailInput')).toBeTruthy();
        expect(screen.getByTestId('checkbox')).toBeVisible();
        expect(screen.getByTestId("checkbox")).not.toBeChecked();
        userEvent.click(screen.getByTestId('checkbox'));
        expect(screen.getByTestId("checkbox")).toBeChecked();

        expect(screen.getByTestId('switch')).toBeVisible();
        expect(screen.getByTestId("switch")).not.toBeChecked();
        userEvent.click(screen.getByTestId('switch'));
        expect(screen.getByTestId("switch")).toBeChecked();

    })
    it('responsiveness test', async () => {
        jest.spyOn(window.screen, "width", "get").mockReturnValue(450);
        window.resizeTo(400, 400);
        render(<Feedback />)

        console.log(window.screen.width);
        // global.innerWidth = 400;
        // global.dispatchEvent(new Event('resize'));
        // expect(component.find('.welcome')).toBeInTheDocument();
        expect(screen.getByTestId("color")).toBeVisible();
        const div = screen.getByTestId('color')
        const computedStyle = window.getComputedStyle(div)
        console.log(computedStyle)
        const text = screen.getByText('Welcome')
        expect(text).toBeInTheDocument()
        // expect(text).toHaveStyle({ color: `#000` })
        
    })


})