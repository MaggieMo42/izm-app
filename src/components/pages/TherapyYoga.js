import React, { useState, useEffect } from "react";
import sanitizeHtml from "sanitize-html";

const TherapyYoga = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPage = async () => {
            try {
              
                const response = await fetch(
                    'https://zenplacepula.zenplacepula.com/wp-json/wp/v2/pages?slug=therapy-yoga&_embed'
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

        return(
            <div className="container py-3 clanak-single">
                <div className="row">
                    <div className="col-md-8 m-auto mb-4 clanak-zaglavlje">
                        <p>{data?._embedded?.["wp:term"]?.[0]?.[0].name}</p>
                        <h1>{data.title.rendered}</h1>
                    </div>
                    <div className="col-md-9 m-auto">
                        <img className="mb-5 clanak-fotka" src={data?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium_large?.source_url}alt={data._embedded["wp:featuredmedia"][0].alt_text || "Default description"} />
                    </div>
                    <div className="col-md-10 m-auto clanak-sadrzaj">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: sanitizeHtml(data.content.rendered, {
                              allowedTags: ["p", "strong", "em", "ul", "ol", "li", "h1", "h2", "h3", "br"],
                              allowedAttributes: {
                                img: ["src", "alt", "width", "height", "style"],
                                "*": ["style"]
                              }
                            })
                          }}
                        />
                    </div>
                </div>
            </div>
        );
};
export default TherapyYoga;
