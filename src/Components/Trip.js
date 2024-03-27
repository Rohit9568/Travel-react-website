import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import TripData from "./TripData";
const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
       
       <div className="tripcard">
       <TripData image={Trip1} heading="Trip in Indonesia"  text="Indonesia, located in Southeast Asia, is the world's largest archipelago comprising more than 17,000 islands, with Java being the most populous. Its diverse landscape includes lush rainforests, volcanic mountains, and stunning beaches. With a rich cultural heritage influenced by Hindu, Buddhist, and Islamic traditions, Indonesia boasts vibrant arts, music, and cuisine. Jakarta, the capital city, is a bustling metropolis known for its modern skyscrapers, while destinations like Bali draw millions of tourists each year for their pristine beaches and vibrant nightlife." />

       <TripData image={Trip2} heading="Trip in Malaysia"  text="Embarking on a trip to Malaysia unveils a vibrant tapestry of culture, cuisine, and natural beauty. From the bustling streets of Kuala Lumpur adorned with modern skyscrapers to the serene beaches of Langkawi, Malaysia offers a diverse range of experiences. Explore the historic charms of Penang, known for its colorful street art and mouthwatering street food. Delve into the lush rainforests of Borneo, home to diverse wildlife including orangutans and proboscis monkeys. Whether indulging in a culinary adventure, immersing in cultural festivals, or unwinding in tropical paradises, a trip to Malaysia promises unforgettable memories at every turn." />

       <TripData image={Trip3} heading="Trip in France"  text="From the iconic Eiffel Tower standing majestically in Paris to the sun-kissed vineyards of Bordeaux, France offers a tapestry of experiences. Explore the charming cobblestone streets of medieval villages, indulge in exquisite French cuisine at quaint bistros, and immerse yourself in the artistry of renowned museums like the Louvre. Whether wandering through the romantic gardens of Versailles or savoring a freshly baked croissant in a bustling café, every moment in France is a timeless adventure waiting to unfold." />



       </div>

    </div>
  );
};

export default Trip;
