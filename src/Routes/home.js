import Destination from "../Components/Destination";
import Hero from "../Components/Hero";
import Trip from "../Components/Trip";
import Navbar from "../Components/navbar";
import AboutImg from "../assets/Home.jpg";
import Footer from "../Components/Footer";


const Home = () => {
    return (
        <>
        
       <Navbar/>
        <Hero 
        cName = {"hero"}
        heroImg = {AboutImg}
        title = {"Embark on Your Next Adventure: Explore, Discover, Wander!"}
        text = {"Choose Your Favourite Destination"}
        buttonText = {"Travel Plan"}
        url = {"/"}
        btnClass = {"show"} />


       <Destination/>
       <Trip />
       <Footer />

        </>

       
    )
}


export default Home;