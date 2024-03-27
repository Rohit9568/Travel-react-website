import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";

const Destination  = () => {
   return (
           <div className="destination">
            <h1>Popular Destinations</h1>
            <p> Tours give you the oppurtunity to see a lot , within a time frame.</p>
           
           <DestinationData 
           className = "first-des"
           heading = "Taal Volcano , Batangas"
           text = "Taal Volcano is a complex volcano located on the island of Luzon in the Philippines, specifically in the province of Batangas. It is known for its picturesque crater lake, which contains another small volcanic island called Volcano Island. The volcano is one of the most active in the Philippines and has recorded numerous eruptions throughout history. Despite its active nature, Taal Volcano and its surroundings attract a significant number of tourists each year. Overall, Taal Volcano is not only a geological marvel but also a reminder of the powerful forces at work beneath the Earth's surface. While it presents opportunities for tourism and recreation, it also demands respect and caution due to its potential for eruption and the associated hazards."
           
           img1 = {Mountain1}
           img2 = {Mountain2}
           
            />

           <DestinationData 
           className = "first-des-reverse"
           heading = "Mt. Daguldul,Batangas"
           text = "If you're looking for a hike that's a little more challenging but still good for begineer mountaineer,check out Mt.Daguldul in San Juan , Batangas .You'll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small store halfway up the trail where you can take a break and drink buko juice , and though the summit itself may not have the best view, the breeze is fantastic . Once you've made it back down , head straight to the beach for a refreshing , well-deserved swim. "
           
           img1 = {Mountain3}
           img2 = {Mountain4}
           
            />
            
           </div>
    )
}

export default Destination;