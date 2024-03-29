import React from 'react';
import orca from '../../../Images/orca.png';

function YourNumberNumberButtonClicked(props) {
  const opacity = props.yourNumber.audioVisualStatus === 1 ? "1" : "0";
  return (
    <div style={{
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"flex-end",
    "height":"50%",
    "width":"100%",
    }}
    >
      <img src={orca} alt="Orca" style={{"height":"100%", "opacity":opacity}} />
    </div>
  )
}

export default YourNumberNumberButtonClicked;