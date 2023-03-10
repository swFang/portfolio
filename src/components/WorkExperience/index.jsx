import React from "react";
import Card from "../Testing/Card";

const WorkExperience = () => {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 60000,
        type: "spring",
        damping: 50,
        stiffness: 500,
      },
    },
    exit: { y: "100vh", opacity: 0 },
  };

  return (
    <div className='experience-page section centered'>
      <div className='exp-content'>
        {/* <ScrollingParrallax /> */}
        {/* <WeModal /> */}
        <Card />
      </div>
    </div>
  );
};

export default WorkExperience;
