// AboutUs.jsx
import React, { useEffect, useState } from "react";
import ParallaxContainer from "./ParallaxContainer";
// import all images............
import myImg1 from "../assets/aboutpageAssets/aboutImg-one.jpg";
import myImg2 from "../assets/aboutpageAssets/aboutImg-two.jpg";
import myImg3 from "../assets/aboutpageAssets/aboutImg-three.jpg";
import myImg4 from "../assets/aboutpageAssets/aboutImg-four.jpg";
import ourMissionImg from "../assets/aboutpageAssets/our-mission.png";

import WorkingProcess from "../pages/About/WorkingProcess";
import JournyImageSlider from "./JournyImageSlider";
import Testimonials from "./Testimonials";

const workingProcess = [
  {
    step: "Step 1",
    title: "Discover",
    description:
      "Unleashing Innovation in Every Byte Crafting  IT Solutions with Vision Precision and Technological Mastery.",
    stepImage: {
      mainImg: myImg1,
    },
  },
  {
    step: "Step 2",
    title: "Design & Development",
    description:
      "Elevate Design & Development: Crafting Digital Experiences Vision: Inspire Innovation Mission: Transform Ideas into Seamless, Impactful Solutions.",
    stepImage: {
      imageUpper: myImg2,
      mainImg: myImg1,
      imagelower: myImg3,
    },
  },
  {
    step: "Step 3",
    title: "Install & Testing",
    description:
      "Ensuring Perfection | Vision: Seamless Integration Mission: Guaranteeing Quality, Reliability, and Performance Excellence.",
    stepImage: {
      imageUpper: myImg4,
      mainImg: myImg3,
      imagelower: myImg2,
    },
  },
  {
    step: "Step 4",
    title: "Project Delivery",
    description:
      "Timely Execution | Vision: Exceed Expectations Mission: Delivering Quality Solutions On Time, Every Time, Everywhere.",
    stepImage: {
      imageUpper: myImg2,
      mainImg: myImg4,
      imagelower: myImg1,
    },
  },
];

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
          <div className="contents">
            <div className="img-slider-container">

              <div className="slider-inner">
                <marquee behavior="scroll" direction="left" scrollamount="11">
                <div className="slider">
                  <div style={{display: 'flex'}}>
                  <img src={myImg1} alt="img1" />
                  <div className="images-outer">
                  <div></div>
                  <div><img src={myImg2} alt="img2" /></div>
                  <div><img src={myImg3} alt="img3" /></div>
                  <div></div>
                  </div>
                  <img src={myImg4} alt="img4" />
                </div>
                </div>
                </marquee>
                
                <div className="about-top-content">
                  <h1 className="uderline-text">ABOUT US</h1>
                  <h3>A Creative Digital Agency Working Eligocs</h3>
                  <p>
                    We are a team with experience aim to work for customer
                    satisfaction. Our creative brains are always at work to
                    establish or grow your business. Transforming Ideas into
                    Impactful Actions for Global Change.
                  </p>
                  <button id="get-in-tch">Get In Touch</button>
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
            <div className="about-working-process">
              <h3><strong>Working Process</strong></h3>
              <WorkingProcess workingProcess={workingProcess} />
            </div>
          </div>
        </ParallaxContainer>
        <ParallaxContainer
          speed={1.5}
          className="container-3"
          backgroundColor="#ffffff">
          <div className="content">
            <div className="our-mission-outer">
              <div className="mission-left">
                <h1 className="uderline-text">Our Mission</h1>
                <p>
                  As a company offering <span className="uderline-para">professional web development</span> and{" "}
                  <span className="uderline-para">web hostingservices,</span> <span className="uderline-para">Eligo Creative Services</span> mission is
                  to design unique, creative and innovative products, as well as{" "}
                  <span className="uderline-para">technological solutions</span>, for our clients. Our
                  dedication to quality and <span className="uderline-para">customer satisfaction</span> ensures
                  that we strive to meet tha needs and expectations of our
                  clients to nurture strong, long-term relationships while
                  adding more value to our business
                </p>
              </div>
              <div className="mission-right">
                <img src={ourMissionImg} alt="ourMissionImg" />
              </div>
            </div>
          </div>
        </ParallaxContainer>
        <ParallaxContainer
          speed={2}
          className="container-4"
          backgroundColor="#191C1B">
          <div className="content">
            <div className="success-journy-outer">
              <div className="success-journy-left">
                <h2>
                  Join Us on the Journey to Success with Our Tailored Solutions
                  and Expert Guidance.
                </h2>
                <button id="sucess-journy-btn">Unlock Success Now</button>
              </div>
              <div className="success-journy-right">
                <JournyImageSlider/>
              </div>
            </div>
          </div>
        </ParallaxContainer>
        <ParallaxContainer
          speed={2.5}
          className="container-5"
          backgroundColor="#ffffff">
          <div className="content">
           <Testimonials/>
          </div>
        </ParallaxContainer>
      </div>
    </div>
  );
};

export default AboutUs;
