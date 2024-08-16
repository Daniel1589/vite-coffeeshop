import React from "react";

interface Slide {
  src: string;
  alt: string;
  header: string;
  description: string;
}

interface Display3BlockProps {
  slides: Slide[];
  header?: string;
}

export const Display3Block: React.FC<Display3BlockProps> = ({
  slides,
  header,
}) => {
  return (
    <div className="bg-amber-100 px-16 pb-14">
      <h1 className="text-center text-5xl font-medium pt-16 pb-16">{header}</h1>
      <div className="flex gap-10 text-center">
        {slides.map((slide, index) => (
          <div key={index} className="flex gap-10 text-center">
            <div className="w-full h-full">
              <img
                className="w-[550px] h-[550px]"
                src={slide.src}
                alt={slide.alt}
              />
              <div>
                <h1 className="font-bold pt-3">{slide.header}</h1>
                <p className="px-4">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
