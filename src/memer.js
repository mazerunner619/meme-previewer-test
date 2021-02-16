import React from 'react'
import './App.css';


function Memer(props) {
  return (
      <div>
          <hr/>
          
      <div className = "meme">
          <img className = "memepic"  src = {props.imageURL} />
            <div className="topText">
                <p>{props.toptext}</p>
            </div>
            <div className="bottomText">
                <p>{props.bottomtext}</p>
            </div>
            </div>
      </div>
  )
}

export default Memer;
