import React, { useEffect } from "react";
import { useRef } from "react";

const Hero = () => {
  {
    /* to edit a video tag speed and more */
  }
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="../../public/title.png" alt="MacBook Title" />
      </div>

      <video
        ref={videoRef}
        src="../../public/videos/hero.mp4"
        autoPlay
        muted
        playsInline
      />

      <button>Buy</button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
