const HelpCenter = () => {
  return (
    <>
      <div className="--help flex flex-row justify-around bg-[#1c1c28] w-[100%] relative mx-auto p-8">
        <div className="flex flex-col gap-[3rem] ">
          <div className="flex flex-col gap-[1rem]">
            <p className="text-3xl text-[#54BD95] font-[600]">Biccas</p>
            <p
              className="font-[500] text-[#A6A6A6]
            "
            >
              Get Started now try our product
            </p>
            <input
              type="text"
              placeholder="Enter your email here"
              className="w-[25rem] placeholder:text-[#A6A6A6]  rounded-lg placeholder:bg-[#1c1c28] border-[#A6A6A6]
            "
            />
          </div>
          <p className="font-[500] text-white text-[0.85rem]">
            2022 Biccas Inc. Copyright and rights reserved
          </p>
        </div>
        <div className="flex flex-col gap-[1.5rem]">
          <p className="text-white font-[500]">Support</p>
          <div className="font-[500] text-[#A6A6A6] text-[0.85rem] flex flex-col gap-2">
            <p>Help centre</p>
            <p>Account information</p>
            <p>About</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="flex flex-col gap-[1.5rem]">
          <p className="text-white font-[500]">Help and Solution</p>
          <div className="font-[500] text-[#A6A6A6] text-[0.85rem] flex flex-col gap-2">
            <p>Talk to Support</p>
            <p>Support docs</p>
            <p>System status</p>
            <p>Covid respond</p>
          </div>
        </div>
        <div className="flex flex-col gap-[1.5rem]">
          <p className="text-white font-[500]">Product</p>
          <div className="font-[500] text-[#A6A6A6] text-[0.85rem] flex flex-col gap-2">
            <p>Update</p>
            <p>Security</p>
            <p>Beta test</p>
            <p>Pricing product</p>
          </div>
        </div>
        <p className="absolute bottom-0 right-0 p-4 text-white text-[0.85rem]">
          Terms and Conditions . Privacy Policy
        </p>
      </div>
    </>
  );
};
export default HelpCenter;
