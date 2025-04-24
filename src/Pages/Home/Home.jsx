import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import NewArrival from "../../components/NewArrival/NewArrival";
import Hotdeals from "../../components/Hotdeals/Hotdeals";
import Testimonials from "../../components/Testimonials/Testimonials";
import Sponsors from "../../components/Sponsors/Sponsors";
import Footer from "../../components/Footer/Footer";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "./Home.css";

function Home({ setShowAuthModal }) {
  return (
    <div className="home-container">
      <Navbar setShowAuthModal={setShowAuthModal} />
      <main className="home-content">
        <Hero />
        <Category />
        <Link to="/products" className="category-item" />
        <NewArrival />
        <Hotdeals />
        <Testimonials />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

Home.propTypes = {
  setShowAuthModal: PropTypes.func.isRequired,
};

export default Home;
