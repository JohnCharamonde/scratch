import React from 'react';
import YourNumbersButtonsRow from './YourNumbersButtonsRow.jsx';

function YourNumbersButtons(props) {
  return (
    <div>
      <div style={{
        "position":"absolute",
        "height": "54.7%",
        "width":"26.76%",
        "left":"36.6%",
        "top":"34.2%",
        "zIndex":"200",
      }}>

      {props.yourNumbers.map((yourNumbersRow, i) => 
        <YourNumbersButtonsRow 
          yourNumbersRow={yourNumbersRow}
          prizesRow={props.prizes[i]}
          i={i}
          handleYourNumberPrizeButtonClick={props.handleYourNumberPrizeButtonClick}
          handleYourNumberNumberButtonClick={props.handleYourNumberNumberButtonClick}
        />   
      )}
    </div>
  </div>
  )
}

export default YourNumbersButtons;