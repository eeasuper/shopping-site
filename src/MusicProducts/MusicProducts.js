import React from 'react';
import ShoppingGrid from '../ShoppingGrid/ShoppingGrid';
import productList from '../seed/MusicProducts';

/* activePage is for pagination of ShoppingGrid.*/
function MusicProducts({location}){
  const params = new URLSearchParams(location.search);

  return(
    <section>
      <ShoppingGrid list={productList} activePage = {params.get("page")} title="MUSICAL PRODUCTS"></ShoppingGrid>
    </section>
  )
}

export default MusicProducts;