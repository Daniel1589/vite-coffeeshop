import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { imageSlides } from "../constants/ImageSlides";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ArrowProps {
  onClick: () => void;
}

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

export const CarouselBlock: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    className: "slides",
    nextArrow: <CustomNextArrow onClick={() => {}} />,
    prevArrow: <CustomPrevArrow onClick={() => {}} />,
  };

  return (
    <div className="px-20 bg-orange-50">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-medium py-20">DELIVERED FRESH</h1>
      </div>

      <Slider {...settings}>
        {/* Added Link component to wrap each slide with dynamic URL */}
        {imageSlides.map((slide) => (
          <Link to={`/blend/${slide.id}`} key={slide.id}>
            <div>
              <img
                className="w-[450px] h-[450px] m-auto"
                src={slide.src}
                alt={slide.alt}
              />
              <div className="pl-[69px] pt-4">
                <h1 className="text-l font-medium">{slide.title}</h1>
                <p className="text-gray-600 tracking-tight">{slide.price}</p>
              </div>
            </div>
          </Link>
        ))}
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
