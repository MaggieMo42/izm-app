import React, { useState, useEffect } from "react";
import sanitizeHtml from "sanitize-html";

const KundaliniYoga= () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/pages/211?_embed');
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


        return(
            <div className="container py-5 clanak-single">
                <div className="row">
                    <div className="col-md-8 m-auto mb-4 clanak-zaglavlje">
                        <p>{data?._embedded?.["wp:term"]?.[0]?.[0].name}</p>
                        <h1>{data.title.rendered}</h1>
                    </div>
                    <div className="col-md-9 m-auto">
                        <img className="w-100 mb-5 clanak-fotka" src={data?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium_large?.source_url}alt={data._embedded["wp:featuredmedia"][0].alt_text || "Default description"} />
                    </div>
                    <div className="col-md-8 m-auto">
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
export default KundaliniYoga;
