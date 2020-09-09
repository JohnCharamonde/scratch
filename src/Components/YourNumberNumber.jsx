import React from 'react';

function YourNumberNumber(props) {
  return (
    <div>
      <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"30%", "width":"100%", "fontSize":"160%", "color": "black"}}>{props.number}</div>
      <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"10%", "width":"100%", "fontSize":"10%"}}>{props.text}</div>
    </div> 
  )
}

export default YourNumberNumber;