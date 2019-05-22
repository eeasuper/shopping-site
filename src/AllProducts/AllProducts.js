import React from 'react';
import './AllProducts.css';
import ShoppingGrid from '../ShoppingGrid/ShoppingGrid';
import productList from '../seed/AllProducts';

/* activePage is for pagination of ShoppingGrid.*/
function AllProducts({location}){
  const params = new URLSearchParams(location.search);

  return(
    <section>
      <ShoppingGrid list={productList} activePage = {params.get("page")} title="ALL PRODUCTS"></ShoppingGrid>
    </section>
  )
}

export default AllProducts;