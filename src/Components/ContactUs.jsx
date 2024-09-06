const ContactUs = () => {
  return (
    <>
      <div className="--parent flex flex-col w-[100%] mx-auto bg-[#1c1c28] p-8">
        <div className="form flex flex-row">
          <div className="about flex flex-col w-1/2 gap-5 p-[4rem]">
            <p className="font-[600] text-white text-2xl">
              People are Saying <br />
              About DoWhith
            </p>
            <p className="font-[500] text-[#A6A6A6]">
              Everything you need to accept to payment and grow <br />
              your money or manage everywhere on planet
            </p>
            <img
              src="/images/Group 212.png"
              alt=""
              className="h-[1.8rem] w-[1.8rem]"
            />
            <p className="font-[500] text-[#A6A6A6]">
              I am very helped by this E-wallet application, my <br />
              days arer very easy to use this application and it&apos;s very
              helpful in my life , even I can pay a short time
            </p>

            <p className="font-[500] text-[#A6A6A6]">_Aria Zinanrio</p>
            <div className="images flex flex-row gap-x-3">
              <img
                src="/images/Ellipse 57.png"
                alt=""
                className="h-[2rem] w-[2rem]"
              />
              <img
                src="/images/Ellipse 56.png"
                alt=""
                className="h-[1.8rem] w-[1.8rem]"
              />
              <img
                src="/images/Ellipse 55.png"
                alt=""
                className="h-[1.8rem] w-[1.8rem]"
              />
              <img
                src="/images/Ellipse 54.png"
                alt=""
                className="h-[1.8rem] w-[1.8rem]"
              />
              <img
                src="/images/Group 215.png"
                alt=""
                className="h-[1.8rem] w-[1.8rem]"
              />
            </div>
          </div>
          <div className="email flex flex-col w-1/2 bg-[#222938] h-auto gap-5 p-[4rem] items-center rounded-lg">
            <img
              src="/images/Vector1.png.png"
              alt=""
              className="h-[3rem] w-[2.5rem]"
            />

            <p className="text-white font-[700] text-2xl">Get Started</p>
            <div className="flex flex-col gap-3">
              <p className="text-white">Email</p>
              <input
                type="text"
                placeholder="Enter Your email"
                className="rounded-lg p-1 w-[25rem]"
              />
              <p className="text-white">Message</p>
              <input
                type="text"
                placeholder="What do you say ?"
                className="rounded-lg p-1 w-[25rem] h-[5rem] placeholder:translate-y-[-1rem] placeholder:p-0 "
              />
              <button className="bg-[#54BD95] text-white h-[3rem] rounded-lg">
                Request Demo
              </button>
              <p className="text-end text-[0.5rem] text-white">
                or Start Free Trial
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
