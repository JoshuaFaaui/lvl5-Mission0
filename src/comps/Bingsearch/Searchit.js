import React, { useState } from 'react'

function Searchit({setSearchimages,setSearchvideos}) {
    const SUBSCRIPTION_KEY = "ff512ab917c04967a233008f1bcaca97";

    const [userinput,setUserinput] = useState('')

    function Tester() {
      const options = {
        method: "GET",
        headers: { "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY },
      };
      fetch(`https://api.bing.microsoft.com/v7.0/search?q=${userinput}`, options)
        .then((tojson) => tojson.json())
        .then((self) => {
          self.videos === undefined
            ? console.log("undefined")
            : setSearchvideos(self.videos.value);
          self.images === undefined
            ? console.log("undefined")
            : setSearchimages(self.images.value);

          console.log(self);
        });
    }
    function HandleUsersInput(self) {
        setSearchimages([])
        setSearchvideos([])
        setUserinput(self.target.value)
    }
  return (
    <div id="searchFoundation">
      <input
        className="h-12 w-96 pl-10"
        placeholder="Search for course..."
        onChange={HandleUsersInput}
        id="inputBox"
      />
      <button
        className="p-3 pl-6 pr-6 bg-black text-white"
        id="searchButt"
        onClick={Tester}
      >
        SEARCH
      </button>
    </div>
  );
}

export default Searchit