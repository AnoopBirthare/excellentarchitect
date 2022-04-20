import React from "react";
import { Carousel } from "react-bootstrap";
import Img1 from "../assets/maxresdefault.png";
const CarouselComp = () => {
  return (
    <div id="carousel">
      <Carousel indicators="true" touch="true" fade="true" variant="dark">
        <Carousel.Item interval={10000000} style={{}}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg"
          />
          <Carousel.Caption>
            <div
              style={{ backgroundColor: "rgba(65, 79, 91,.90)", width: "100%" }}
            >
              <h3>Modern House Architecture1</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000000000}>
          <img
            className="d-block w-100"
            src="https://creativeoverflow.net/wp-content/uploads/2018/11/modern-homes.jpg"
            alt="We Design which will make you feel pride to live!"
          />

          <Carousel.Caption>
            <h3>Modern House Architecture2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={300000000}>
          <img
            className="d-block w-100"
            src="https://blog.architizer.com/wp-content/uploads/138210191573005a_view_from_the_central_court_fb.jpg"
            alt="Happy Home!"
          />

          <Carousel.Caption>
            <h3>Modern House Architecture3</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CarouselComp;
