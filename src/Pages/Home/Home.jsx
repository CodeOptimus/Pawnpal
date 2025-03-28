import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import NewArrival from "../../components/NewArrival/NewArrival";
import Hotdeals from "../../components/Hotdeals/Hotdeals";
import Testimonials from "../../components/Testimonials/Testimonials";
import Sponsors from "../../components/Sponsors/Sponsors";
import Footer from "../../components/Footer/Footer";
import PropTypes from "prop-types";

function Home({ setShowAuthModal }) {
  return (
    <>
      <Navbar setShowAuthModal={setShowAuthModal} />
      <Hero />
      <Category />
      <NewArrival />
      <Hotdeals />
      <Testimonials />
      <Sponsors />
      <Footer />
    </>
  );
}

Home.propTypes = {
  setShowAuthModal: PropTypes.func.isRequired,
};

export default Home;
