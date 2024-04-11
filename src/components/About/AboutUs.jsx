// AboutUs.jsx
import React,{useState, useEffect } from "react";
import ParallaxContainer from "./ParallaxContainer";

// Function to dynamically import all images from a folder
async function importAllImages() {
  const images = [];
  const imageContext = import.meta.glob(
    "../assets/aboutpageAssets/*.{jpg,jpeg,png}"
  );
  for (const path in imageContext) {
    const module = await imageContext[path]();
    images.push({
      src: module.default,
      alt: path.split("/").pop().split(".")[0], // Extracting image file name as alt text
    });
  }
  return images;
}

const AboutUs = () => {
  const [images, setImages] = useState([]);
 useEffect(() => {
    importAllImages().then((result) => setImages(result));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll position here if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="aboutpage-outer">
      <div className="pages-inner about-inner">
        <ParallaxContainer
          speed={0.5}
          className="container-1"
          backgroundColor="#808080">
          <div className="content">
            <h2>First Container</h2>
            <p>Dummy text for the first container.</p>
            <div className="img-slider-container">
              <div className="slider-img-inner">
                <div className="slider">
                  {images.map((image, index) => (
                    <div key={index} className="images-outer">
                    <img  src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ParallaxContainer>
        <ParallaxContainer
          speed={1}
          className="container-2"
          backgroundColor="#FFFF00">
          <div className="content">
            <h2>Second Container</h2>
            <p>Dummy text for the second container.</p>
          </div>
        </ParallaxContainer>
        <ParallaxContainer
          speed={1.5}
          className="container-3"
          backgroundColor="#808080">
          <div className="content">
            <h2>Third Container</h2>
            <p>Dummy text for the third container.</p>
          </div>
        </ParallaxContainer>
        <ParallaxContainer
          speed={2}
          className="container-4"
          backgroundColor="#000000">
          <div className="content">
            <h2>Fourth Container</h2>
            <p>Dummy text for the fourth container.</p>
          </div>
        </ParallaxContainer>
        <ParallaxContainer
          speed={2.5}
          className="container-5"
          backgroundColor="#808080">
          <div className="content">
            <h2>Fifth Container</h2>
            <p>Dummy text for the fifth container.</p>
          </div>
        </ParallaxContainer>
      </div>
    </div>
  );
};

export default AboutUs;
