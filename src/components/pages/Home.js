
import React, { useState, useEffect } from "react";
import HeroSlider from "../sections/HeroSlider"; 
import sanitizeHtml from "sanitize-html";
import BlogList from "./BlogList";

const Home = () => {
  const [data, setData] = useState(null);
     const [error, setError] = useState(null);
     const [loading, setLoading] = useState(true);
 
     useEffect(() => {
         const fetchPage = async () => {
             try {
               
                 const response = await fetch(
                     'https://zenplacepula.zenplacepula.com/wp-json/wp/v2/pages?slug=pocetna&_embed'
                 );
                 
                 if (!response.ok) {
                     throw new Error(`Došlo je do greške: ${response.status}`);
                 }
                 
                 const json = await response.json();
                 
                 
                 if (json && json.length > 0) {
                     setData(json[0]);
                 } else {
                     throw new Error("Stranica nije pronađena");
                 }
             } catch (err) {
                 setError(err.message);
             } finally {
                 setLoading(false);
             }
         };
         
         fetchPage();
     }, []);
 
    
     if (loading) return <p>Učitavanje...</p>;
     
    
     if (error) return <p>Greška: {error}</p>;
     
     
     if (!data) return <p>Nema podataka</p>;
 

  return (
  <>
    <div>
      <HeroSlider />
    </div>
    <div className="col-md-8 m-auto">
      <div
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(data.content.rendered, {
            allowedTags: ["p", "strong", "em", "ul", "ol", "li", "img", "h1", "h2", "h3", "br"],
            allowedAttributes: {
              img: ["src", "alt", "width", "height", "style"],
              "*": ["style"]
            }
          })
        }}
      />
    </div>
    <div className="py-3">
        <BlogList />
      </div>
  </>
  );
};

export default Home;
