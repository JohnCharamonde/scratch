import React from 'react';
import Background from './contours.png'

function YourNumber(props) {
  return (
      <div style={{
        "display":"flex",
        "backgroundColor":"aqua",
        "backgroundImage": "url(" + Background + ")",
        "color":"black",
        "height": "100%",
        "width": "25%",
        "fontFamily":"Helvetica",
        "fontWeight":"bolder",
        "alignItems": "center",
        "justifyContent": "center",
        "zIndex":"150"
      }}>
        <div style={{"height":"90%", "width":"90%", "border":".1px solid pink"}}>
          <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"40%", "width":"100%", "fontSize":"160%", "color": "black"}}>{props.yourNumber.number}</div>
          <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"10%", "width":"100%", "fontSize":"10%"}}>{props.yourNumber.text}</div>
          <div style={{"display":"flex", "alignItems": "flex-end", "justifyContent":"center", "height":"40%", "width":"100%", "fontSize":"100%"}}>0.25 ETH</div>
          <div style={{"display":"flex", "alignItems": "flex-end", "justifyContent":"center", "height":"10%", "width":"100%", "fontSize":"30%"}}>$100.00</div>
        </div>
      </div>
  )
}

export default YourNumber;