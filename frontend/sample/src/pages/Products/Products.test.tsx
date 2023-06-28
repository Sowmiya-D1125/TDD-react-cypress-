import { render, screen, waitFor } from "@testing-library/react";
import Products from "./Products";
describe('Testing Products page', () => {
    test('should render the products list when rendered', async() => {
        render(<Products />)
        await waitFor(() =>
            screen.getByText("Hyaluronic Acid Serum")
        )
    })
})