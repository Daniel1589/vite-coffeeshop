import React from "react";
import { TextBlock } from "../components/TextBlock";
import { Display3Block } from "../components/Display3Block";
import { threeBlock2 } from "../constants/ImageSlides";
export const About = () => {
  return (
    <div>
      <TextBlock
        header="WHO WE ARE"
        text="At BREW, we are dedicated to the art of crafting exceptional coffee that celebrates the
        essence of our local community. Situated in the heart of Ashkelon, our coffee brewery combines
        traditional brewing methods with innovative techniques to deliver a unique and rich coffee
        experience. From bean to cup, we ensure every batch reflects our passion for quality and
        craftsmanship. Join us in savoring the perfect brew, where every sip is a tribute to our dedication to
        great coffee."
      />
      <p className="bg-yellow-50 text-right pr-20 text-xs">
        Totally didn't use chatgpt for that...
      </p>
      <Display3Block header="HOW IT'S MADE" slides={threeBlock2} />
    </div>
  );
};
