import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blend01 from "../pictures/blend01.jpg";
import Blend02 from "../pictures/blend02.jpg";
import Blend03 from "../pictures/blend03.jpg";
import Blend04 from "../pictures/blend04.jpg";
import Blend05 from "../pictures/blend05.jpg";
import Blend06 from "../pictures/blend06.jpg";
import { Link } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Define the type for arrow props
interface ArrowProps {
  onClick: () => void;
}

// Custom Previous Arrow Component
const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <IoIosArrowBack
        className="z-[9999] cursor-pointer absolute right-0"
        color="gray"
        size={30}
      />
    </div>
  );
};

// Custom Next Arrow Component
const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <IoIosArrowForward
        className="z-[9999] cursor-pointer absolute left-0"
        color="gray"
        size={30}
      />
    </div>
  );
};

// CarouselBlock Component
export const CarouselBlock: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slides",
    nextArrow: <CustomNextArrow onClick={() => {}} />, // Provide an empty function
    prevArrow: <CustomPrevArrow onClick={() => {}} />, // Provide an empty function
  };

  return (
    <div className="px-20 bg-orange-50">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-medium py-20">DELIVERED FRESH</h1>
      </div>

      <Slider {...settings}>
        <div>
          <img
            className="w-[450px] h-[450px] m-auto"
            src={Blend01}
            alt="Image 1"
          />
          <div className="pl-[69px] pt-4">
            <h1>Blend 01</h1>
            <p>316.61₪</p>
          </div>
        </div>
        <div>
          <img
            className="w-[450px] h-[450px] m-auto"
            src={Blend02}
            alt="Image 2"
          />
          <div className="pl-[69px] pt-4">
            <h1>Blend 02</h1>
            <p>316.61₪</p>
          </div>
        </div>
        <div>
          <img
            className="w-[450px] h-[450px] m-auto"
            src={Blend03}
            alt="Image 3"
          />
          <div className="pl-[69px] pt-4">
            <h1>Blend 03</h1>
            <p>37.25₪</p>
          </div>
        </div>
        <div>
          <img
            className="w-[450px] h-[450px] m-auto"
            src={Blend04}
            alt="Image 4"
          />
          <div className="pl-[69px] pt-4">
            <h1>Blend 04</h1>
            <p>93.12₪</p>
          </div>
        </div>
        <div>
          <img
            className="w-[450px] h-[450px] m-auto"
            src={Blend05}
            alt="Image 5"
          />
          <div className="pl-[69px] pt-4">
            <h1>Blend 05</h1>
            <p>27.94₪</p>
          </div>
        </div>
        <div>
          <img
            className="w-[450px] h-[450px] m-auto"
            src={Blend06}
            alt="Image 6"
          />
          <div className="pl-[69px] pt-4">
            <h1>Blend 06</h1>
            <p>55.87₪</p>
          </div>
        </div>
      </Slider>
      <div className="flex items-center justify-center py-20">
        <div className="flex justify-center bg-amber-100 w-[350px] h-[100px] border-black border-[1px] hover:bg-green-700 hover:text-white duration-500">
          <Link className="pt-7 text-4xl font-medium" to="/Shop">
            Shop All
          </Link>
        </div>
      </div>
    </div>
  );
};
