import Navbar from "../Components/Navbar";
import Support from "../Components/Support";
import Company from "../Components/Company";
import Content from "../Components/content";
import Features from "../Components/Features";
import Benefits from "../Components/Benefits";
import Plans from "../Components/Plans";
import ContactUs from "../Components/ContactUs";
import HelpCenter from "../Components/Helpcenter";
const Landingpage = () => {
  return (
    <div className="flex flex-col gap-16 w-full overflow-x-hidden">
      <div>
        <Navbar />
        <Content />
      </div>
      <Company />
      <Support />
      <Features />
      <Benefits />
      <Plans />
      <div>
        <ContactUs />
        <HelpCenter />
      </div>
    </div>
  );
};
export default Landingpage;
