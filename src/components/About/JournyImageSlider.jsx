import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Import images
import journyImg1 from "../../assets/aboutpageAssets/success-journy-one.jpg";
import journyImg2 from "../../assets/aboutpageAssets/success-journy-two.jpg";
import journyImg3 from "../../assets/aboutpageAssets/success-journy-three.jpg";
import journyImg4 from "../../assets/aboutpageAssets/success-journy-four.jpg";

const JournyImages = [journyImg1, journyImg2, journyImg3, journyImg4];

const JournyImageSlider = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % JournyImages.length;

      // Use GSAP for smooth transition
      gsap.to(imageRef.current, {
        duration: 1, // Duration of the transition (in seconds)
        opacity: 0.5, // Fade out the current image
        onComplete: () => {
          // Update image source and fade in the new image
          imageRef.current.src = JournyImages[nextIndex];
          gsap.to(imageRef.current, { duration: 1, opacity: 1 }); // Fade in the new image
        }
      });

      currentIndex = nextIndex;
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []); // No dependencies, run only once

  return (
    <div className="journy-image-container">
      <img
        ref={imageRef}
        src={JournyImages[0]} // Start with the first image
        alt="Journy Image"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default JournyImageSlider;
