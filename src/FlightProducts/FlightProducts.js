import React from 'react';
import ShoppingGrid from '../ShoppingGrid/ShoppingGrid';
import productList from '../seed/FlightProducts';

/* activePage is for pagination of ShoppingGrid.*/
function FlightProducts({location}){
  const params = new URLSearchParams(location.search);

  return(
    <section>
      <ShoppingGrid list={productList} activePage = {params.get("page")} title="FLIGHT PRODUCTS"></ShoppingGrid>
    </section>
  )
}

export default FlightProducts;