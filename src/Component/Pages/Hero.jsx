import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="heroSection grid md:grid-cols-2 px-24">
      <div className=""></div>
      <div className="mt-36">
        <h1 className="text-2xl text-white">Would you like a Cup of Delicious Coffee?</h1>
        <p className="text-sm mt-4 text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! <br /> Your companion of every moment!!!  Enjoy the beautiful moments and make them memorable.</p>
        <button className="mt-8 btn btn-active btn-primary">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
