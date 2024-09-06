const Company = () => {
  return (
    <>
      <div className="contentFooter w-[90%] flex flex-col justify-center items-center mx-auto m">
        <p className="font-[700] text-center text-3xl mt-[5%] mb-[3%]">
          More than 25,000 teams use Collabs
        </p>
        <div className="flex flex-row w-[90%] justify-around">
          <div className="flex flex-row w-[16.2%] items-center">
            <img
              src="/images/Group 140.png"
              alt=""
              className="h-[1.3rem] w-[1.3rem] mr-[0.5rem]"
            />
            <p>Unsplash</p>
          </div>
          <div className="flex flex-row w-[16.2%] items-center">
            <img
              src="/images/N.png"
              alt=""
              className="h-[1rem] w-[1.3rem] mr-[0.5rem] "
            />
            <p>Notion</p>
          </div>
          <div className="flex flex-row w-[16.2%] items-center">
            <img
              src="/images/Group 143.png"
              alt=""
              className="h-[1.3rem] w-[1.3rem] mr-[0.5rem]"
            />
            <p>INTERCOM</p>
          </div>
          <div className="flex flex-row w-[16.2%] items-center">
            <img
              src="/images/Union.png"
              alt=""
              className="h-[1.3rem] w-[1.3rem] mr-[0.5rem]"
            />
            <p>descript</p>
          </div>
          <div className="flex flex-row w-[16.2%] items-center">
            <img
              src="/images/Group 320.png"
              alt=""
              className="h-[2rem] w-[2rem] mr-[0.5rem] "
            />
            <p>grammarly</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Company;
