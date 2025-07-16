import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const authorId = 2; 

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    `https://wp1.edukacija.online/backend/wp-json/wp/v2/posts?author=${authorId}&_embed`
                );
                
                if (!response.ok) {
                    throw new Error(`Greška prilikom dohvatanja članaka: ${response.status}`);
                }
                
                const postsData = await response.json();
                setPosts(postsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [authorId]);

    if (error) return <p>Greška: {error}</p>;
    if (loading) return <p>Učitavanje...</p>;

    return (
        <div className="container py-5">
            <h1>Nadolazeća događanja</h1>
<p>Rezervirajte svoje mjesto za neko od nadolazećih događanja. Očekuju vas radionice, tematski tretmani i prilike za osobnim rastom, učenjem i druženjem. Pridruži nam se!</p>
            <div className="row">
                {posts.map(post => (
                    <div key={post.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            {post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium_large?.source_url ? (
                                <img 
                                    src={post._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url} 
                                    className="card-img-top" 
                                    alt={post.title.rendered}
                                />
                            ) : (
                                <img 
                                    src="https://via.placeholder.com/400x200?text=Nema+slike" 
                                    className="card-img-top" 
                                    alt="Nema slike"
                                />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{post.title.rendered}</h5>
                                <div 
                                    className="card-text mb-3" 
                                    dangerouslySetInnerHTML={{ 
                                        __html: post.excerpt.rendered 
                                    }} 
                                />
                                <Link 
                                    to={`/blog/${post.slug}`} 
                                    className="btn btn-primary"
                                >
                                    Pročitaj više
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;