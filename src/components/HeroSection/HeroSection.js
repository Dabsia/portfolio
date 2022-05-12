import React from "react";
import "./HeroSection.css";
import JobList from "../JobList/JobList";


function HeroSection() {
  return (
    <div className="hero-container">
      <div>
      
        <h4>Hey, I'm</h4>
        <h1 className="name">Daboikiabo Samuel Johnson</h1>
        <p className="desc">I'm a FrontEnd Developer based in Nigeria, Rivers State and also a Computer Science student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</p>
      </div>
      {/*<hr />*/}
      <JobList />
    </div>
  );
}

export default HeroSection;