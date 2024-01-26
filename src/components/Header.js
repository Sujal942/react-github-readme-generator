import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex text-center flex-col items-center  bg-slate-700 mt-8 mr-28 ml-28 rounded-xl py-8 space-y-3 text-pink-100">
        <h2 className="text-3xl ">Github Profile Readme Generator</h2>
        <h1 className="text-6xl font-normal text-blue-400">Hash/Hub</h1>
        <p className=" w-[75%]">
          This is Github Profile Readme Generator, Made using React. You can
          fill the input field as you want, you can select add-on feature you
          want to see in your profile. The Readme final Code is below , you just
          have to copy and paste to your readme file. If you like the project
          Kindly Star the Project
        </p>
      </div>
    </>
  );
};

export default Header;
