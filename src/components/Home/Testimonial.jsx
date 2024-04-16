import React, { useEffect, useState } from 'react';

function Testimonial() {
    const [resp, setResp] = useState([]);


    const loadTestimonials = async () => {
        let result = await fetch('http://localhost/wordpress-headless/server/wp-json/wp/v2/testimonial');
        let data = await result.json();
        setResp(data);
        console.log( data)
    };

    useEffect(() => {
        loadTestimonials();
    }, []);





    return (
        <>
            {resp.map((ele) => {
                return<div
                    className={`testimonial_wrap `}
                    key={ele.id}

                >
                    <div className="testi_image">
                        <img src={ele.acf.testimonials.client_image} alt="this is alt" srcSet="" />
                    </div>
                    <div className="testimonial_asking">
                        <p>{ele.acf.testimonials.client_description}</p>
                    </div>
                    <div className="testimonial_name">
                        <h1>{ele.acf.testimonials.client_name}</h1>
                    </div>
                    <div className="testimonial_address">
                        <p>{ele.acf.testimonials.client_location}</p>
                    </div>
                </div>
            })}

        </>

    );
};




export default Testimonial;
