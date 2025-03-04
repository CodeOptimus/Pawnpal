import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import NewArrival from "../../components/NewArrival/NewArrival";
import Hotdeals from "../../components/Hotdeals/Hotdeals";

function Home() {
    return(
        <>
            <Navbar />
            <Hero />
            <Category />
            <NewArrival />
            <Hotdeals />
        </>
    )
}

export default Home;