import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../sections/Footer";
const Services = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await fetch('https://wp1.edukacija.online/backend/wp-json/wp/v2/pages?parent=155?_embed');
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
    }, []);

    if (error) return <p>Greška: {error}</p>;
    if (!data) return <p>Učitavanje...</p>;

    return (
    <div>
        <h1>{data.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
        <div></div>
        <Footer />
    </div>
    );
};

export default Services;
