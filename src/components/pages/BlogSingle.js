import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Novosti = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchPage = async () => {
            try {
  
                const response = await fetch(
                    `https://wp1.edukacija.online/backend/wp-json/wp/v2/posts?slug=${id}&author_name=Margarita_Moric&_embed`
                );
                
                if (!response.ok) {
                    throw new Error(`Došlo je do greške: ${response.status}`);
                }
                
                const json = await response.json();
                setData(json[0]);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPage();
    }, [id]); 

    if (error) return <p>Greška: {error}</p>;
    if (!data) return <p>Učitavanje...</p>;

    return (
        <div className="container py-5 clanak-single">
            <div className="row">
                <div className="col-md-8 m-auto mb-4 clanak-zaglavlje">
                    <h1>{data.title.rendered}</h1>
                </div>
                <div className="col-md-9 m-auto">
                    <img 
                        className="w-100 mb-5 clanak-fotka" 
                        src={data?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium_large?.source_url} 
                    />
                </div>
                <div className="col-md-8 m-auto clanak-sadrzaj">
                    <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
                </div>
            </div>
        </div>
    );
};

export default Novosti;