import React, { useState } from "react";
import Hero from "./components/Hero";
import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import SkillsSetPage from "./SkillsSetPage";
import WorkPage from "./WorkPage";
import ToolsPage from "./ToolsPage";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

function HomePage() {
  const [greetings, setGreetings] = useState("Hello! My name is");
  const [intro, setIntro] = useState("Olawale Otubu.");
  const [jobTitle, setJobTitle] = useState("I'm a fullstack web developer");

  return (
    <>
      <motion.Hero
        max="true"
        exit={{ y: "-100vh", transition: { ease: "easeInOut", duration: 8 } }}>
        <div className="intro ">
          <span>
            <Title greeting={greetings} intro={intro} jobTitle={jobTitle} />
          </span>
        </div>
      </motion.Hero>
      <About />
      <WorkPage />
      <SkillsSetPage />
      <ToolsPage />
      <Contact />
    </>
  );
}

export default HomePage;
