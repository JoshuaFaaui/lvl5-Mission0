import React from 'react'

function Nav2({setSearchType}) {
    function All() {
        setSearchType('All')
    }
    function Images() {
        setSearchType("Images")
    }
  return (
    <div className="w-screen h-10 flex justify-center">
      <div className="w-1/2 h-full flex justify-evenly items-center" id='nav2Foundation2'>
        <button className="border hover:cursor-pointer" id='searchTypeB1' onClick={All}>All</button>
        <button className="border hover:cursor-pointer" id='searchTypeB2' onClick={Images}>Images</button>
      </div>
    </div>
  );
}

export default Nav2