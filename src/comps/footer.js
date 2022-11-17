import React from 'react'

function Footer({coursesOnDisplay}) {
  
  return (
    <div>
      <h1 className='text-6xl text-center underline sm:mb-10 md:mb-0'>Courses</h1>
      <div className="w-screen h-96 md:flex sm:flex-column justify-evenly items-center  ">
        {coursesOnDisplay.map((elements, index) => {
          return (
            <div
              key={index}
              className="bg-gray-0 text-white hover:bg-gray-1 hover:text-black hover:cursor-pointer w-fit h-fit sm:left-1/4 md:left-0 relative rounded-xl border-2 border-black"
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