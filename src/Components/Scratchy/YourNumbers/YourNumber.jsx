import React from 'react';
import Background from '../../../Images/contours.png'
import YourNumberNumber from './YourNumberNumber.jsx'
import YourNumberPrize from './YourNumberPrize.jsx'

function YourNumber(props) { 
  let backgroundColor = "transparent";
  let backgroundImage = "";
  let border = "";

  if(props.yourNumber.numberClickCount > 1 && props.yourNumber.prizeClickCount > 1) {
    backgroundColor = "aqua";
    backgroundImage = "url(" + Background + ")";
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
            clickCount={props.yourNumber.numberClickCount}
            prizeClickCount={props.yourNumber.prizeClickCount}
            handleYourNumberNumberClick={props.handleYourNumberNumberClick}
            i={props.i}
            j={props.j}
          />
        </div>
        <YourNumberPrize 
          clickCount={props.yourNumber.prizeClickCount}
          numberClickCount={props.yourNumber.numberClickCount}
          handleYourNumberPrizeClick={props.handleYourNumberPrizeClick}
          i={props.i}
          j={props.j}
        />
      </div>
    </div>
  )
}

export default YourNumber;