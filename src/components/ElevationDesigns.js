import React from "react";
import "./ElevationDesigns.css";
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
      title: "Elevation 1",
      content: "Client : Sarthak Joshi (9039741075)",
      imgUrl:`${Caro1}`,
    },
    {
      id: 2,
      title: "Elevation 2",
      content: "Client : Anoop Birthare (8319111896)",
      imgUrl:`${Caro2}`,
    },
    {
      id: 3,
      title: "Elevation 3",
      content: "Peter Parker",
      imgUrl: `${Caro3}`,
    },
    {
      id: 4,
      title: "Elevation 4",
      content: "Tony Stark",
      imgUrl: `${Caro4}`,
    },
    {
      id: 5,
      title: "Elevation 5",
      content: "Reed Richards",
      imgUrl:`${Caro5}`,
    },
    {
      id: 6,
      title: "Elevation 6",
      content: "Wade Wilson",
      imgUrl:`${Caro6}`,
    },
    {
      id: 7,
      title: "Elevation 7",
      content: "Peter Quill",
      imgUrl:`${Caro7}`,
    },
    {
      id: 8,
      title: "Elevation 8",
      content: "Steven Rogers",
      imgUrl: `${Caro8}`,
    },
    {
      id: 9,
      title: "Elevation 9",
      content: "Bruce Banner",
      imgUrl: `${Caro9}`,
    },
    {
      id: 10,
      title: "Elevation 10",
      content: "Vincent Strange",
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
