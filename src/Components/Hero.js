import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="herImg" src={props.heroImg} />

        <div className="hero-text">
          <h1>{props.name}</h1>
          <p>{props.intro} </p>
          <a href={props.url} className={props.btnClass}>
            {props.btntext}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
