import hoodi1 from "../../Asetss/images/hoodie1.jpg";
import hoodi2 from "../../Asetss/images/1hoodie2.jpg";
import hoodi3 from "../../Asetss/images/1hoodie3.jpg";
import hoodi4 from "../../Asetss/images/1hoodie4.jpg";
import hoodi5 from "../../Asetss/images/hoodie7.jpg";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Hoodie",
    href: "#",
    price: "$48",
    imageSrc: hoodi1,
    imageAlt: "Hoodie",
  },
  {
    id: 2,
    name: "Hoodie with jeans",
    href: "#",
    price: "$35",
    imageSrc: hoodi2,
    imageAlt: "Hoodie with jeans",
  },
  {
    id: 3,
    name: "Hoodie with Black jeans",
    href: "#",
    price: "$89",
    imageSrc: hoodi3,
    imageAlt: "Hoodie with Black jeans",
  },
  {
    id: 4,
    name: "Palestine Hoodie",
    href: "#",
    price: "$35",
    imageSrc: hoodi5,
    imageAlt: "Palestine Hoodie",
  },
  // More products...
];

export default function Card() {
  return (
    <div className="bg-black   grid-cols-1 gap-6 p-6 sm:grid-cols-2 md: grid-cols-3 lg:grid-cols-4 ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 group-hover:scale-105 transition ease-in-out ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-auto w-auto object-cover object-center "
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-200">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-400">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
