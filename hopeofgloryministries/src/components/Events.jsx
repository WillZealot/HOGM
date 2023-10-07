import React from "react";

import backphoto from "../hogassets/7C56B769-9DB6-4A82-A7E2-8ED6BFF9A37B.jpeg";

const Events = () => {
  const isSmallScreen = window.innerWidth <= 768; // You can adjust this breakpoint as needed
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backphoto})`,
    backgroundSize: "cover",
    backgroundPosition: isSmallScreen ? "left" : "center", // Change 'left' for small screens
    backgroundRepeat: "no-repeat",
  };

  return (
    <div name="Events" className="w-full h-screen" style={backgroundStyle}>

    </div>
  );
};

export default Events;