import React from "react";
import "./HeroSection.css";
import JobList from "../JobList/JobList";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";


function HeroSection() {
  return (
    <div className="hero-container">
      
      <div className="hero-container-texts">
      
        <h4 className="heyy">Hey,</h4>
        <h1 className="name">Daboikiabo Samuel Johnson</h1>
        <p className="desc">I am a FrontEnd Developer I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have managed to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</p>
      </div>
      <Skills />
      <JobList />
      <Footer />
      
    </div>
  );
}

export default HeroSection;