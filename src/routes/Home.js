import Trip from "../Components/Card";
import Destination from "../Components/Destination";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import PlaceHolder1 from "../assets/PlaceHolder1.jpg";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={PlaceHolder1}
        name="Bentsen Dias"
        intro="To aspire and grow!"
        btntext="Resume"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
