import React from 'react'

function Footer({coursesOnDisplay}) {
  
  return (
    <div className="w-screen h-96 flex justify-evenly items-center">
    {
      coursesOnDisplay.map((elements,index)=>{
        return(
          <div key={index} className="bg-gray-0 text-white hover:bg-gray-1 hover:text-black hover:cursor-pointer">
            <img src={elements.img} alt="img1" className="h-60 rounded-md" />
            <h4 className="text-center text-xl ">
              {elements.name}
              <br />
              1.0
            </h4>
          </div>
        )
      })
      
    }
    </div>
  );
}

export default Footer