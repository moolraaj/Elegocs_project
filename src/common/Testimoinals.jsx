import React, { useState, useEffect } from "react";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const changeTestimonial = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.eligo.cloud/wp-json/wp/v2/pages?slug=about");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data[0]?.acf?.testimonials || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="testimonials-outer">
      <div className="testimonial-left-section">
        <h1>
          <span className="uderline-text">Testimonials</span>
          <span className="uderline-text">From Our</span>
          <span className="uderline-text">Valued Clients</span>
        </h1>
      </div>
      <div className="testimonial-right-section">
        {loading ? (
          <p>Loading testimonials...</p>
        ) : (
          testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={
                index === activeIndex
                  ? "testimonial-card active"
                  : "testimonial-card"
              }
              style={{ zIndex: testimonials.length - index }}
            >
              <img
                src={testimonials[activeIndex].client_image}
                alt="clientImg"
                className="client-img"
              />
              <div className="card-content">
                <p>{testimonials[activeIndex].client_review}</p>
                <h1>{testimonials[activeIndex].client_name}</h1>
                <h3>{testimonials[activeIndex].client_address}</h3>
              </div>
            </div>
          ))
        )}

        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={
                index === activeIndex ? "dot active-dot" : "dot"
              }
              onClick={() => changeTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
