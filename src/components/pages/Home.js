
import React, { useState, useEffect } from "react";
import HeroSlider from "../sections/HeroSlider"; 
import Footer from "../sections/Footer";
const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(
          "https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/648"
        );
        if (!response.ok) {
          throw new Error(`Došlo je do greške: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPage();
  }, []);

  if (error) return <p>Greška: {error}</p>;
  if (!data) return <p>Učitavanje...</p>;

  return (
    <div>
          {/* ✅ Add the slider at the top, or wherever you want it */}
      <HeroSlider />
  
    </div>
  );
};

export default Home;
