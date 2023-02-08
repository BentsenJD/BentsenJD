import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ContactImg from "../assets/contact.jpg";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1572587356426-b33bf42f999b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        name="Contact Me"
      />
      <Footer />
    </>
  );
}

export default Contact;
