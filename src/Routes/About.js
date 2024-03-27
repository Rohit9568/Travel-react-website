import Hero from "../Components/Hero";
import Navbar from "../Components/navbar";
import AboutImg from "../assets/night.jpg";
import Footer  from "../Components/Footer";
import AboutUs from "../Components/AboutUs";


const About = () => {
    return (
        <>
          <Navbar/>
         
         <Hero 
        cName = {"hero-mid"}
        heroImg = {AboutImg}
        title = {"About"}
      
        
        btnClass = {"hide"} />
        <AboutUs />
         <Footer />
        </>
    )
}


export default About;