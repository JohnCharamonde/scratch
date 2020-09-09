import React from 'react';
import coin from './coin-flip-49.gif';
import Background from './contours.png'

function YourNumberPrize(props) {
    let backgroundColor = 'transparent';
    let backgroundImage = "";
    let clipPath = "";
    let opacity = "0"
  
    if(props.clickCount === 1) {
      backgroundColor = 'aqua'
      backgroundImage = "url(" + Background + ")"
      clipPath = "polygon(11% 81%, 17% 83%, 14% 89%, 19% 90%, 22% 86%, 25% 87%, 24% 94%, 29% 94%, 29% 94%, 41% 91%, 50% 93%, 56% 87%, 77% 65%, 53% 93%, 66% 96%, 69% 86%, 74% 86%, 81% 72%, 91% 49%, 98% 24%, 89% 45%, 98% 17%, 85% 38%, 98% 7%, 87% 9%, 86% 3%, 78% 9%, 69% 6%, 58% 12%, 53% 26%, 54% 10%, 42% 13%, 29% 32%, 21% 62%, 26% 38%, 16% 73%, 18% 52%)"
      opacity = "1"
    } else if(props.clickCount > 1 && props.numberClickCount < 2) {
      backgroundColor = 'aqua'
      backgroundImage = "url(" + Background + ")"
      clipPath = ''
      opacity = "1"
    } else if (props.clickCount > 1 && props.numberClickCount >= 2){
      opacity = "1"
    }


  return (
    <div style={{
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",
    "height":"50%",
    "width":"100%",
    "zIndex":"99",
    "backgroundColor": backgroundColor,
    "backgroundImage": backgroundImage,
    "clipPath": clipPath
    }}
    onClick={(e) => {props.handleYourNumberPrizeClick(e, props.i, props.j)}}
    >
      <img src={coin} alt="Coin" style={{"height":"160%", "width":"60%", "opacity":opacity}} />
    </div>
  )
}

export default YourNumberPrize;