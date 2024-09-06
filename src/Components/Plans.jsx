import PlansComponent from "./PlanCompo";
const Plans = () => {
  return (
    <>
      <div className="PlanContainer w-[90%] flex flex-col mx-auto items-between gap-[2rem]">
        <div className="Bill flex flex-col items-center gap-[1rem]">
          <p className="font-[700] text-3xl text-center">
            Choose Plan <br />
            That&apos;s Right For You
          </p>
          <p
            className="font-[700] text-[#A6A6A6] text-[0.8rem]
"
          >
            Choose plan that works best for you,feel free to contact us
          </p>
          <div className="containerbutton flex flex-row bg-white p-2 gap-[2rem]">
            <button className="p-[0.5rem] pl-5 pr-5 text-black">
              Bill Monthly
            </button>
            <button
              className="p-[0.5rem] pl-5 pr-5 bg-[#54BD95] text-white rounded-md
"
            >
              Bill Yearly
            </button>
          </div>
        </div>

        <div className="AvailablePlans flex flex-row justify-around">
          <PlansComponent
            Type="Free"
            Desc={
              <p>
                Have a go and test your <br />
                superPowers
              </p>
            }
            Amount={0}
            reqbutton="Signup for free"
          />
          <PlansComponent
            Type="Pro"
            Desc={
              <p>
                Experiment the power <br />
                of infinite possiblilities
              </p>
            }
            Amount={8}
            reqbutton="Got to pro"
          />
          <PlansComponent
            Type="Business"
            Desc={
              <p>
                Unveil new superpowers <br />
                join the Design Leaque
              </p>
            }
            Amount={16}
            reqbutton="Goto Business"
          />
        </div>
      </div>
    </>
  );
};
export default Plans;
