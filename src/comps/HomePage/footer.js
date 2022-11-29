import React from 'react'

function Footer({coursesOnDisplay}) {
  
  return (
    <div className="">
      <h1 className="text-6xl text-center underline mb-6">Courses</h1>
      <div className="sm:flex sm:flex-col sm:justify-center sm:items-center md:flex-row md:justify-evenly">
        {coursesOnDisplay.map((elements, index) => {
          return (
            <div
              key={index}
              className="bg-gray-0 text-white hover:bg-gray-1 hover:text-black hover:cursor-pointer w-fit h-fit relative rounded-xl border-2 border-black mb-6"
            >
              <img
                src={elements.img}
                alt="img1"
                className="h-60 rounded-md w-60"
              />
              <h4 className="text-center text-xl ">
                {elements.name.slice(0, 20)}
                <br />
                {elements.name.slice(20)}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer