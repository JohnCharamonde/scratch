import React from 'react';
import Background from '../../../Images/contours.png'
import YourNumberNumber from './YourNumberNumber.jsx'
import YourNumberPrize from './YourNumberPrize.jsx'

function YourNumber(props) { 
  let backgroundColor = "transparent";
  let backgroundImage = "";
  let border = "";

  let backgroundColorsByWinStatus = {
    uncertain: 'white',
    loss: 'pink',
    win: 'aqua'
  };

  if(props.yourNumber.audioVisualStatus === 2 && props.prize.audioVisualStatus === 2) {
    backgroundColor = backgroundColorsByWinStatus[props.yourNumber.winStatus]
    backgroundImage = `url(${Background})`;
    border = ".1px solid pink";
  }
  return (
    <div style={{
      "display":"flex",
      "backgroundColor": backgroundColor,
      "backgroundImage": backgroundImage,
      "color":"black",
      "height": "100%",
      "width": "25%",
      "fontFamily":"Helvetica",
      "fontWeight":"bolder",
      "alignItems": "center",
      "justifyContent": "center",
    }}>
      <div style={{"display":"flex", "flexDirection":"column","height":"90%", "width":"90%", "zIndex":"105", "border": border}}>
        <div>
          <YourNumberNumber 
            yourNumber={props.yourNumber}
            prize={props.prize}
          />
        </div>
        <YourNumberPrize
          yourNumber={props.yourNumber}
          prize={props.prize}
        />
      </div>
    </div>
  )
}

export default YourNumber;