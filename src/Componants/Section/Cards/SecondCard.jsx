import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SecondCard() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Card className="w-full max-w-[100%] h-300   flex-row-reverse flex text-center justify-around  bg-black mt-40 mb-40 flex-wrap ">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none  bg-black"
        data-aos="fade-left"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-imag"
          className="h-full w-full object-cover rounded-2xl"
          data-aos="fade-right"
        />
      </CardHeader>
      <CardBody data-aos="fade-right">
        <div className=" mt-5  p-9">
          <h1
            variant="h1"
            color="white"
            className="  text-white mb-4 mt-5 uppercase font-bold  text-7xl"
          >
            startups
          </h1>
          <h2 className="mb-2 text-slate-100 text-lg">
            Lyft launching cross-platform service this week
          </h2>
          <b className="mb-8 font-bold flex  border-l-white  text-slate-400  ">
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
