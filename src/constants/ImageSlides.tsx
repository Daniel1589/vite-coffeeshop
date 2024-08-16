import Blend01 from "../pictures/blend01.jpg";
import Blend02 from "../pictures/blend02.jpg";
import Blend03 from "../pictures/blend03.jpg";
import Blend04 from "../pictures/blend04.jpg";
import Blend05 from "../pictures/blend05.jpg";
import Blend06 from "../pictures/blend06.jpg";

type Slide = {
  id: number;
  src: string;
  alt: string;
  title: string;
  price: string;
  link: string;
  description?: string;
  origin: string;
  roast: string;
  notes: string;
  bestServed: string;
};

export const imageSlides: Slide[] = [
  {
    id: 1,
    src: Blend01,
    alt: "Morning Bliss Blend",
    title: "Morning Bliss Blend",
    price: "316.61₪",
    link: "/blend01",
    description:
      "Start your day on a high note with Morning Bliss Blend. This medium-roast coffee combines beans from Central America and Colombia, resulting in a bright and smooth cup with hints of citrus and honey. Ideal for a refreshing morning boost.",
    origin: "Central America",
    roast: "Medium",
    notes: "Citrus, Honey, Light Cocoa",
    bestServed: "Black or with a touch of cream",
  },
  {
    id: 2,
    src: Blend02,
    alt: "Midnight Richness Blend",
    title: "Midnight Richness Blend",
    price: "316.61₪",
    link: "/blend02",
    description:
      "Unwind with the indulgent flavors of Midnight Richness Blend. This dark roast features a robust mix of Indonesian and Brazilian beans, creating a bold, full-bodied coffee with deep notes of dark chocolate and caramel. Perfect for an evening treat.",
    origin: "Indonesia, Brazil",
    roast: "Dark",
    notes: "Dark Chocolate, Caramel, Smoky",
    bestServed: "Black, or with a splash of milk",
  },
  {
    id: 3,
    src: Blend03,
    alt: "Earthy Harmony Blend",
    title: "Earthy Harmony Blend",
    price: "37.25₪",
    link: "/blend03",
    description:
      "Experience the balanced flavors of Earthy Harmony Blend, a medium-dark roast that melds beans from Ethiopia and Sumatra. This blend offers a harmonious combination of earthy undertones with a touch of spice and a smooth finish, ideal for a comforting cup.",
    origin: "Ethiopia, Sumatra",
    roast: "Medium-Dark",
    notes: "Earthy, Spicy, Smooth",
    bestServed: "Black or with a hint of sugar",
  },
  {
    id: 4,
    src: Blend04,
    alt: "Vanilla Dream Blend",
    title: "Vanilla Dream Blend",
    price: "93.12₪",
    link: "/blend04",
    description:
      "Savor the sweet and creamy essence of Vanilla Dream Blend. This flavored coffee combines a smooth medium roast with natural vanilla undertones, creating a delightful experience that pairs perfectly with your favorite morning pastry or dessert.",
    origin: "Blend of South American beans",
    roast: "Medium",
    notes: "Vanilla, Creamy, Sweet",
    bestServed: "Black, with cream, or as a latte",
  },
  {
    id: 5,
    src: Blend05,
    alt: "Spiced Ember Blend",
    title: "Spiced Ember Blend",
    price: "27.94₪",
    link: "/blend05",
    description:
      "Ignite your senses with Spiced Ember Blend, a bold medium roast featuring a mix of beans from Guatemala and Kenya. Infused with warm spices like cinnamon and nutmeg, this blend provides a cozy and invigorating cup that’s perfect for any time of day.",
    origin: "Guatemala, Kenya",
    roast: "Medium",
    notes: "Cinnamon, Nutmeg, Bold",
    bestServed: "Black or with a sprinkle of sugar",
  },
  {
    id: 6,
    src: Blend06,
    alt: "Decaf Serenity Blend",
    title: "Decaf Serenity Blend",
    price: "55.87₪",
    link: "/blend06",
    description:
      "Enjoy the rich flavors of coffee without the caffeine with Decaf Serenity Blend. This smooth blend of South American and African beans is decaffeinated through a natural process, ensuring you get a full-flavored cup with notes of toasted nuts and a hint of fruitiness.",
    origin: "South America, Africa",
    roast: "Medium",
    notes: "Toasted Nuts, Fruity, Smooth",
    bestServed: "Black or with your preferred milk alternative",
  },
];

