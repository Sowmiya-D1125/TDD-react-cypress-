import axios from "axios";
const BASE_URL = "http://localhost:5000/";

var isUserLogged:any = localStorage.getItem('token') !== null ? localStorage.getItem('token') : "";
// var isUserLogged = JSON.parse(getLocalStorage);
var configHeader = {};

if (isUserLogged) {
      configHeader =
      {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${isUserLogged.token}`,
      }
}
else {
      configHeader =
      {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
      }
}

// defining default config using axios
export const configAxios = axios.create({
      baseURL: BASE_URL,
      headers: configHeader,
});
