import mainPageImg from "../../pictures/mainPage.jpg";
import { TextBlock } from "../../components/TextBlock";
import { Display3Block } from "../../components/Display3Block";
import { threeBlock1 } from "../../constants/ImageSlides";
import { ImageBlock } from "../../components/ImageBlock";
import { Link } from "react-router-dom";
import { CarouselBlock } from "../CarouselBlock";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const MainPage = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <div className="relative">
        <p className="absolute text-white text-8xl tracking-wide font-medium pl-8 pt-6">
          FOR THE LOVE <br /> OF COFFEE
        </p>
        <img src={mainPageImg}></img>
        <div className="absolute flex justify-center bg-amber-100 w-[350px] h-[100px] border-black border-[1px] right-16 bottom-20 hover:bg-green-700 hover:text-white duration-500">
          <Link className="pt-7 text-4xl font-medium" to="/Shop">
            Shop Blends
          </Link>
        </div>
      </div>
      <TextBlock
        text="Globally sourced but locally brewed our flavorful, full-bodied roasts
        taste as good as they smell."
      />
      <Display3Block header="GRAB IT ON THE GO" slides={threeBlock1} />
      <ImageBlock />
      <CarouselBlock />
    </div>
  );
};
