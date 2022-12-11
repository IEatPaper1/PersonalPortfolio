import React, { useState } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe.js";
import Home from "./Home";
const NavBar = () => {
  var [showProject, setShowProject] = useState(false);
  var [showHome, setShowHome] = useState(true);
  var [showAboutMe, setShowAboutMe] = useState(false);
  const displayProject = () => {
    setShowProject(true);
    setShowHome(false);
    setShowAboutMe(false);
  };
  const displayAboutMe = () => {
    setShowProject(false);
    setShowHome(false);
    setShowAboutMe(true);
  };
  const displayHome = () => {
    setShowProject(false);
    setShowHome(true);
    setShowAboutMe(false);
  };
  return (
    <div>
      <div class="bg-emerald-400 h-12 border-2">
        <div class="mt-2 font-serif text-teal-100 italic">
          <div class="absolute left-4 text-3xl top-1 block">
            My Personal Portfolio
          </div>
          <div class="absolute right-4 flex flex-row gap-x-10">
            <div onClick={() => displayAboutMe()} class="hover:text-teal-300">
              About Me
            </div>
            <div onClick={() => displayProject()} class="hover:text-teal-300">
              Projects
            </div>
            <div onClick={() => displayHome()} class="hover:text-teal-300">
              Home
            </div>
          </div>
        </div>
      </div>
      {showProject && <Projects />}
      {showAboutMe && <AboutMe />}
      {showHome && <Home />}
    </div>
  );
};

export default NavBar;
