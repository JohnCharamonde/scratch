import React from 'react';
import Background from '../../../Images/contours.png'

function YourNumberNumber(props) {
  let backgroundColor = 'transparent';
  let backgroundImage = "";
  let clipPath = "";
  let number = props.yourNumber.number;
  let text = props.yourNumber.text;
  let color = "transparent"

  let backgroundColorsByWinStatus = {
    uncertain: 'white',
    loss: 'pink',
    win: 'aqua'
  };

  if(props.yourNumber.audioVisualStatus === 1) {
    backgroundColor = backgroundColorsByWinStatus[props.yourNumber.winStatus]
    backgroundImage = "url(" + Background + ")"
    clipPath = "polygon(29% 10%, 29% 35%, 37% 13%, 26% 50%, 33% 40%, 25% 65%, 31% 50%, 26% 70%, 22% 91%, 28% 95%, 41% 96%, 53% 91%, 65% 97%, 76% 67%, 74% 59%, 81% 33%, 74% 11%, 66% 40%, 72% 6%, 63% 8%, 53% 15%, 54% 5%, 46% 13%)"
    color = "black"
  } else if(props.yourNumber.audioVisualStatus === 2){
      backgroundColor = "transparent";
      color = "black"
  }

  return (
    <div style={{
      "backgroundColor": backgroundColor, 
      "backgroundImage": backgroundImage,
      "zIndex":"10",
      "clipPath":clipPath,
      "height":"100%",
      "width":"100%",
      "fontWeight":"bolder"
    }}
    >
      <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "fontSize":"160%", "color":color}}>{number}</div>
      <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "fontSize":"10%", "color":color}}>{text}</div>
    </div> 
  )
}

export default YourNumberNumber;