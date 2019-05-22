import React from 'react';
import Slideshow from './Slideshow/Slideshow';
import ShoppingGrid from '../ShoppingGrid/ShoppingGrid';
import './Homepage.css';
import { Link } from "react-router-dom";

const recommendedList = [
  {
    name: 'Pillow Soft® Silicone Putty Ear Plugs',
    price: 5000,
    picture: 'images/ear-silicone.jpg',
    id:1
  },
  {
    name: 'Flightguard™ Airplane Pressure Relief Ear Plugs',
    price: 14000,
    picture: 'images/ear-flightguard.jpg',
    id: 2
  },
  {
    name: 'Hear Plugs® High Fidelity Earplugs',
    price: 15000,
    picture: 'images/ear-hear.jpg',
    id: 3
  },
  {
    name: 'Earammo® Earplugs for Men',
    price: 5000,
    picture: 'images/ear-ammos.jpg',
    id: 4
  },
]

function Homepage(){

  return(
    <div>
      <Link to="/all"></Link>
      <Slideshow></Slideshow>
      <section className="second-section">
        <img src='images/Macks.jpg'/>
        <div className="logo-description">
          <h2>THE BRAND</h2>
          <div className="logo-subtext">
            <p>MACK'S celebrates more than 50 years of earplug sales</p>
            <p>USA’s #1 Selling and #1 Doctor Recommended Ear Plug Brand</p>
            <p>For more information visit our <a href="https://www.macksearplugs.com/">homepage</a></p>
          </div>
        </div>
      </section>
      <div className="page-width recommended-title">
        <h2>SHOP RECOMMENDED</h2>
      </div>
      <ShoppingGrid list={recommendedList} title=""></ShoppingGrid>
    </div>
  )
}

//Image div
//SHOP RECOMMENDED section
//Footer

export default Homepage;