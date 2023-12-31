
import Hero from './components/Hero'
import Service from './components/Service'
import Options from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import TestimonialData from "./components/TestimonialData";
import "./App.scss";

function App() {
  return (
    <>
      <Hero/>
      <Service/>
      <Options/>
      <Contact/>
      <Testimonial data = {TestimonialData}/>
      <Footer/>
    </>
  );
}

export default App;
