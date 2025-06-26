import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Tips from "../components/Tips";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-stone-200">
      <Navbar />
      <Hero />
      <Cards />
      <Tips />
      <Footer />
    </div>
  );
};

export default Home;
