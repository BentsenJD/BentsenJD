import "./CardStyles.css";
import CardData from "./CardData.js";
import Project1 from "../assets/Project1.jpg";
import PlaceHolder1 from "../assets/PlaceHolder1.jpg";
import PlaceHolder2 from "../assets/PlaceHolder2.jpg";

function Card() {
  return (
    <div className="trip">
      <h1> Projects </h1>
      <p> My favourite projects :D </p>
      <div className="cardData">
        <CardData
          image={Project1}
          heading="Website Portfolio"
          text="This portfolio website was my first project! 
          I made use of React.js, HTML and CSS in Sandbox to design 
          and create the website. The website features dynamic Navigation Bars, 
          photos, text and links which can be viewed in both web and phone based perspectives."
        />
        <CardData
          image={PlaceHolder1}
          heading="Project 2"
          text="Coming Soon :)"
        />
        <CardData
          image={PlaceHolder2}
          heading="Project 3"
          text="Coming Soon :)"
        />
      </div>
    </div>
  );
}

export default Card;
