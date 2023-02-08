import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Trip from "../Components/Card";

function Projects() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1570692111688-be3d16f59c1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGphcGFuJTIwbGFudGVybnxlbnwwfHwwfHw%3D&w=1000&q=80"
        name="My Projects"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Projects;
