import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import logo from "../../../Asetss/images/logo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import xx from "../../../Asetss/images/1hoodie1.jpg";

export default function Card1() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Card className="w-full max-w-[100%] h-300  flex-row flex text-center justify-around  bg-black mt-40 mb-40 flex-wrap ">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none bg-black"
      >
        <img
          src={logo}
          // src={xx}
          alt="card-imag"
          className="h-200px w-200px object-cover rounded-2xl"
          data-aos="fade-right"
        />
      </CardHeader>
      <CardBody data-aos="fade-left" className="">
        <div className=" mt-5  p-9">
          <h1
            variant="h1"
            color="white"
            className="  text-white mb-4 mt-5 uppercase font-bold  text-7xl"
          >
            startups
          </h1>
          <h2 color="blue-gray" className="mb-2 text-slate-100 text-lg">
            Lyft launching cross-platform service this week
          </h2>
          <b
            color="red"
            className="mb-8 font-bold flex  border-l-white  text-slate-400  "
          >
            Like so many organizations these days,
            <br /> Autodesk is a company in transition.<br></br> It was until
            recently
            <br /> a traditional boxed software company selling licenses.
          </b>
        </div>
      </CardBody>
    </Card>
  );
}
