import React from "react";
import backphoto from "../hogassets/7C56B769-9DB6-4A82-A7E2-8ED6BFF9A37B.jpeg";

const Events = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backphoto})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      name="Events"
      className="w-full h-screen flex items-center justify-center"
      style={backgroundStyle}
    >
        </div>
  );
};

export default Events;
