import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Product from '../src/Products/Product';
import ReactPlayer from 'react-player'
import { loadavg } from 'os';
import PokemonList from './Pokeman/Pokeman';
import RouteLayout from './Router/Routelayout';
function App(){
  function timeSince(date:Date|any) {

    const today = new Date();
    const diffMs = today.getTime() - new Date(date).getTime(); // milliseconds between now & Christmas
    const diffDays = Math.floor(diffMs / 86400000); // days
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    if (diffDays > 0) {
      return `${diffDays}d ago`;
    }
    if (diffHrs > 0) {
      return `${diffHrs}h ago`;
    }
    if (diffMins > 0) {
      return `${diffMins}m ago`;
    }
    return `Just now`;
}

  return (
    <div data-testid="appComponent">
      {/* <TopNav>
      Welcome
      </TopNav>
      <Product/>
      <div data-testid="messageText">
      {timeSince(new Date("Thu Feb 23 2023 20:25:09 GMT-0800 (Pacific Standard Time)"))}
        <br/>
       <h2>hello</h2>
      </div>
      <div>
        <PokemonList/>
      </div> */}
      <RouteLayout/>
    </div>
  );
}

export default App;
