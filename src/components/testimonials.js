/**
 * Name: Amy Finlay
 * ID: G00360784
 * Contains testimonials
 */


import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './testimonials.css';

export default class Testimonials extends Component {
  render() {
    return (
      <div>
          {/**Contains carousel */}
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div style={{ backgroundColor: '#343A40' }}>
            <div className="myCarousel">
              <h3>John Smith</h3>
              <h4>Electric Picnic</h4>
              <p>
                Couldn't have made it easier for me to set up an organize this festival.
                I would highly reccommend and hope to work with them again.
            </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#343A40' }}>
            <div className="myCarousel">
              <h3>Alana O'Reily</h3>
              <h4>Wedding</h4>
              <p>
                Thanks to Event Planner Galway for helping me plan my perfect day.
                Would highly reccommend to my friends and family.
            </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#343A40' }}>
            <div className="myCarousel">
              <h3>Bord Bia</h3>
              <h4>Food Festival</h4>
              <p>
                Easy to work with and great company! Will definitely be working with them again.
            </p>
            </div>
          </div>
        </Carousel>
        <div>
         
        </div>
      </div>
    );
  }
}