import Pic1 from "../pictures/pic1.jpg";
import Pic2 from "../pictures/pic2.jpg";
import Pic3 from "../pictures/pic3.jpg";

export const threeBlock1 = [
  {
    src: Pic1,
    alt: "Pic1",
    header: "Espresso",
    description:
      "Espresso is a rich, bold coffee brewed by forcing hot water through finely-ground coffee beans. Known for its strong flavor and creamy consistency, it serves as the foundation for many classic coffee beverages like lattes, cappuccinos, and macchiatos. Whether enjoyed on its own or as part of a delicious coffee creation, espresso offers an intense, invigorating experience for coffee lovers.",
  },
  {
    src: Pic2,
    alt: "Pic2",
    header: "Pour-Over",
    description:
      "Pour-Over is a meticulous coffee brewing method that involves pouring hot water over ground coffee beans in a filter. This technique allows for precise control over brewing time and water temperature, resulting in a clean, flavorful cup of coffee with nuanced aromas. Popular for its ability to highlight the unique characteristics of different coffee beans, Pour-Over is a favorite among coffee enthusiasts who appreciate a hands-on approach to brewing.",
  },
  {
    src: Pic3,
    alt: "Pic3",
    header: "Drip",
    description:
      "Drip coffee, also known as filter coffee, is a convenient and popular brewing method that involves dripping hot water over ground coffee beans in a filter. The water gradually extracts the coffee's flavors as it passes through the grounds, resulting in a smooth and consistent cup of coffee. Ideal for making multiple servings at once, drip coffee makers are favored for their ease of use and reliable taste.",
  },
];

import Pic5 from "../pictures/pic5.jpg";
import Pic6 from "../pictures/pic6.jpg";
import Pic7 from "../pictures/pic7.jpg";

export const threeBlock2 = [
  {
    src: Pic5,
    alt: "Pic5",
    header: "Community Growth",
    description:
      "At BREW, our passion for coffee goes beyond brewing; it’s about fostering community growth. Located in Ashkelon, our coffee brewery is a vibrant hub where tradition meets innovation. We source our beans with care, supporting local farmers and promoting sustainable practices. Our goal is to create more than just a cup of coffee—it's about building connections, celebrating local culture, and contributing to the growth of our community. Join us in enjoying expertly crafted coffee and being part of a movement that enriches our neighborhood, one cup at a time.",
  },
  {
    src: Pic6,
    alt: "Pic6",
    header: "Fair Trade",
    description:
      "At BREW, our commitment to Fair Trade principles is at the heart of everything we do. Based in Ashkelon, our coffee brewery is dedicated to ensuring that every cup we serve is a product of ethical sourcing and responsible practices. We work directly with Fair Trade-certified farmers, ensuring they receive fair wages and work in safe conditions. By prioritizing sustainability and social responsibility, we bring you exceptional coffee that not only tastes great but also supports a better world. Join us in making a positive impact with every sip and supporting fair and equitable trade practices.",
  },
  {
    src: Pic7,
    alt: "Pic7",
    header: "Environmental Commitments",
    description:
      "At BREW, our dedication to environmental sustainability is a core part of our mission. Located in Ashkelon, our coffee brewery is committed to minimizing our ecological footprint through every stage of our process. From eco-friendly packaging to energy-efficient brewing practices, we strive to reduce waste and conserve resources. We partner with suppliers who share our values, ensuring that our coffee is not only exceptional but also produced with respect for the planet. Join us in enjoying delicious coffee while supporting our commitment to a greener, more sustainable future.",
  },
];
