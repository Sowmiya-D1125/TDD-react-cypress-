import { render, screen, waitFor } from "@testing-library/react";
import PokemonList from "./Pokeman";
import * as api from "./api";
import { getPokemonsFromApi } from './api';
import { shallow } from "enzyme";

/**
 * Mock the api module so that we can inject
 * the desired behavior into getPokemonsFromApi
 * while testing
 */
jest.mock("./api");

describe("PokemonList Component", () => {

    // After each test clear the mock
    beforeEach(() => jest.clearAllMocks());

    it("should render pokemon names when api responds", async () => {
        // For this test, when getPokemonsFromApi is called
        // return the given value wrapped in a Promise
        api.getPokemonsFromApi.mockResolvedValue({
            results: [{ name: "pokedex_test" }],
        });
        // Render the component
        render(<PokemonList />);
        // See if the pokemon name we returned in the mock is visible
        await waitFor(() => {
            screen.getByText("pokedex_test");
        });
    });

    it("should render error message when api fails", async () => {
        api.getPokemonsFromApi.mockRejectedValue({});
        render(<PokemonList />);
        await waitFor(() => {
            screen.getByText("Unable to fetch data");
        });
    });
});

describe('counting length', () => {
    it('renders all list', async () => {
        const value = await fetch("https://pokeapi.co/api/v2/pokemon");
        const res = await value.json();
        var dataCount = res.results.length
        // console.log(dataCount);
        // console.log(res);

        const wrapper = shallow(<PokemonList />);
        const table = wrapper.find('tr')
        expect(table.length).toBe(0);
        screen.debug();
        api.getPokemonsFromApi.mockResolvedValue({
            results: res.results,
        });
        render(<PokemonList />);
        // screen.debug();
        await screen.findAllByRole('row')
        await waitFor(() => 
        // console.log("sow",screen.getAllByRole('row').length),
        expect(screen.getAllByRole('row').length).toBe(dataCount)
        )
        await waitFor(() =>
            screen.getByText("bulbasaur")
            // expect(table.length).toBe(dataCount)
        )
    })
});