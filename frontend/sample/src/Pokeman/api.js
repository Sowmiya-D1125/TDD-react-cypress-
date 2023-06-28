export const getPokemonsFromApi = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon").then((resp) => {
      if (resp.status === 200) return resp.json();
      else throw new Error("Invalid response");
    });
  };

export const getProductsApi = () => {
  return fetch("https://dummyjson.com/products").then((resp) => {
      if (resp.status === 200) return resp.json();
      else throw new Error("Invalid response");
    });
}