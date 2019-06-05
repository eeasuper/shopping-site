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

  function showSearchInput(e){
    e.persist();
    e.target.focus();
    e.target.style.cursor = "auto"
    e.target.parentElement.style.maxWidth = "250px"
    // e.target.style.padding= "10px 18px 10px 35px"
  }

  function closeSearchInput(e){
    e.persist();
    e.target.style.cursor = "pointer"
    e.target.parentElement.style.maxWidth = "30px"
    // e.target.style.padding = "0px 0px 0px 30px"
  }

  return(
    <header className="site-header">
      <div className="grid grid-table">
        <div className="grid-item">
          <h1 className="header-logo">
            <Link to="/" title="Gui">
              <img src="images/logo.png" />
            </Link>
          </h1>
        </div>
        <nav className="grid-item">
          <ul className="nav-ul">
            <li className="btn-mess">
              <Link to="/" className="nav-menu-label nav-anchor"><span>Home</span></Link>
            </li>
            <li>
              <Dropdown className="dropdown btn-mess" ref={dropdown}>
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
          <div className="nav-search" >
            <input type="text" placeholder="Search" onClick={showSearchInput} onBlur={closeSearchInput}/>
            <button >
              <svg aria-hidden="true" focusable="false" role="presentation" className="navbar-icon" viewBox="0 0 37 40"><path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z"></path></svg>
            </button>
          </div>
          <Link to={props.currentUser.isAuthenticated?"/account":"/login"} className="account-icon">
            <svg aria-hidden="true" focusable="false" role="presentation" className="navbar-icon" viewBox="0 0 28.33 37.68"><path d="M14.17 14.9a7.45 7.45 0 1 0-7.5-7.45 7.46 7.46 0 0 0 7.5 7.45zm0-10.91a3.45 3.45 0 1 1-3.5 3.46A3.46 3.46 0 0 1 14.17 4zM14.17 16.47A14.18 14.18 0 0 0 0 30.68c0 1.41.66 4 5.11 5.66a27.17 27.17 0 0 0 9.06 1.34c6.54 0 14.17-1.84 14.17-7a14.18 14.18 0 0 0-14.17-14.21zm0 17.21c-6.3 0-10.17-1.77-10.17-3a10.17 10.17 0 1 1 20.33 0c.01 1.23-3.86 3-10.16 3z"></path></svg>
          </Link>
          <Link to="/cart" className="cart-icon">
            <svg aria-hidden="true" focusable="false" role="presentation" className="navbar-icon" viewBox="0 0 37 40"><path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path></svg>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar;