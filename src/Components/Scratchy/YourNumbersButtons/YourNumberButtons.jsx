import React from 'react';
import YourNumberNumberButton from './YourNumberNumberButton.jsx'
import YourNumberPrizeButton from './YourNumberPrizeButton.jsx'

function YourNumberButtons(props) { 
  return (
    <div style={{
      "color":"black",
      "height": "100%",
      "width": "25%",
      "fontFamily":"Helvetica",
      "fontWeight":"bolder",
      "alignItems": "center",
      "justifyContent": "center",
    }}>
      <YourNumberNumberButton 
        clickCount={props.yourNumber.numberClickCount}
        handleYourNumberNumberButtonClick={props.handleYourNumberNumberButtonClick}
        i={props.i}
        j={props.j}
      />
      <YourNumberPrizeButton
        clickCount={props.yourNumber.prizeClickCount}
        handleYourNumberPrizeButtonClick={props.handleYourNumberPrizeButtonClick}
        i={props.i}
        j={props.j}
      />
    </div>
  )
}

export default YourNumberButtons;