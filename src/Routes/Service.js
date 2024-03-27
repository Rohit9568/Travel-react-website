import Hero from "../Components/Hero";
import Navbar from "../Components/navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

const Service = () => {
    return (
        <>
          <Navbar/>
         
         <Hero 
        cName = {"hero-mid"}
        heroImg = {AboutImg}
        title = {"Service"}
      
        
        btnClass = {"hide"} />
          <Trip />
         <Footer />
        </>
    )
}


export default Service;