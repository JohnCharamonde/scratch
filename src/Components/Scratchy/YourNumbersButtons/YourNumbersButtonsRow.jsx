import React from 'react';
import YourNumberButtons from './YourNumberButtons.jsx'

function YourNumbersButtonsRow(props) {
  return (
    <div style={{
      "display":"flex",
      "height": "20%",
      "width":"100%",
    }}>
    {
    props.yourNumbersRow.map((yourNumber, j) => 
        <YourNumberButtons
          yourNumber={yourNumber}
          prize={props.prizesRow[j]}
          i={props.i}
          j={j}
          handleYourNumberPrizeButtonClick={props.handleYourNumberPrizeButtonClick}
          handleYourNumberNumberButtonClick={props.handleYourNumberNumberButtonClick}
        />)
    }
    </div>
 )
}

export default YourNumbersButtonsRow;