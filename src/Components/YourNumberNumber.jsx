import React from 'react';
import Background from './contours.png'

function YourNumberNumber(props) {
  let backgroundColor = 'transparent';
  let backgroundImage = "";
  let clipPath = "";
  let number = '0';
  let text = 'ZERO';
  let color = "transparent"

  if(props.clickCount === 1) {
    backgroundColor = 'aqua'
    backgroundImage = "url(" + Background + ")"
    clipPath = "polygon(11% 81%, 17% 83%, 14% 89%, 19% 90%, 22% 86%, 25% 87%, 24% 94%, 29% 94%, 29% 94%, 41% 91%, 50% 93%, 56% 87%, 77% 65%, 53% 93%, 66% 96%, 69% 86%, 74% 86%, 81% 72%, 91% 49%, 98% 24%, 89% 45%, 98% 17%, 85% 38%, 98% 7%, 87% 9%, 86% 3%, 78% 9%, 69% 6%, 58% 12%, 53% 26%, 54% 10%, 42% 13%, 29% 32%, 21% 62%, 26% 38%, 16% 73%, 18% 52%)"
    color = "black"
    number = props.number
    text = props.text;
  } else if(props.clickCount > 1 && props.prizeClickCount < 2) {
    backgroundColor = 'aqua'
    backgroundImage = "url(" + Background + ")"
    clipPath = ''
    color = "black"
    number = props.number
    text = props.text;
  } else if(props.clickCount > 1 && props.prizeClickCount >= 2){
      backgroundColor = "transparent";
      number = props.number
      text = props.text;
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
    onClick={(e) => {props.handleYourNumberNumberClick(e, props.i, props.j)}}
    >
      <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "fontSize":"160%", "color":color}}>{number}</div>
      <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "fontSize":"10%", "color":color}}>{text}</div>
    </div> 
  )
}

export default YourNumberNumber;