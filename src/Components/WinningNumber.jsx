import React from 'react';
import Background from './contours.png'
function WinningNumber(props) {
  if(props.number === 7) {
    return (
      <div style={{"display":"flex", "backgroundColor": "pink", "backgroundImage": "url(" + Background + ")","height": "100%", "width": "25%", "zIndex":"99","fontFamily":"Apercu,Lucida Grande,sans-serif", "fontWeight":"bolder", "alignItems": "center", "justifyContent": "center"}}>
    <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent":"center", "height":"90%", "width":"90%", "border":".1px solid lightgray"}}>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"30%", "width":"100%", "fontSize":"160%"}}>{props.number}</div>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"20%", "width":"100%", "fontSize":"10%"}}>{props.text}</div>
    </div>
  </div>
  )
  }
  return (
      <div style={{"display":"flex", "backgroundColor": "linen", "backgroundImage": "url(" + Background + ")","height": "100%", "width": "25%", "zIndex":"101","fontFamily":"Apercu,Lucida Grande,sans-serif", "fontWeight":"bolder", "alignItems": "center", "justifyContent": "center"}}>
    <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent":"center", "height":"90%", "width":"90%", "border":".1px solid lightgray"}}>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"30%", "width":"100%", "fontSize":"160%"}}>{props.number}</div>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"20%", "width":"100%", "fontSize":"10%"}}>{props.text}</div>
    </div>
  </div>
  )
}

export default WinningNumber