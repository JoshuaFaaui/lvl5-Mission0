import React from 'react'

function DisplayAll({searchall}) {
  return (
    <>
        {
            searchall.length!==0?(
            <div id='displayImagesFoundation'>
                {
                    searchall.length !== 0 ? (
                        searchall.map((elements, index) => {
                        return (
                          <div key={index} className="w-full">
                            <a target="_blank" rel="noopener noreferrer" href={elements.url} id='searchallName' className="hover:underline">{elements.name}</a>
                            <h4 target="_blank" rel="noopener noreferrer" id='searchallUrl'>{elements.url} </h4>
                            <p target="_blank" rel="noopener noreferrer" id='searchallSnippet'>{elements.snippet}</p>
                          </div>
                        );
                        })
                    ):<></>
                    
                }
            </div>
            )
            :<></>
        }
    </>
  )
}

export default DisplayAll