import React from 'react';
import coin from '../../../Images/coin-flip-49.gif';
import Background from '../../../Images/contours.png'

function YourNumberPrize(props) {
    let backgroundColor = 'transparent';
    let backgroundImage = "";
    let clipPath = "";
    let opacity = "0"
  
    let backgroundColorsByGameStatus = {
      uncertain: 'white',
      loss: 'pink',
      win: 'aqua'
    };

    if(props.prize.audioVisualStatus === 1) {
      backgroundColor = backgroundColorsByGameStatus[props.prize.winStatus]
      backgroundImage = "url(" + Background + ")"
      clipPath = "polygon(29% 10%, 29% 35%, 37% 13%, 26% 50%, 33% 40%, 25% 65%, 31% 50%, 26% 70%, 22% 91%, 28% 95%, 41% 96%, 53% 91%, 65% 97%, 76% 67%, 74% 59%, 81% 33%, 74% 11%, 66% 40%, 72% 6%, 63% 8%, 53% 15%, 54% 5%, 46% 13%)"
      opacity = "1"
    } else if(props.prize.audioVisualStatus > 1 && props.yourNumber.audioVisualStatus[0] < 2) {
      backgroundColor = backgroundColorsByGameStatus[props.yourNumber.winStatus]
      backgroundImage = "url(" + Background + ")"
      clipPath = ''
      opacity = "1"
    } else if (props.prize.audioVisualStatus > 1 && props.yourNumber.audioVisualStatus >= 2){
      opacity = "1"
    }


  return (
    <div style={{
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",
    "height":"50%",
    "width":"100%",
    "backgroundColor": backgroundColor,
    "backgroundImage": backgroundImage,
    "clipPath": clipPath
    }}
    >
      <img src={coin} alt="Coin" style={{"height":"160%", "width":"60%", "opacity":opacity}} />
    </div>
  )
}

export default YourNumberPrize;