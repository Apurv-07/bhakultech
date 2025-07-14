import Image from "next/image";
// import OurSolutions from "../coman/Testimonial";
// import OurSolutions from "../coman/OurSolutions";
import OurServices from "../coman/OurServices";
// import Industries from "../coman/Industries";
import Excellence from "../coman/Excellence";
// import GrowingCompany from "../coman/GrowingCompany";
// import InsightsUpdates from "../coman/InsightsUpdates";
// import JoinUs from "../coman/JoinUs";
// import ContactUs from "../coman/ContactUs";
import Followus from "../coman/Followus";
import Goalfocussed from "../coman/Goalfocussed";
import  Theprocess from "../coman/Theprocess";
import Innovate from "../coman/Innovate";
import Benefits from "../coman/Benefits";
import Solveproblems from "../coman/Solveproblems"
import ContactUssecond from "../coman/ContactUssecond"
import Firstpage from "../coman/Firstpage";
import Testimonials from "../coman/Testimonial";
import Challenge from "@/components/Challenge";
// import DigitalVision from "@/components/DigitalVision";

export default function Home() {
  return (
    <div className="w-full">
      <Firstpage />
      {/* <OurSolutions /> */}
      <Challenge />
      {/* <DigitalVision/> */}
      <OurServices />
      {/* <Industries /> */}
      <Excellence />
      {/* <GrowingCompany /> */}
      {/* <InsightsUpdates /> */}
      {/* <JoinUs /> */}
      {/* <ContactUs /> */}
      <Followus />
     
      <Goalfocussed/>
      < Theprocess/>
      <Innovate/>
      <Benefits/>
      <ContactUssecond />
      <Testimonials />

    </div>
  );
}
