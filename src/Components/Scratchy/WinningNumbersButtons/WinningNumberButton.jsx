import React from 'react';
import Background from '../../../Images/contours.png'
import humpback from '../../../Images/humpback.png'

function WinningNumberButton(props) {
  const opacity = props.visualStatus === 0 ? '1' : '0';
    return (
    <div style={{"display":"flex",
      "backgroundColor": "transparent",
      "height": "100%",
      "width": "25%",
      "zIndex":"101",
      "fontFamily":"Helvetica",
      "fontWeight":"bolder",
      "alignItems": "flex-end",
      "justifyContent": "center"
    }}
    onClick = {(e) => {props.handleWinningNumberButtonClick(e, props.i)}}
    >
      <img src={humpback} alt="Humpback" style={{"height":"98%", "opacity":opacity}} />
    </div>
  )
}

export default WinningNumberButton;