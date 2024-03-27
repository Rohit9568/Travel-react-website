
 import Navbar from "./Components/navbar";
import Home from "./Routes/home";
import {Routes,Route} from "react-router-dom"; 
import Contact from "./Routes/Contact";
import Service from "./Routes/Service";
import About from "./Routes/About";



function App() {
  return (
   <div className='App'>
 
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/service" element={<Service/>}  />
        <Route path="/contact" element={<Contact/>}  />
      </Routes>

      
     
      </div>

  );
}

export default App;
