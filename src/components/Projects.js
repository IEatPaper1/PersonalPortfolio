import React from "react";
import { AiFillGithub } from "react-icons/ai";
const Projects = () => {
  return (
    <div class="flex justify-center gap-20 mt-12 text-center">
      <div class="bg-emerald-400 w-[200px] h-[200px]">
        <div class="p-5">
          <div class="underline font-bold">Rock Paper Sisccors</div>
          (created in python).This project is great because it was my first ever
          coding project.
        </div>
      </div>
      <div class="bg-emerald-400 w-[200px] h-[200px]">
        <div class="p-5">
          <div class="underline font-bold">Personal Portfolio</div>Site where I
          put stuff I did so far using react and tailwind.css
        </div>
        <div class="ml-20">
          <a href="https://github.com/IEatPaper1/PersonalPortfolio">
            <AiFillGithub size={50} />
          </a>
        </div>
      </div>
      <div class="bg-emerald-400 w-[200px] h-[200px]"></div>
    </div>
  );
};

export default Projects;
