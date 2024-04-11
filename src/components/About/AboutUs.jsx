// AboutUs.jsx
import React, { useEffect } from "react";
import ParallaxContainer from "./ParallaxContainer";
import myImg1 from "../assets/aboutpageAssets/aboutImg-one.jpg";
import myImg2 from "../assets/aboutpageAssets/aboutImg-two.jpg";
import myImg3 from "../assets/aboutpageAssets/aboutImg-three.jpg";
import myImg4 from "../assets/aboutpageAssets/aboutImg-four.jpg";

const AboutUs = () => {
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
          backgroundColor="#ffffff">
          <div className="content">
            <h2>First Container</h2>
            <p>Dummy text for the first container.</p>
            <div className="img-slider-container">
              <div className="slider-inner">
                <div className="slider">
                  <img src={myImg1} alt="img1" />
                  <img src={myImg2} alt="img2" />
                  <img src={myImg3} alt="img3" />
                  <img src={myImg4} alt="img4" />
                 
                </div>
                <div className="about-top-content">
                  <h1>ABOUT US</h1>
                  <h3>A creative digital agency working eligocs</h3>
                  <p>
                    We are a team with experience aim to work for customer
                    satisfaction. Our creative brains are always at work to
                    establish or grow your business. Transforming Ideas into
                    Impactful Actions for Global Change.
                  </p>
                  <button id="get-in-tch">get in touch</button>
                </div>
                
              </div>
            </div>
          </div>
        </ParallaxContainer>
        <ParallaxContainer
          speed={1}
          className="container-2"
          backgroundColor="#EAAA00">
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
