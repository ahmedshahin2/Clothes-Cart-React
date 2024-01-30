import React from "react";
import Card from "./card";
import Card2 from "./proToCart";
import Card1 from "./Cards/Card1";
import SecondCard from "./Cards/SecondCard";
import FineWords from "./FineWords";
import InCart from "../Nav/InCart";
import ItemCart from "../Cart/ItemCart";
import data from "../data/data";
function Section() {
  const dataShow = data.map((item, index) => {
    return (
      <ItemCart
        key={index}
        item={item}
        price={item.price}
        img={item.img}
        altImg={item.altImg}
        title={item.titel}
      />
    );
  });
  return (
    <div>
      <Card1 />
      <SecondCard />
      <FineWords />
      <Card />
      <h2
        className="text-5xl font-bold tracking-tight text-white-900 mb-20"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        Customers also purchased
      </h2>
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {dataShow}
      </div>
    </div>
  );
}
export default Section;
