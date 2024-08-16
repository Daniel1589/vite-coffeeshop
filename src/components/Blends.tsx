import { imageSlides } from "../constants/ImageSlides";
import { Link, useParams } from "react-router-dom";
import "../styles.css";
type Params = {
  id: string;
};

export const Blends: React.FC = () => {
  const { id } = useParams<Params>();
  console.log("Params ID:", id); // Debugging line

  const blend = id
    ? imageSlides.find((slide) => slide.id === parseInt(id))
    : undefined;

  console.log("Found Blend:", blend); // Debugging line

  if (!blend) {
    return <p>Blend not found.</p>;
  }

  return (
    <div className="bg-[#f2f1ed]">
      <div className=" flex justify-center py-20 gap-10 relative">
        <Link className="absolute top-10 left-1/4" to="/Shop">
          Back
        </Link>
        <div className="flex flex-col gap-6 w-1/4">
          <img src={blend.src}></img>
          <p>{blend.description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-4xl">{blend.title}</h1>
          <p className="font-medium text-xl">{blend.price}</p>
          <p className="text-sm">Quantity</p>
          <input
            className="w-16 h-8 text-center bg-white border-[1px] border-gray-300 custom-input-style"
            placeholder="1"
            type="text"
          ></input>
          <input
            className="bg-black text-white hover:bg-zinc-800 duration-200 hover:text-zinc-300 cursor-pointer px-24 py-[6px]"
            type="button"
            value="Add to Cart"
          ></input>
          <h1 className="font-medium text-xl">PRODUCT INFO</h1>
          <ul>
            <li>Origin: {blend.origin}</li>
            <li>Roast: {blend.roast}</li>
            <li>Notes: {blend.notes}</li>
            <li>Best Served: {blend.bestServed}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
