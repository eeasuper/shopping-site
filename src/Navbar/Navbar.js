import React from 'react';
import Dropdown from 'react-dropdown'
import './Navbar.css';

const options = [
  {value: 'Earplug', label: 'Earplug', className:'optional'},
  {value: 'More', label:'More'}
];

const defaultOption = "SHOP";

function Navbar(props){
  const dropdown = React.createRef();

  function showDropdown(){
    const drop = dropdown.current;
    if(drop.style.display === "block"){
      /* if the user clicks the button twice, close the menu.*/
      drop.style.display = "none"
    }else{
      drop.style.display = "block";
    }
  }

  function closeDropdown(){
    const drop = dropdown.current;
    drop.style.display = "none";
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
              <a>Home</a>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropdown-button" onClick={showDropdown} onBlur={closeDropdown}>
                  SHOP
                  <svg aria-hidden="true" focusable="false" role="presentation" className="icon-chevron-down" viewBox="0 0 498.98 284.49"><path className="cls-1" d="M80.93 271.76A35 35 0 0 1 140.68 247l189.74 189.75L520.16 247a35 35 0 1 1 49.5 49.5L355.17 511a35 35 0 0 1-49.5 0L91.18 296.5a34.89 34.89 0 0 1-10.25-24.74z" transform="translate(-80.93 -236.76)"></path></svg>
                </button>
                <div ref={dropdown} class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
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