import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import User from "./User";
import { mount, shallow } from "enzyme";
import { findByCustome } from "../../utils/TestConfig";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import { configAxios } from "../../utils/AxiosConfig";
const mock = new MockAdapter(configAxios, { onNoMatch: "throwException" });
const todos = [
    {
        address: "no 12 , anna street , chennai -56",
        adharNo: "123456789",
        email: "sowmiya@yopmail.com",
        firstName: "testing user",
        isActive: true,
        isDeleted: false,
        lastName: "D",
        panNo: "87654321",
        password: "$2a$10$QFdvwniXsUTMwiUpLYA.Wu6cputNBeIyRsFuwY546a8hznOtPIzlq",
        __v: 0,
        _id: "641bfca53f1e06863e3a1f43"
    }
];
const userAdded = {
    success: true
}
const appSetUp = (props = {}) => {
    return mount(<User />);
}
describe('Testing Products page', () => {
    let component
    beforeEach(() => {
        jest.mock('axios');
        render(<User />);
        component = appSetUp();
        mock.reset();
    });
    afterEach(cleanup);
    test('should render the User Page ', async () => {
        // const wrapper = mount(<User/>)

        expect(screen.getByText("Create User")).toBeVisible();

        // expect(wrapper.find(`[label="First Name"]`).exists()).toBeFalsy();
        const firstName = findByCustome(component, 'label', "First Name");
        const lastName = findByCustome(component, 'label', "Last Name");
        const email = findByCustome(component, 'label', "Email Address");
        const password = findByCustome(component, 'label', "Password");
        const aadhar = findByCustome(component, 'label', "Aadhaar");
        expect(firstName.exists()).toBeFalsy();
        expect(lastName.exists()).toBeFalsy();
        expect(email.exists()).toBeFalsy();
        expect(password.exists()).toBeFalsy();
        expect(aadhar.exists()).toBeFalsy();
    })

    test('clicking create user button should open modal', async () => {
        // const wrapper = mount(<User/>)
        expect(screen.getByText("Create User")).toBeVisible();

        // expect(wrapper.find(`[label="First Name"]`).exists()).toBeFalsy();
        const firstName = findByCustome(component, 'className', "firstname");
        const lastName = findByCustome(component, 'label', "Last Name");
        const button = screen.getByText('Create User');
        expect(firstName.exists()).toBeFalsy();
        expect(lastName.exists()).toBeFalsy();
        expect(button).toBeInTheDocument();
        expect(screen.queryByText('modal')).toBeNull();
        expect(screen.queryByText("Add User")).toBeNull();

        userEvent.click(screen.getByTestId('create-user-btn'));
        await waitFor(() => {
            expect(screen.getByText("Add User")).toBeVisible();
            expect(screen.queryByText("Add User")).toBeInTheDocument();

        });

    })

    test('should list all the users list', async () => {
        expect(screen.queryByText("testing user")).toBeNull();
        mock.onGet("CustomerDetails/getData").reply(200, todos);
        // screen.debug();
        render(<User />)
        await waitFor(() => {
            expect(screen.getByText("testing user")).toBeVisible();
        });
    })

    test('Should show the error msg when create btn is clicked without entering values', () => {
        expect(screen.queryByText("Add User")).not.toBeInTheDocument();
        userEvent.click(screen.getByTestId('create-user-btn'));
        expect(screen.queryByText("Add User")).toBeInTheDocument();
        expect(screen.queryByText("First name must have at least 2 letters")).toBeNull();
        userEvent.click(screen.getByTestId('call-api-btn'));
        expect(screen.queryByText("First name must have at least 2 letters")).toBeInTheDocument();
        expect(screen.queryByText("Last name must have at least 1 letters")).toBeInTheDocument();
        expect(screen.queryByText("Email must not be empty")).toBeInTheDocument();
        expect(screen.queryByText("Password must not be empty")).toBeInTheDocument();
        expect(screen.queryByText("Aadhar must not be empty")).toBeInTheDocument();
        expect(screen.queryByText("Pan Number is required")).toBeInTheDocument();
        expect(screen.queryByText("Address is Required")).toBeInTheDocument();
        expect(screen.queryByText("Contact number is required")).toBeInTheDocument();

        userEvent.type(screen.getByTestId("firstname"), "venkat");
        expect(screen.queryByText("First name must have at least 2 letters")).toBeNull();

    })

    test('Should create a user when btn is clicked with all values',  () => {
        const values = {
            firstName: "ebin",
            lastName: "Priya",
            email: "nifaanya@yopmail.com",
            password: "Augusta@12",
            adharNo: "467923562345",
            panNo: "69H68JDI7",
            address: "12,malumichampati road",
            contactNo: "9635724679",
        }
        expect(screen.queryByText("Add User")).toBeNull();
        userEvent.click(screen.getByTestId('create-user-btn'));
        expect(screen.queryByText("Add User")).toBeInTheDocument();
        userEvent.type(screen.getByTestId("firstname"), values.firstName);
        userEvent.type(screen.getByTestId("lastname"), values.lastName);
        userEvent.type(screen.getByTestId("email"), values.email);
        userEvent.type(screen.getByTestId("password"), values.password);
        userEvent.type(screen.getByTestId("aadhar"), values.adharNo);
        userEvent.type(screen.getByTestId("pan"), values.panNo);
        userEvent.type(screen.getByTestId("address"), values.address);
        userEvent.type(screen.getByTestId("contact"), values.contactNo);
        userEvent.click(screen.getByTestId('call-api-btn'));
      
    })
})