import ChooseTemplate from "./components/ChooseTemplate";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import MarketPlace from "./components/MarketPlace";
import NavBar from "./components/NavBar";
import Screening from "./components/Screening";
import Testimonial from "./components/Testimonial";



export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <MarketPlace />
      <Testimonial />
      <Screening />
      <Journey />
      <ChooseTemplate />
      <FAQs />
      <Footer />

    </div>
  );
}
