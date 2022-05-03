 import React from "react";
 import './FloorPlans.scss'

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

    console.clear();

const elApp = document.querySelector("#app");

const elImages = Array.from(document.querySelectorAll(".gallery-image"));

const elDetail = document.querySelector(".detail");

function flipImages(firstEl, lastEl, change) {
  const firstRect = firstEl.getBoundingClientRect();

  const lastRect = lastEl.getBoundingClientRect();

  // INVERT
  const deltaX = firstRect.left - lastRect.left;
  const deltaY = firstRect.top - lastRect.top;
  const deltaW = firstRect.width / lastRect.width;
  const deltaH = firstRect.height / lastRect.height;

  change();
  lastEl.parentElement.dataset.flipping = true;

  const animation = lastEl.animate([
    {
      transform: `translateX(${deltaX}px) translateY(${deltaY}px) scaleX(${deltaW}) scaleY(${deltaH})`
    },
    {
      transform: 'none'
    }
  ], {
    duration: 600, // milliseconds
    easing: 'cubic-bezier(.2, 0, .3, 1)'
  });

  animation.onfinish = () => {
    delete lastEl.parentElement.dataset.flipping;
  }

}

elImages.forEach(figure => {

  figure.addEventListener("click", () => {
    const elImage = figure.querySelector('img');

    elDetail.innerHTML = "";

    const elClone = figure.cloneNode(true);
    elDetail.appendChild(elClone);

    const elCloneImage = elClone.querySelector('img');

    flipImages(elImage, elCloneImage, ()=>{
      elApp.dataset.state="detail";
    });

    function revert(){

      flipImages(elCloneImage, elImage, ()=>{
        elApp.dataset.state="gallery";
        elDetail.removeEventListener('click',revert);
      });

    }

    elDetail.addEventListener('click',revert);

  });
});



       
       return (
        <div id="app" data-state="gallery">
        <div class="gallery">
          <figure class="gallery-image">
            <img src={Caro1} width="800" height="800" />
            <figcaption>1</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro2}  width="800" height="600" />
            <figcaption>2</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro3}  width="800" height="400" />
            <figcaption>3</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro4}  width="800" height="600" />
            <figcaption>4</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro5} width="800" height="900" />
            <figcaption>5</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro6}  width="800" height="600" />
            <figcaption>6</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro7}  width="800" height="700" />
            <figcaption>7</figcaption>
          </figure>
      
          <figure class="gallery-image">
            <img src={Caro8} width="800" height="800" />
            <figcaption>8</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro9} width="800" height="600" />
            <figcaption>9</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro10} />
            <figcaption>10</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro1} width="800" height="800" />
            <figcaption>1</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro2}  width="800" height="600" />
            <figcaption>2</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro3}  width="800" height="400" />
            <figcaption>3</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro4}  width="800" height="600" />
            <figcaption>4</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro5} width="800" height="900" />
            <figcaption>5</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro6}  width="800" height="600" />
            <figcaption>6</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro7}  width="800" height="700" />
            <figcaption>7</figcaption>
          </figure>
      
          <figure class="gallery-image">
            <img src={Caro8} width="800" height="800" />
            <figcaption>8</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro9} width="800" height="600" />
            <figcaption>9</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro10} />
            <figcaption>10</figcaption>
          </figure>
          <figure class="gallery-image">
            <img src={Caro5} width="800" height="400" />
            <figcaption>21</figcaption>
          </figure>
        </div>
        <div class="detail">
        </div>
      </div>
       );
   }



 export default FloorPlans;