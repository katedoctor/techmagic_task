import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <NavLink exact to="/" className="nav"><h1 className="App-title">My simple shop</h1></NavLink>
    </header>
  )
}

export default Header;