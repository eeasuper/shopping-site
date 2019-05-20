import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

const options = [
  {value: 'Earplug', label: 'Earplug', className:'optional'},
  {value: 'More', label:'More'}
];

const defaultOption = "SHOP";

function test(){
  console.log("test")
}


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
          <h1>
            LOGO
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
                    <Link to="/" className="dropdown-anchor nav-anchor">Link 2</Link>
                    <Link to="/" className="dropdown-anchor nav-anchor">Link 3</Link>
                 </DropdownContent>
              </Dropdown>
            </li>
          </ul>
        </nav>
        <div className="grid-item">
          icons go here.
        </div>
      </div>
    </header>
  )
}

export default Navbar;