import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="450em"
      src="https://i.ibb.co/SBrXJCp/piron-guillaume-U4-Fy-Cp3-Kz-Y-unsplash.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Fast Service</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="450em"
      className="d-block w-100"
      src="https://i.ibb.co/5xGmcgS/national-cancer-institute-s6w5-NOxtm7-U-unsplash.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="450em"
      className="d-block w-100"
      src="https://i.ibb.co/Tm9sPby/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;