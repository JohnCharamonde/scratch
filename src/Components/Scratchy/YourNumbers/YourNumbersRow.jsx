import React from 'react';
import YourNumber from './YourNumber.jsx'

function YourNumbersRow(props) {
  return (
    <div style={{
      "display":"flex",
      "height": "20%",
      "width":"100%",
    }}>
    {
    props.yourNumbersRow.map((yourNumber, j) => 
        <YourNumber 
          yourNumber={yourNumber}
          i={props.i}
          j={j}
          handleYourNumberPrizeClick={props.handleYourNumberPrizeClick}
          handleYourNumberNumberClick={props.handleYourNumberNumberClick}
        />)
    }
    </div>
 )
}

export default YourNumbersRow;