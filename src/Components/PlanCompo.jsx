const PlansComponent = ({ Type, Desc, Amount, reqbutton }) => {
  return (
    <>
      <div className="w-[25%] h-[80%] flex flex-col bg-white items-center gap-2 pt-4 rounded-lg hover:bg-[#54BD95] pb-4 group">
        <p className="font-[600] text-xl group-hover:text-white">{Type}</p>
        <p
          className="group-hover:text-white font-[500] text-[#A6A6A6]
"
        >
          {Desc}
        </p>
        <div className="flex flex-row">
          <img src="/images/$.png" alt="" className="h-[0.5rem] w-[0.5rem]" />
          <p className="group-hover:text-white text-2xl font-[700]">{Amount}</p>
        </div>
        <p className="hidden group-hover:block bg-[#84da89] text-white font-[500] p-2 rounded-lg text-[0.85rem]">
          Save $50 a year
        </p>
        <div
          className="features flex flex-col gap-[1rem] bg-[#F9FAFB] p-2
"
        >
          <div className="flex flex-row gap-x-2 items-center">
            <img
              src="/images/Subtract.png"
              alt=""
              className="h-[1rem] w-[1rem]"
            />
            <p>2 Users</p>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <img
              src="/images/Subtract.png"
              alt=""
              className="h-[1rem] w-[1rem]"
            />
            <p>2 Files</p>
          </div>
          <div className="flex flex-row gap-x-2 items-center ">
            <img
              src="/images/Subtract.png"
              alt=""
              className="h-[1rem] w-[1rem]"
            />
            <p>Public Share & Components</p>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <img
              src="/images/Subtract.png"
              alt=""
              className="h-[1rem] w-[1rem]"
            />
            <p>Chat Support</p>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <img
              src="/images/Subtract.png"
              alt=""
              className="h-[1rem] w-[1rem]"
            />
            <p>New income apps</p>
          </div>
          <button
            className=" p-2 bg-white text-[#54BD95] rounded-xl group-hover:bg-[#54BD95] group-hover:text-white

"
          >
            {reqbutton}
          </button>
        </div>
      </div>
    </>
  );
};
export default PlansComponent;
