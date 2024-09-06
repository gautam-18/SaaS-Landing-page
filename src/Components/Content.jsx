const Content = () => {
  return (
    <>
      <div className="--content w-[90%] flex flex-row justify-between mx-auto pt-[4rem] relative">
        <div className="w-[50vw] aspect-square rounded-full bg-green-200 absolute -right-[25vw] z-[-1] blur-[300px]"></div>
        <div className="--productivity w-1/2 h-[70vh] flex flex-col items-center gap-y-[20px] ">
          <h1 className=" text-6xl font-[700] leading-[60px]">
            We&apos;re here to <br />
            Increase your <br /> Productivity
          </h1>
          <img
            src="/images/Vector32.png "
            alt=""
            className="w-[60%] h-[auto]"
          />
          <p className="font-[500] leading-[25px] ">
            Let&apos;s make your work more organize and easily using <br />
            the taskio Dashboard with many of the latest <br />
            features in managing work everyday
          </p>

          <div className="flex flex-row w-[40vw] justify-around ">
            <button>Try free trial</button>
            <img src="/images/Play.png" alt="" />
            <button> View Demo</button>
          </div>
        </div>
        <div className="--person w-1/2 h-[70%] flex justify-center">
          {/* <img
            src="/images/person.png"
            alt=""
            className="h-[70%] w-auto object-contain"
          /> */}
          <div className="  h-[72%] w-64 flex flex-col justify-evenly relative">
            <img src="/images/person.png" alt="" className="w-full h-full" />

            <img
              src="/images/amount.png"
              alt=""
              className="w-32 h-auto absolute top-4 -left-8  "
            />
            <img
              src="/images/creditCard.png"
              alt=""
              className="h-[40%] absolute bottom-4 -right-12"
            />
            <img
              src="/images/cylinder.png"
              alt=""
              className="h-[20%] absolute top-4 -right-10"
            />
            <img
              src="/images/Rectangle 34.png"
              alt=""
              className="h-[1rem] w-[1rem] absolute top-24 -left-5"
            />
            <img
              src="/images/messages.png"
              alt=""
              className="h-[2rem] w-[2rem] absolute -bottom-4 left-40"
            />
            <img
              src="/images/income.png"
              alt=""
              className="w-20 h-[2.5rem] absolute bottom-2 -left-8"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
