import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import "./Header.css";
function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-container mt-40 mb-40">
      <div className="top-txt">
        <h1 className=" text-9xl  font-bold mt-20" data-aos="fade-up">
          Clothes
        </h1>
        <p className=" mt-5 text-lg text-gray-400 mb-9" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
export default Header;
