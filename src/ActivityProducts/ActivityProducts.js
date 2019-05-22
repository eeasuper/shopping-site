import React from 'react';
import ShoppingGrid from '../ShoppingGrid/ShoppingGrid';
import productList from '../seed/ActivityProducts';


function ActivityProducts({location}){
  const params = new URLSearchParams(location.search);

  /* activePage is for pagination of ShoppingGrid.*/
  return(
    <section>
      <ShoppingGrid list={productList} activePage = {params.get("page")} title="PRODUCTS FOR ATHLETIC ACTIVITIES"></ShoppingGrid>
    </section>
  )
}

export default ActivityProducts;