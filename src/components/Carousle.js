import React from "react";
import { Carousel } from "react-bootstrap";
const CarouselComp =()=>{
    return(

            <Carousel fade="true" variant="dark">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://s01.sgp1.digitaloceanspaces.com/large/845662-64785-kfmqybotsz-1501783953.jpg"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://www.ashwinarchitects.com/3/wp-content/uploads/2020/09/indian-house-design-styles-architects-in-bangalore.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://blog.architizer.com/wp-content/uploads/138210191573005a_view_from_the_central_court_fb.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default CarouselComp;