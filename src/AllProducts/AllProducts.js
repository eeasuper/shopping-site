import React from 'react';
import './AllProducts.css';
import ShoppingGrid from '../ShoppingGrid/ShoppingGrid';

const recommendedList = [
  {
    name: 'Pillow Soft® Silicone Putty Ear Plugs',
    price: 5000,
    picture: 'images/ear-silicone.jpg'
  },
  {
    name: 'Flightguard™ Airplane Pressure Relief Ear Plugs',
    price: 14000,
    picture: 'images/ear-flightguard.jpg'
  },
  {
    name: 'Hear Plugs® High Fidelity Earplugs',
    price: 15000,
    picture: 'images/ear-hear.jpg'
  },
  {
    name: 'Earammo® Earplugs for Men',
    price: 5000,
    picture: 'images/ear-ammos.jpg'
  },
  {
    name: 'Dreamweaver™ Contoured Sleep Mask',
    price: 15000,
    picture: 'images/ear-dreamweaver-mask.jpg'
  },
  {
    name: 'Macks® Ear Dryer',
    price: 20000,
    picture: 'images/ear-dryer.jpg'
  },
  {
    name: 'Maximum Protection Soft Foam Earplugs',
    price: 5000,
    picture: 'images/ear-mack-daddy.jpg'
  },
  {
    name: 'Ear Seals® Dual Purpose Earplugs',
    price: 5000,
    picture: 'images/ear-seal.jpg'
  },
  {
    name: 'Hi Viz Shooters Earplugs Banded Foam',
    price: 6000,
    picture: 'images/ear-shooter-banded.jpg'
  }
]

/* activePage is for pagination of ShoppingGrid.*/
function AllProducts({location}){
  const params = new URLSearchParams(location.search);


  return(
    <section>
      <ShoppingGrid list={recommendedList} activePage = {params.get("page")} title="ALL PRODUCTS"></ShoppingGrid>
    </section>
  )
}

export default AllProducts;