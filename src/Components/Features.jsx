const Features = () => {
  return (
    <>
      <div className="parent flex flex-col w-[90%] mx-auto gap-8">
        <div className="child1 flex flex-row justify-between">
          <div className="w-[33%]">
            <p className="text-3xl font-[600]">
              Our Features <br />
              your cab get
            </p>
          </div>
          <div className="w-[53%]">
            <p
              className="font-[500] text-[0.8rem] text-[#A6A6A6] 
              "
            >
              We offer a variety of interesting features that you can <br />
              help increase your productivity at work and manage <br />
              your project early
            </p>
          </div>
          <div className="w-[10%] flex justify-end">
            <button
              className=" bg-[#54BD95] rounded-[2rem] text-white w-[10rem] h-[2.5rem]
              "
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="child2 flex flex-row justify-between">
          <img src="/images/Frame 247.png" alt="" className="h-[40%] w-[30%]" />
          <img src="/images/Frame 53.png" alt="" className="h-[40%] w-[30%]" />
          <img src="/images/Frame 54.png" alt="" className="h-[40%] w-[30%]" />
        </div>
        <div className="child3 flex flex-row justify-between">
          <div className="flex  flex-col items-start w-[30%] gap-[0.5rem]">
            <p className="font-[600] text-xl">Collaboration Teams</p>
            <p className=" text-[#A6A6A6] text-[0.8rem] ">
              Here you can handle projects together <br />
              with your team virtually
            </p>
          </div>
          <div className="flex flex-col items-start  w-[30%] gap-[0.5rem]">
            <p className="font-[600] text-xl">Cloud Storage</p>
            <p className=" text-[#A6A6A6] text-[0.8rem]">
              No need to worry about Storage <br />
              because we provide storage up to 2 TB
            </p>
          </div>
          <div className="flex flex-col items-start  w-[30%] gap-[0.5rem]">
            <p className="font-[600] text-xl">Data Analytics</p>
            <p className=" text-[#A6A6A6] text-[0.8rem]">
              We always provide useful information to <br />
              make it easier for you everyday
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
