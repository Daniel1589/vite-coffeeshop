import { imageSlides } from "../constants/ImageSlides";
import { Link } from "react-router-dom";
export const Shop = () => {
  return (
    <div className="bg-zinc-200 py-4">
      <h1 className="text-center text-4xl font-medium py-10">SHOP BLENDS</h1>
      <div className="flex flex-wrap justify-center gap-1 bg-zinc-200">
        {imageSlides.map((slide, index) => (
          <div key={index}>
            <Link to={`/blend/${slide.id}`}>
              <img
                className="w-[600px] h-[600px] m-auto"
                src={slide.src}
                alt={slide.alt}
              />
              <div className="pt-4">
                <h1 className="text-l font-medium">{slide.title}</h1>
                <p className="text-gray-600 tracking-tight">{slide.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
