import React from "react";
import "./HeroSection.css";
import JobList from "../JobList/JobList";


function HeroSection() {
  return (
    <div className="hero-container">
      
      <div className="hero-container-texts">
      
        <h4>Hey, I'm</h4>
        <h1 className="name">Daboikiabo Samuel Johnson</h1>
        <p className="desc">I'm a FrontEnd Developer based in Nigeria. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</p>
      </div>
      <JobList />
      
    </div>
  );
}

export default HeroSection;