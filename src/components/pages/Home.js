
import React, { useState, useEffect } from "react";
import HeroSlider from "../sections/HeroSlider"; 
import sanitizeHtml from "sanitize-html";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(
          "https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/1389?_embed"
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
    <><div>
      <HeroSlider />
    </div><div className="col-md-8 m-auto">
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(data.content.rendered, {
              allowedTags: ["p", "strong", "em", "ul", "ol", "li", "img", "h1", "h2", "h3", "br"],
              allowedAttributes: {
                          img: ["src", "alt", "width", "height", "style"],
                            "*": ["style"]
              }
            })
          }} />
      </div></>
  );
};

export default Home;
