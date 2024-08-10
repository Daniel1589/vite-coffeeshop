import Pic1 from "../pictures/pic1.jpg";
import Pic2 from "../pictures/pic2.jpg";
import Pic3 from "../pictures/pic3.jpg";

export const Display3Block = () => {
  return (
    <div className="bg-amber-100 px-16 pb-14">
      <h1 className="text-center text-5xl font-medium pt-16 pb-16">
        GRAB IT ON THE GO
      </h1>
      <div className="flex gap-10 text-center">
        <div className="w-full h-full">
          <img className="w-[550px] h-[550px]" src={Pic1}></img>
          <div>
            <h1 className="font-bold pt-3">Espresso</h1>
            <p className="px-4">
              Espresso is a rich, bold coffee brewed by forcing hot water
              through finely-ground coffee beans. Known for its strong flavor
              and creamy consistency, it serves as the foundation for many
              classic coffee beverages like lattes, cappuccinos, and macchiatos.
              Whether enjoyed on its own or as part of a delicious coffee
              creation, espresso offers an intense, invigorating experience for
              coffee lovers.
            </p>
          </div>
        </div>

        <div className="w-full h-full">
          <img className="w-[550px] h-[550px]" src={Pic2}></img>
          <div>
            <h1 className="font-bold pt-3">Pour-Over</h1>
            <p className="px-4">
              Pour-Over is a meticulous coffee brewing method that involves
              pouring hot water over ground coffee beans in a filter. This
              technique allows for precise control over brewing time and water
              temperature, resulting in a clean, flavorful cup of coffee with
              nuanced aromas. Popular for its ability to highlight the unique
              characteristics of different coffee beans, Pour-Over is a favorite
              among coffee enthusiasts who appreciate a hands-on approach to
              brewing.
            </p>
          </div>
        </div>

        <div className="w-full h-full">
          <img className="w-[550px] h-[550px]" src={Pic3}></img>
          <div>
            <h1 className="font-bold pt-3">Drip</h1>
            <p className="px-4">
              Drip coffee, also known as filter coffee, is a convenient and
              popular brewing method that involves dripping hot water over
              ground coffee beans in a filter. The water gradually extracts the
              coffee's flavors as it passes through the grounds, resulting in a
              smooth and consistent cup of coffee. Ideal for making multiple
              servings at once, drip coffee makers are favored for their ease of
              use and reliable taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
