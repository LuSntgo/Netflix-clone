import React from 'react';
import "./Banner.css";


function Banner() {

    function truncate(string, number){
        return string?.length > number ? string.substr(0, number - 1) + ' ...' : string
    }

  return (
    <header 
    className="banner" 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1280px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
        }}
        >
        <div className="banner_contents">
            <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className="banner_description">{truncate(`test description test description 
            test description test description 
            test description test description 
            test description test description 
            test description test description 
            test description test description 
            test description `, 150
        )}
        </h1>
        </div> 
        <div className="banner--fadeBottom"/>
        </header>
  )
}

export default Banner