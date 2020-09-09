import React from 'react';
import Background from './contours.png'
import YourNumberNumber from './YourNumberNumber.jsx'
import YourNumberPrize from './YourNumberPrize.jsx'

function YourNumber(props) { 
  return (
    <div style={{
      "display":"flex",
      "backgroundColor":"transparent",
      "backgroundImage": "url(" + Background + ")",
      "color":"black",
      "height": "100%",
      "width": "25%",
      "fontFamily":"Helvetica",
      "fontWeight":"bolder",
      "alignItems": "center",
      "justifyContent": "center",
      "zIndex":"101",
      "clipPath":"inset(50% 0 0 0)"
    }}>
      <div style={{"display":"flex", "flexDirection":"column","height":"90%", "width":"90%", "border":".1px solid pink"}}>
        <div>
          <YourNumberNumber 
            number={props.yourNumber.number}
            text={props.yourNumber.text}
          />
        </div>
        <YourNumberPrize />
      </div>
    </div>
  )
}

export default YourNumber;