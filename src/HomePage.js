import React, { useState } from "react";
import Hero from "./components/Hero";
import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import SkillsSetPage from "./SkillsSetPage";
import WorkPage from "./WorkPage";
import ToolsPage from "./ToolsPage";
import Contact from "./components/Contact";

function HomePage() {
  const [greetings, setGreetings] = useState("Hello! My name is");
  const [intro, setIntro] = useState("Olawale Otubu");
  const [jobTitle, setJobTitle] = useState("I'm a fullstack web developer");

  return (
    <>
      <Hero max="true">
        <div className="intro ">
          <span>
            <Title greeting={greetings} intro={intro} jobTitle={jobTitle} />
          </span>
        </div>
      </Hero>
      <About />
      <WorkPage />
      <SkillsSetPage />
      <ToolsPage />
      <Contact />
    </>
  );
}

export default HomePage;
