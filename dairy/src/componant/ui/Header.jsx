import React, { useEffect, useState } from "react";

const Header = () => {
  const videos = ["v1.mp4", "v2.mp4", "v3.mp4", "v4.mp4"];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === videos.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Fullscreen responsive container */}
      <div className="relative w-full h-screen overflow-hidden">

        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className={`
              absolute top-0 left-0 w-full h-full object-cover
              transition-opacity duration-700
              ${currentIndex === index ? "opacity-100" : "opacity-0"}
            `}
          ></video>
        ))}

      </div>
    </>
  );
};

export default Header;
