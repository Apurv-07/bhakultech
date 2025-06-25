import Image from "next/image";
import OurSolutions from "../coman/OurSolutions";
import OurServices from "../coman/OurServices";
import Industries from "../coman/Industries";
import Excellence from "../coman/Excellence";
import GrowingCompany from "../coman/GrowingCompany";
import InsightsUpdates from "../coman/InsightsUpdates";
import JoinUs from "../coman/JoinUs";
import ContactUs from "../coman/ContactUs";
import Followus from "../coman/Followus";
import Firstpage from "../coman/Firstpage";

export default function Home() {
  return (
    <div className="w-full">
      <Firstpage />
      <OurSolutions />
      <OurServices />
      <Industries />
      <Excellence />
      <GrowingCompany />
      <InsightsUpdates />
      <JoinUs />
      <ContactUs />
      <Followus />
    </div>
  );
}
