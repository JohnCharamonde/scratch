import React from 'react';
import humpback from '../../../Images/humpback.png'

function WinningNumberButtonClicked(props) {
  const opacity = props.visualStatus === 1 ? '1' : '0';
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
    >
      <img src={humpback} alt="Humpback" style={{"height":"98%", "opacity":opacity}} />
    </div>
  )
}

export default WinningNumberButtonClicked;