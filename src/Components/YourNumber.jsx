import React from 'react';
import Background from './contours.png'
import coin from './coin-flip-49.gif';

function YourNumber(props) {
  if(props.yourNumber.clickCount === 0) {
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
        "zIndex":"99"
      }}>
        <div style={{"height":"90%", "width":"90%", "border":".1px solid pink"}}>
          <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"40%", "width":"100%", "fontSize":"160%", "color": "black"}}>{props.yourNumber.number}</div>
          <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"10%", "width":"100%", "fontSize":"10%"}}>{props.yourNumber.text}</div>
          <div style={{"display":"flex", "alignItems": "flex-end", "justifyContent":"center", "height":"70%", "width":"100%"}}><img src={coin} alt="Coin" style={{"height":"120%", "width":"70%"}} /></div>
        </div>
      </div>
    )
    } else if(props.yourNumber.clickCount === 1) {
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
        "zIndex":"99"
      }}>
        <div style={{"height":"90%", "width":"90%", "border":".1px solid pink"}}>
          <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"40%", "width":"100%", "fontSize":"160%", "color": "black"}}>{props.yourNumber.number}</div>
          <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"10%", "width":"100%", "fontSize":"10%"}}>{props.yourNumber.text}</div>
          <div style={{"display":"flex", "alignItems": "flex-end", "justifyContent":"center", "height":"70%", "width":"100%"}}><img src={coin} alt="Coin" style={{"height":"120%", "width":"70%"}} /></div>
        </div>
      </div>
    )
  } else {
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
        "zIndex":"101"
      }}>
        <div style={{"height":"90%", "width":"90%", "border":".1px solid pink"}}>
          <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"40%", "width":"100%", "fontSize":"160%", "color": "black"}}>{props.yourNumber.number}</div>
          <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"10%", "width":"100%", "fontSize":"10%"}}>{props.yourNumber.text}</div>
          <div style={{"display":"flex", "alignItems": "flex-end", "justifyContent":"center", "height":"70%", "width":"100%"}}><img src={coin} alt="Coin" style={{"height":"120%", "width":"70%"}} /></div>
        </div>
      </div>
    )
  }
}

export default YourNumber;