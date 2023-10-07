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
              Dear Friends, I want to share a powerful journey with you. As a
              child, my face was paralyzed, and doctors couldn't help. But an
              elderly lady from our small Slavic house church said she saw Jesus
              touch my face. The next day, my face was healed, a true miracle.
              This experience led me to dedicate my life to God. I started "Hope
              of Glory Ministries," sharing hope and faith in Jesus. My story
              shows that if God can do this for me, He can do it for you too.
              Never lose faith; with God, all is possible. Blessings, Dimitry
              Tikhonenko
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
