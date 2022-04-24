import React from "react";
import { Carousel } from "react-bootstrap";
import m1 from "../assets/m1.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";
import m7 from "../assets/m7.jpg";

const CarouselComp = () => {
  return (
    <div id="carousel">
      <Carousel indicators="true" touch="true" fade="true" variant="dark">
        <Carousel.Item interval={10000000} style={{}}>
          <img
            className="d-block w-100"
            src={m1}
          />
          <Carousel.Caption>
            
              <h3>Modern House Architecture!</h3>
              <p> Luxurious Interior Design with Strong Architecture is what makes us pride to serve.  </p>
      
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000000000}>
          <img
            className="d-block w-100"
            src={m3}
            alt="We Design which will make you feel pride to live!"
          />

          <Carousel.Caption>
            <h3>Modern House Architecture 2</h3>
            <p>We Design which will make you feel pride to live!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={300000000}>
          <img
            className="d-block w-100"
            src={m4}
            alt="Happy Home!"
          />

          <Carousel.Caption>
            <h3>Modern House Architecture 3</h3>
            <p>
            We Design which will make you feel pride to live!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CarouselComp;
