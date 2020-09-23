import React from 'react';
import Background from '../../../Images/contours.png'

function PrizeWinningNumber(props) {

  return (
    <div style={{"display":"flex", "backgroundColor":"aqua", "backgroundImage": "url(" + Background + ")","height": "85%", "width": "13%", "zIndex":"102","fontFamily":"Helvetica", "fontWeight":"bolder", "alignItems": "center", "justifyContent": "center", "color":"black"}}>
      <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent":"center", "height":"90%", "width":"90%", "border":".1px solid pink"}}>
  <div style={{"display":"flex", "alignItems": "flex-end", "justifyContent":"center", "height":"65%", "width":"100%", "fontSize":"120%"}}>{props.number}</div>
  <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"35%", "width":"100%", "fontSize":"20%"}}>{props.text}</div>
      </div>
    </div>
  )
}

export default PrizeWinningNumber;