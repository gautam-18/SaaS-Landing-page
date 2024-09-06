const Support = () => {
  return (
    <>
      <div className="--spread flex flex-row w-[90%] mx-auto">
        <div className="--partner flex flex-col w-3/5 h-[70vh] p-8 pl-20 gap-10 justify-center">
          <p className="font-[600] text-4xl">
            How we support our <br />
            pratner all over the world
          </p>
          <p
            className="text-[#A6A6A6] font-[500] text-[0.8rem]
"
          >
            SaaS become a common delivery model for many business application,
            including <br />
            office software, messaging software, payroll processing software,
            DBMS software, <br />
            management software
          </p>
          <div className="--rating flex flex-row justify-start gap-[4rem]">
            <div className="--data flex flex-col">
              <img src="/images/Group 152.png" alt="" />
              <p>
                <b>4.9</b>/5 rating
              </p>
              <p className="text-[#A6A6A6]">databricks</p>
            </div>
            <div className="--chain flex flex-col">
              <img src="/images/rating.png" alt="" />
              <p>
                <b>4.8</b>/5 rating
              </p>
              <p className="text-[#A6A6A6]">chainalysis</p>
            </div>
          </div>
        </div>
        <div className="--work flex flex-col w-3/5 h-[70vh] p-8  gap-6 justify-center">
          <div className="--Publishing">
            <div className="flex flex-row gap-x-[2rem]">
              <img
                src="/images/Vector.png"
                alt=""
                className="h-[2rem] w-[2rem]"
              />
              <div className="flex flex-col">
                <h1 className="font-[700] text-2xl">Publishing</h1>
                <p className="text-[#A6A6A6]">
                  Plan, collaborate, and publishing your content <br />
                  that drives meaningful engagaement and growth <br />
                  for your band
                </p>
              </div>
            </div>
          </div>
          <div className="--Analytics flex flex-row gap-x-[2rem]">
            <img
              src="/images/pie-chart 1.png"
              alt=""
              className="h-[2rem] w-[2rem]"
            />
            <div className="flex flex-col">
              <h1 className="font-[700]  text-2xl">Analytics</h1>
              <p className="text-[#A6A6A6]">
                Analyze your performance and create goegeous report
              </p>
            </div>
          </div>
          <div className="--Engagement flex flex-row gap-x-[2rem]">
            <img
              src="/images/command 1.png"
              alt=""
              className="h-[2rem] w-[2rem]"
            />
            <div className="flex flex-col">
              <h1 className="font-[700]  text-2xl">Enagagement</h1>
              <p className="text-[#A6A6A6]">
                Quickly navigate and engage with your audience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Support;
