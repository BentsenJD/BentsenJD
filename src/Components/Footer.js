import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Top">
        <div>
          <h1> Bachelor of Science (Mathematics) </h1>
          <p> Pen Ultimate Student </p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/bentsen-dias-80433822a">
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a href="https://github.com/BentsenJD">
            <i className="fa-brands fa-github-alt"></i>
          </a>
        </div>
      </div>

      <div className="Bottom"> </div>
    </div>
  );
};

export default Footer;
