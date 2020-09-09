import React from 'react';
import YourNumbersRow from './YourNumbersRow.jsx';

function YourNumbers(props) {
  return (
    <div style={{
      "position":"absolute",
      "height": "47.8%",
      "width":"26.5%",
      "left":"37.6%",
      "top":"36.5%",
      "backgroundColor":"transparent",
    }}>

    {props.yourNumbers.map((yourNumbersRow, i) => 
        <YourNumbersRow 
          yourNumbersRow={yourNumbersRow}
          i={i}
          handleYourNumberPrizeClick={props.handleYourNumberPrizeClick}
        />   
      )}
    </div>
  )
}

export default YourNumbers;