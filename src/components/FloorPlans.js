 import React from "react";
 import './FloorPlans.css'

 import Caro1 from "../assets/Caro1.png";
 import Caro2 from "../assets/Caro2.png";
 import Caro3 from "../assets/Caro3.png";
 import Caro4 from "../assets/Caro4.png";
 import Caro5 from "../assets/Caro5.png";
 import Caro6 from "../assets/Caro6.png";
 import Caro7 from "../assets/Caro7.png";
 import Caro8 from "../assets/Caro8.png";
 import Caro9 from "../assets/Caro9.png";
 import Caro10 from "../assets/Caro10.png";
 
const FloorPlans = ()=> {

       return (
      <div class="container">

      <h1 class="heading">Our Elevation Designs</h1>
      
      <div class="gallery">
      
        <div class="gallery-item">
          <img class="gallery-image" src={Caro1} alt="Your Dream Design is Loading"/>
        </div>
      
        <div class="gallery-item">
          <img class="gallery-image" src={Caro2} alt="Your Dream Design is Loading"/>
        </div>
      
        <div class="gallery-item">
          <img class="gallery-image" src={Caro3} alt="Your Dream Design is Loading"/>
        </div>
      
        <div class="gallery-item">
          <img class="gallery-image" src={Caro4} alt="Your Dream Design is Loading"/>
        </div>
      
        <div class="gallery-item">
          <img class="gallery-image" src={Caro5} alt="Your Dream Design is Loading"/>
        </div>
      
        <div class="gallery-item">
          <img class="gallery-image" src={Caro6} alt="Your Dream Design is Loading"/>
        </div>

        <div class="gallery-item">
          <img class="gallery-image" src={Caro7} alt="Your Dream Design is Loading"/>
        </div>
      
        <div class="gallery-item">
          <img class="gallery-image" src={Caro8} alt="Your Dream Design is Loading"/>
        </div>
      
      </div>
      
      </div>
      
       );
   }



 export default FloorPlans;