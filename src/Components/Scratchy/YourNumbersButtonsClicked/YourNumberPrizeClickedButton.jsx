import React from 'react';
import prize from '../../../Images/prize.png';

function YourNumberPrizeButtonClicked(props) {
  const opacity = props.prize.audioVisualStatus === 1 ? "1" : "0";
  return (
    <div style={{
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"flex-start",
    "height":"50%",
    "width":"100%",
    }}
    >
      <img src={prize} alt="Prize" style={{"height":"70%", "opacity":opacity}} />
    </div>
  )
}

export default YourNumberPrizeButtonClicked;