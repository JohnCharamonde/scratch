import React from 'react';
import prize from '../../../Images/prize.png';
// import Background from '../../../Images/contours.png'

function YourNumberPrizeButton(props) {
  const opacity = props.status[1] >= 1 ? "0" : "1";
  return (
    <div style={{
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"flex-start",
    "height":"50%",
    "width":"100%",
    }}
    onClick = {(e) => {props.handleYourNumberPrizeButtonClick(e, props.i, props.j)}}
    >
      <img src={prize} alt="Prize" style={{"height":"70%", "opacity":opacity}} />
    </div>
  )
}

export default YourNumberPrizeButton;