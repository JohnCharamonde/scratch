import React from 'react';
import orca from '../../../Images/orca.png';
// import Background from '../../../Images/contours.png'

function YourNumberPrizeButton(props) {
  const opacity = props.clickCount >= 1 ? "0" : "1";
  return (
    <div style={{
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",
    "height":"50%",
    "width":"100%",
    }}
    onClick = {(e) => {props.handleYourNumberPrizeButtonClick(e, props.i, props.j)}}
    >
      <img src={orca} alt="Orca" style={{"height":"100%", "opacity":opacity}} />
    </div>
  )
}

export default YourNumberPrizeButton;