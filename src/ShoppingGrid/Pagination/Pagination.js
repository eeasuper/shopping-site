import React from 'react';
import './Pagination.css';
import {
  withRouter
} from "react-router-dom";
const Pagination = withRouter(({activePage,itemsCountPerPage,totalItemsCount,...routerProps})=>{

  /* use routerProps that is gotten from the withRouter container to move to a different page.*/
  function handleLeftArrowClick(){
    routerProps.history.push(`${routerProps.location.pathname}?page=${parseInt(activePage) - 1}`)
  }

  function handleRightArrowClick(){
    routerProps.history.push(`${routerProps.location.pathname}?page=${parseInt(activePage) + 1}`)
  }

  const totalPages = Math.ceil(totalItemsCount/8);
  return(
    <ul className="pagination">
      <li className="arrow-li">
        <a className={activePage <= 1 ? 'disabled btn': 'btn'} onClick={handleLeftArrowClick}>
          <img alt="Previous" src="images/left-arrow.svg"/>
        </a>
      </li>
      <li>
        Page {activePage} of {totalPages}
      </li>
      <li className="arrow-li">
        <a className={activePage >= totalPages ? 'disabled btn': 'btn'} onClick={handleRightArrowClick}>
          <img alt="Next" src="images/right-arrow.svg"/>
        </a>
      </li>
    </ul>
  )
});

export default Pagination;