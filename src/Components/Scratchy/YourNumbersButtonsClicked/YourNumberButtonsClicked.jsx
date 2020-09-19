import React from 'react';
import YourNumberNumberButtonClicked from './YourNumberNumberButtonClicked.jsx'
import YourNumberPrizeButtonClicked from './YourNumberPrizeClickedButton.jsx'

function YourNumberButtonsClicked(props) { 
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
      <YourNumberNumberButtonClicked 
        yourNumber={props.yourNumber}
      />
      <YourNumberPrizeButtonClicked
        prize={props.prize}
      />
    </div>
  )
}

export default YourNumberButtonsClicked;