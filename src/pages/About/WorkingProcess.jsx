import React, { useState } from "react";

const WorkingProcess = ({ workingProcess }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPrevButton, setShowPrevButton] = useState(false);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    if (currentStep === 0) {
      setShowPrevButton(true);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    if (currentStep === 1) {
      setShowPrevButton(false);
    }
  };

  return (
    <div className="working-process-container">
      {workingProcess.map((step, index) => (
        <div
          key={index}
          className={`process-step ${index === currentStep ? "active" : ""}`}
        >
          <h3>{step.step}</h3>
          <h2>{step.title}</h2>
          <p>{step.description}</p>
          {index === currentStep && (
            <div className="step-image-container">
              <img src={step.stepImage.mainImg} alt={`Step ${index + 1}`} />
            </div>
          )}
        </div>
      ))}
      <div className="arrow-buttons">
        {showPrevButton && (
          <button onClick={handlePrevStep}>&#8592; Previous Step</button>
        )}
        {currentStep < workingProcess.length - 1 && (
          <button onClick={handleNextStep}>Next Step &#8594;</button>
        )}
      </div>
    </div>
  );
};

export default WorkingProcess;
