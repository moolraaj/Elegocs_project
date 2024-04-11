// AboutUs.jsx
import React, { useEffect, useState } from "react";
import ParallaxContainer from "./ParallaxContainer";
import myImg1 from "../assets/aboutpageAssets/aboutImg-one.jpg";
import myImg2 from "../assets/aboutpageAssets/aboutImg-two.jpg";
import myImg3 from "../assets/aboutpageAssets/aboutImg-three.jpg";
import myImg4 from "../assets/aboutpageAssets/aboutImg-four.jpg";
import WorkingProcess from "../pages/About/WorkingProcess";



const workingProcess = [
  {
    step: "Step 1",
    title: "Discover",
    description: "Unleashing Innovation in Every Byte Crafting  IT Solutions with Vision Precision and Technological Mastery.",
    stepImage:{
      mainImg: myImg1,
    }
  },
  {
    step: "Step 2",
    title: "Design & Development",
    description: "Elevate Design & Development: Crafting Digital Experiences Vision: Inspire Innovation Mission: Transform Ideas into Seamless, Impactful Solutions.",
    stepImage:{
      imageUpper: myImg2,
      mainImg: myImg1,
      imagelower: myImg3
    }
  },
  {
    step: "Step 3",
    title: "Install & Testing",
    description: "Ensuring Perfection | Vision: Seamless Integration Mission: Guaranteeing Quality, Reliability, and Performance Excellence.",
    stepImage:{
      imageUpper: myImg4,
      mainImg: myImg3,
      imagelower: myImg2
    }
  },
  {
    step: "Step 4",
    title: "Project Delivery",
    description: "Timely Execution | Vision: Exceed Expectations Mission: Delivering Quality Solutions On Time, Every Time, Everywhere.",
    stepImage:{
      imageUpper: myImg2,
      mainImg: myImg4,
      imagelower: myImg1
    }
  },
]



const AboutUs = () => {
   const [process, setProcess] = useState([])


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
            <div className="about-working-process">
              <h1>working process</h1>
              <WorkingProcess workingProcess={workingProcess} />
            </div>
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
