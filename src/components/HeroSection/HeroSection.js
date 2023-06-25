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
        <p className="desc">Hello. I'm Dabo a frontend developer with 2 years of experience writing Javascript. I am a first class honors graduate of Benson Idahosa University(Computer Science). I have experience with React J, Typescript, Css, Sass. Next Js, REST API, figma and Python. I have done a couple of freelance projects with a notable company Almond Careers. If I am given the opportunity, you won't regret the decision of hiring me.
        </p>
      </div>
      <Skills />
      <JobList />
      <Footer />

    </div>
  );
}

export default HeroSection;