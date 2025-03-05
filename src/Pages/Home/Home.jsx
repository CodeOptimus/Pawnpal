import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import NewArrival from "../../components/NewArrival/NewArrival";
import Hotdeals from "../../components/Hotdeals/Hotdeals";
import Testimonials from "../../components/Testimonials/Testimonials";
import Sponsors from "../../components/Sponsors/Sponsors";

function Home() {
    return(
        <>
            <Navbar />
            <Hero />
            <Category />
            <NewArrival />
            <Hotdeals />
            <Testimonials />
            <Sponsors />
        </>
    )
}

export default Home;