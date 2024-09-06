// import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="--container flex flex-row h-[10vh] w-[90%] mx-auto items-center p-4 justify-between">
        <div className=" w-[30%] flex flex-row items-center ">
          <h1
            className="font-[600]  leading-[40px] text-3xl text-[#54BD95] ;
]"
          >
            Biccas
          </h1>
        </div>
        <div className=" w-[40%] flex items-center justify-around">
          <button>Home</button>
          <button>Product</button>
          <button>FAQ</button>
          <button>Blog</button>
          <button>About Us</button>
        </div>
        <div className="w-[30%] flex items-center justify-end gap-2">
          <button>Login</button>
          <button className="bg-[#52BD94] text-white p-2 rounded-[10px]">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
