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
        status={props.yourNumber.status}
      />
      <YourNumberPrizeButtonClicked
        status={props.yourNumber.status}
      />
    </div>
  )
}

export default YourNumberButtonsClicked;