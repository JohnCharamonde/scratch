import React from 'react';
import orca from '../../../Images/orca.png';
// import Background from '../../../Images/contours.png'

function YourNumberNumberButton(props) {
  const opacity = props.clickCount >= 1 ? "0" : "1";
  return (
    <div style={{
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"flex-end",
    "height":"50%",
    "width":"100%",
    }}
    onClick = {(e) => {props.handleYourNumberNumberButtonClick(e, props.i, props.j)}}
    >
      <img src={orca} alt="Orca" style={{"height":"100%", "opacity":opacity}} />
    </div>
  )
}

export default YourNumberNumberButton;