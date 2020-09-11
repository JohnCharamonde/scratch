import React from 'react';
import YourNumbersRow from './YourNumbersRow.jsx';

function YourNumbers(props) {
  return (
    <div>
    <div style={{
      "position":"absolute",
      "height": "54.7%",
      "width":"26.76%",
      "left":"37.46%",
      "top":"33.4%",
      "backgroundColor":"transparent",
    }}>

    {props.yourNumbers.map((yourNumbersRow, i) => 
        <YourNumbersRow 
          yourNumbersRow={yourNumbersRow}
          i={i}
          handleYourNumberPrizeClick={props.handleYourNumberPrizeClick}
          handleYourNumberNumberClick={props.handleYourNumberNumberClick}
        />   
      )}
    </div>
    </div>
  )
}

export default YourNumbers;