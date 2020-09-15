import React from 'react';
import Background from '../../../Images/contours.png'
import YourNumberNumber from './YourNumberNumber.jsx'
import YourNumberPrize from './YourNumberPrize.jsx'

function YourNumber(props) { 
  let backgroundColor = "transparent";
  let backgroundImage = "";
  let border = "";

  let backgroundColorsByGameStatus = {
    uncertain: 'linen',
    loss: 'pink',
    win: 'aqua'
  };

  if(props.yourNumber.status[0] === 2 && props.yourNumber.status[1] === 2) {
    backgroundColor = backgroundColorsByGameStatus[props.yourNumber.status[2]]
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
            number={props.yourNumber.number}
            text={props.yourNumber.text}
            status={props.yourNumber.status}
          />
        </div>
        <YourNumberPrize 
          status={props.yourNumber.status}
        />
      </div>
    </div>
  )
}

export default YourNumber;