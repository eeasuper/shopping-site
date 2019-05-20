import React from 'react';
import './ShoppingGrid.css';
import Pagination from "./Pagination/Pagination";

function handlePageChange(e){
  console.log(e);
}

function paginate (array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

/* ShoppingGrid requires three props: list( list of products), title (title of the page) and activePage (for pagination)*/
function ShoppingGrid({activePage,title,list}){
  console.log(list);
  const actPage = activePage ? activePage:1;
  const itemsCountPerPage = 8;
  /* paginate() is used to display 'itemsCountPerPage' number of items per page*/
  const grid = paginate(list,itemsCountPerPage,actPage).map((val,ind)=>{
    return (
      <li className="shop-li" key={ind}>
        <a className="shop-li-a" >
          <img src={val.picture}/>
          <p>{val.name}</p>
          <p>₩{val.price}</p>
        </a>
      </li>
    )
  })
  console.log(grid);
  return(
    <div className="shopping-grid">
      <div className="page-width">
        <div>
          <h1>{title}</h1>
        </div>
        <ul className="shop-ul ">
          {grid}
        </ul>
      </div>
      { list.length > itemsCountPerPage && 
        <Pagination
          activePage={actPage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={list.length}
        />
      }
    </div>
  )
}

export default ShoppingGrid;