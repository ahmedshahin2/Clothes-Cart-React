import React from "react";
import { IoEarth } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { TfiGift } from "react-icons/tfi";
import { Link } from "react-router-dom";
import InCart from "../Nav/InCart";

function FineWords() {
  return (
    <div className="mx-auto grid max-w-6xl     sm:grid-cols-1 md:grid-cols-1 ">
      <div
        className=" flex  justify-center  text-center mb-8 "
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className=" flex text-center justify-center mr-20  ">
          <IoEarth className=" size-7 mr-5" />
          <h1 className=" text-xl">FREE STANDARD SHIPPING</h1>
        </div>
        {/* ////////////////// */}
        <div className=" flex text-center justify-center mr-20">
          <GiWallet className=" size-7 mr-5" />
          <h1 className=" text-xl">100% MONEY BACK</h1>
        </div>
        {/* ///////////////////// */}
        <div className=" flex text-center justify-center ">
          <TfiGift className=" size-7 mr-5" />
          <h1 className=" text-xl">GIFTS FOR MEMBERS</h1>
        </div>
      </div>
    </div>
  );
}

export default FineWords;
