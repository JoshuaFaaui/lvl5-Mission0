import React from 'react'

function Displayit({ searchimages, searchvideos }) {
  return (
    <>
      {
        searchimages.length&&searchvideos.length!==0?(
        <div id='displayImagesFoundation'>
          {searchvideos.length !== 0 ? (
            searchvideos.map((elements, index) => {
              return (
                <div key={index}>
                  <img src={elements.thumbnailUrl} alt="images" className='w-full' />
                </div>
              );
            })
          ) : (
            <></>
          )}
          {searchimages.length !== 0 ? (
            searchimages.map((elements, index) => {
              return (
                <div key={index} >
                  <img src={elements.thumbnailUrl} alt="images" className='w-full' />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
        ):<></>
      }
    </>
  );
}

export default Displayit