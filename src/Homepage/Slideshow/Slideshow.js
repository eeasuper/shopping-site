import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Slideshow.css'
const fadeImages = [
  'images/set-plugs.jpg',
  'images/rainbow-plugs.jpg',
  'images/sleep-plugs.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false
}
function Slideshow(){
  return(
    <Fade {...properties} className="slide-container">
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} />
          <a className="image-link"></a>
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} />
          <a className="image-link"></a>
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} />
          <a className="image-link"></a>
        </div>
      </div>
    </Fade>
  )
}

export default Slideshow;