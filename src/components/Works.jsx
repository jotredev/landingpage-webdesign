import React from "react";

const Works = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
          We create world-class digital products
        </h1>
        <p className="text-xl text-gray-500">
          By information about design the world to the best instructors, heatc
          helping By information
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="work1.png"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          <p className="text-gray-500">App Design - June 20, 2022</p>
          <h3 className="text-2xl font-bold">App Redesign</h3>
          <p className="text-gray-500">
            By information about design the world to the best instructors, heatc
            helping By information about design the world to the best
            instructors, heatc helping
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="work2.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              Redesign channel website landng page
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work3.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              New Locator App For a New Company
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work4.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              Rental Rooms Web App Platform
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work5.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              Calendar App for Big SASS Company
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
