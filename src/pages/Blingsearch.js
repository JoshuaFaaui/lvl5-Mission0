import React, { useState } from 'react'
import Navbar from '../comps/Navbar'
import Searchit from '../comps/Bingsearch/Searchit';
import Displayit from '../comps/Bingsearch/Displayit';
import Nav2 from '../comps/Bingsearch/Nav2';
import BlingStyling from '../stylings/BlingSearch/BlingStyling.css'
import SearchAll from '../comps/Bingsearch/SearchAll';
import DisplayAll from '../comps/Bingsearch/DisplayAll';
function Bingsearch() {
  const [searchimages, setSearchimages] = useState([]);
  const [searchvideos, setSearchvideos] = useState([]);

  const [searchall, setSearchall] = useState([]);

  const [searchType,setSearchType] = useState('All')
  

  return (
    <div className="w-screen">
      <Navbar />
      <Nav2 setSearchType={setSearchType} />
      <div className="w-screen flex flex-col justify-center items-center mt-10">
        {
          searchType==='Images'?(
          <Searchit
            setSearchimages={setSearchimages}
            setSearchvideos={setSearchvideos}
          />
          ):<SearchAll setSearchall={setSearchall}/>
        }
        {
          searchType==='Images'?
          (<Displayit searchimages={searchimages} searchvideos={searchvideos} />)
          :<DisplayAll searchall={searchall}/>
        }
      </div>
    </div>
  );
}

export default Bingsearch