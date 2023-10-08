import React from "react";

import backphoto from "../hogassets/086F307E-F69C-4D47-B782-3967865B7005_1_201_a.jpeg";

const About = () => {
  const isSmallScreen = window.innerWidth <= 768; // You can adjust this breakpoint as needed
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backphoto})`,
    backgroundSize: "cover",
    backgroundPosition: isSmallScreen ? "left" : "center", // Change 'left' for small screens
    backgroundRepeat: "no-repeat",
  };

  return (
    <div name="About" className="w-full h-screen" style={backgroundStyle}>
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* Text content */}
        <div className="lg:flex-row flex-col-reverse flex justify-center items-center">
          <div className="text-center lg:text-left lg:w-6/8">
            <p className="text-white text-4xl opacity-70 text-right font-bold py-4 max-w-[700px] ">
              From Paralysis to Evangelism
            </p>
            <p className="text-white text-right font-bold py-4 max-w-[700px] ">
              Dmitriy serves as the head of Hope of Glory Ministries, As a
              child, he was seen by multiple doctors who said they had no answer
              for his paralyzed face, he experienced supernatural healing of
              facial paralysis after he received prayer from spirit filled
              Christians. As a young adult, he was saved from a secular life of
              false spirituality, hopelessness, and emptiness. His life took an
              abrupt turn when he encountered the manifest tangible presence of
              God walking into a prayer house. Since that moment, living for
              anything other than Jesus would be a lie, he often says..now he
              serves in the contexts of the local Church, the international
              Church, Bible colleges conferences, missions and the market place
              with one passion to glorify the name of Jesus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
