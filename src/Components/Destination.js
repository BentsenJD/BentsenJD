import pf from "../assets/PF.jpg";
import fv from "../assets/FutureVert.jpg";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>About Me</h1>

      <div className="first-des">
        <div className="des-text">
          <p>
            {" "}
            My name is Bentsen Dias and I am attending the University of
            Technology to attain a bachelor in science, majoring in mathematical
            science (currently pen ultimate). I have a strong passion for cars,
            boxing, self improvement and am in both the UTS Tech; Car Society.
            <br />
            <br />
            I am looking to develop life long skills in a rewarding position as
            I am hardworking, dedicated and willing to learn. I have strong
            communication and work well in team based environments.
            <br />
            <br />
            This website is designed to showcase a little bit about myself and
            my favourite projects! If you believe I am a good fit for your team,
            please dont hesistate to reach out.
          </p>
        </div>
        <div className="image">
          <img alt="img" src={pf} />
          <img alt="img" src={fv} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
