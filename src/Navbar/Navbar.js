import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

function Navbar(props){
  const dropdown = React.createRef();

  function toggleDropdown(e){

    const drop = dropdown.current;
    drop.hide();
  }

  return(
    <header className="site-header">
      <div className="grid grid-table">
        <div className="grid-item">
          <h1 className="header-logo">
            <Link to="/">
              <img src="images/logo.png" />
            </Link>
          </h1>
        </div>
        <nav className="grid-item">
          <ul className="nav-ul">
            <li>
              <Link to="/" className="nav-menu-label nav-anchor">Home</Link>
            </li>
            <li>
              <Dropdown className="dropdown" ref={dropdown}>
                 <DropdownTrigger className="nav-menu-label" >
                   SHOP
                   <svg aria-hidden="true" focusable="false" role="presentation" className="icon-chevron-down" viewBox="0 0 498.98 284.49"><path className="cls-1" d="M80.93 271.76A35 35 0 0 1 140.68 247l189.74 189.75L520.16 247a35 35 0 1 1 49.5 49.5L355.17 511a35 35 0 0 1-49.5 0L91.18 296.5a34.89 34.89 0 0 1-10.25-24.74z" transform="translate(-80.93 -236.76)"></path></svg>
                 </DropdownTrigger>
                 <DropdownContent className="dropdown-content" onClick={toggleDropdown}>
                    <Link to="/all" className="dropdown-anchor nav-anchor">All Products</Link>
                    <Link to="/flight" className="dropdown-anchor nav-anchor">For Flights</Link>
                    <Link to="/music" className="dropdown-anchor nav-anchor">For Music</Link>
                    <Link to="/activity" className="dropdown-anchor nav-anchor">For Activity</Link>
                 </DropdownContent>
              </Dropdown>
            </li>
          </ul>
        </nav>
        <div className="grid-item nav-icons">
          <div className="nav-search">
            <input type="text" placeholder="Search"/>
            <button>
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-search" viewBox="0 0 37 40"><path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;