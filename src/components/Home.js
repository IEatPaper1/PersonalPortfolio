import React from "react";
import { GiWaterBottle } from "react-icons/gi";
const Home = () => {
  return (
    <div>
      <div class="flex flex-row bg-emerald-300 mt-10 p-10 w-4/5 font-serif ml-36">
        <img
          class="w-1/2"
          alt=""
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        ></img>
        <div class="flex flex-col w-1/2 text-center gap-y-5 text-3xl">
          <div class="text-5xl underline">Meet Avery</div>
          <div class="w-1/4 ml-[275px]">
            <div>My name is Avery</div>
            <div>I'm currently a sophomore at Tottenville Highschool</div>
            <div>I am also pursuing a career on game development</div>
          </div>
        </div>
      </div>
      <GiWaterBottle size={50} />
      <div class="bg-sky-400 h-12">
        I like blue looking things and bananas? I think I do. No, I think I like
        water more
      </div>
    </div>
  );
};

export default Home;
