import React from "react";
import "./ElevationDesigns.css";
import Caro1 from "../assets/1.png";
import Caro2 from "../assets/2.png";
import Caro3 from "../assets/3.png";
import Caro4 from "../assets/4.png";
import Caro5 from "../assets/5.png";
import Caro6 from "../assets/6.png";
import Caro7 from "../assets/7.png";
import Caro8 from "../assets/8.png";
import Caro9 from "../assets/9.png";
import Caro10 from "../assets/10.png";
const Card = (props) => {
  console.log("propsss",props)
  return (
  <div className="card">
    <img src={props.imgUrl} className="img" alt={props.alt || "Image"} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);
}

const CardContainer = (props) => (
  
  <div className="cards-container">
    {props.cards.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        content={card.content}
        imgUrl={card.imgUrl}
      />
    ))}
  </div>
);

const ElevationDesigns = (props) => {
  const cardsData = [
    {
      id: 1,
      imgUrl:`${Caro1}`,
    },
    {
      id: 2,
      imgUrl:`${Caro2}`,
    },
    {
      id: 3,
      imgUrl: `${Caro3}`,
    },
    {
      id: 4,
      imgUrl: `${Caro4}`,
    },
    {
      id: 5,
      imgUrl:`${Caro5}`,
    },
    {
      id: 6,
      imgUrl:`${Caro6}`,
    },
    {
      id: 7,
      imgUrl:`${Caro7}`,
    },
    {
      id: 8,
      imgUrl: `${Caro8}`,
    },
    {
      id: 9,
      imgUrl: `${Caro9}`,
    },
    {
      id: 10,
      imgUrl:`${Caro10}`,
    },
  ];
  return (
    <div id="designs" className="container">
      <CardContainer cards={cardsData} />
    </div>
  );
};

export default ElevationDesigns;
