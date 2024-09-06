const Benefits = () => {
  return (
    <>
      <div className="--fayde flex flex-row w-[90%] mx-auto p-8 justify-between relative">
        <div className="w-[50vw] aspect-square rounded-full bg-green-200 absolute -right-[25vw] -bottom-[25vw] z-[-1] blur-[300px]"></div>
        <div className="part-1 flex flex-col gap-10 w-1/2">
          <p className="font-[700] text-3xl">
            What Benefit Will <br />
            You Get
          </p>
          <div className="h-[70%] flex flex-col gap-3">
            <div className="flex flex-row items-center gap-x-3">
              <img
                src="/images/Subtract.png"
                alt=""
                className="h-[1.3rem] w-[1.3rem]"
              />
              <p>Free Consulting With Expert Saving Money</p>
            </div>
            <div className="flex flex-row items-center gap-x-3">
              <img
                src="/images/Subtract.png"
                alt=""
                className="h-[1.3rem] w-[1.3rem]"
              />
              <p>Online Banking</p>
            </div>
            <div className="flex flex-row items-center gap-x-3">
              <img
                src="/images/Subtract.png"
                alt=""
                className="h-[1.3rem] w-[1.3rem]"
              />
              <p>Investment Report Every Month</p>
            </div>
            <div className="flex flex-row items-center gap-x-3">
              <img
                src="/images/Subtract.png"
                alt=""
                className="h-[1.3rem] w-[1.3rem]"
              />
              <p>Saving Money For The Future</p>
            </div>
            <div className="flex flex-row items-center gap-x-3">
              <img
                src="/images/Subtract.png"
                alt=""
                className="h-[1.3rem] w-[1.3rem]"
              />
              <p>Online Transaction</p>
            </div>
          </div>
        </div>
        <div className="part-2 h-[72%] w-64 relative">
          <img
            src="/images/Rectangle 48.png"
            alt=""
            className="w-full h-full"
          />
          <img
            src="/images/Group 112.png"
            alt=""
            className=" absolute bottom-40 -right-14 h-[20%]"
          />
          <img
            src="/images/Group 113.png"
            alt=""
            className="absolute top-[8rem] -left-10 h-[2rem] w-[2rem]"
          />
          <img
            src="/images/Group 110.png"
            alt=""
            className="absolute w-[8rem] h-[2rem] top-5 -left-12 bg-white"
          />
          <img
            src="/images/Group 114.png"
            alt=""
            className="absolute  w-[8rem] h-[2rem] -bottom-3 -left-12"
          />
        </div>
      </div>
    </>
  );
};
export default Benefits;
