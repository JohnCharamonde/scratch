import React from 'react';
import Background from './contours.png'
function WinningNumber(props) {
  // if(props.number !== 7 || props.number !== 9) {
  //   return (
  //     <div style={{"display":"flex", "backgroundColor": "pink", "backgroundImage": "url(" + Background + ")","height": "100%", "width": "25%", "zIndex":"99","fontFamily":"Apercu,Lucida Grande,sans-serif", "fontWeight":"bolder", "alignItems": "center", "justifyContent": "center"}}>
  //   <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent":"center", "height":"90%", "width":"90%", "border":".1px solid lightgray"}}>
  //     <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"30%", "width":"100%", "fontSize":"160%"}}>{props.number}</div>
  //     <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"20%", "width":"100%", "fontSize":"10%"}}>{props.text}</div>
  //   </div>
  // </div>
  // )
  // }
  return (
      <div style={{"display":"flex", "backgroundColor": "aqua", "backgroundImage": "url(" + Background + ")","height": "100%", "width": "25%", "zIndex":"101","fontFamily":"Helvetica", "fontWeight":"bolder", "alignItems": "center", "justifyContent": "center", "white":"black", "clipPath":"polygon(4% 22%, 16% 57%, 10% 47%, 3% 36%, 53% 5%, 5% 57%, 16% 17%, 51% 37%, 76% 35%, 83% 40%, 66% 79%, 40% 74%, 26% 80%, 30% 77%, 35% 15%, 70% 13%, 65% 32%, 16% 88%, 11% 65%)"}}>
      <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent":"center", "height":"90%", "width":"90%", "border":".1px solid pink"}}>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"30%", "width":"100%", "fontSize":"160%"}}>{props.number}</div>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"20%", "width":"100%", "fontSize":"10%"}}>{props.text}</div>
    </div>
  </div>
  )
}

export default WinningNumber