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
        yourNumber={props.yourNumber}
        handleYourNumberNumberButtonClick={props.handleYourNumberNumberButtonClick}
        i={props.i}
        j={props.j}
      />
      <YourNumberPrizeButton
        prize={props.prize}
        handleYourNumberPrizeButtonClick={props.handleYourNumberPrizeButtonClick}
        i={props.i}
        j={props.j}
      />
    </div>
  )
}

export default YourNumberButtons;