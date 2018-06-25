import React from 'react';
import './sidebar.css';
import {
  NavLink
} from "react-router-dom";

export const SideBar = (props) => {
  return (<div className="App-sidebar">
    <nav className="App-sidebar-nav">
      <NavLink exact to="/" className="nav">Product list</NavLink>
      <NavLink exact to="/cart" className="nav">Cart</NavLink>
    </nav>
  </div>);
};

export default SideBar;