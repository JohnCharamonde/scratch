import React from 'react';
import YourNumbersButtonsRowClicked from './YourNumbersButtonsRowClicked.jsx';

function YourNumbersButtonsClicked(props) {
  return (
    <div>
      <div style={{
        "position":"absolute",
        "height": "54.7%",
        "width":"26.76%",
        "left":"37.46%",
        "top":"33.4%",
        "zIndex":"100",
      }}>

      {props.yourNumbers.map((yourNumbersRow, i) => 
        <YourNumbersButtonsRowClicked
          yourNumbersRow={yourNumbersRow}
          prizeRow={props.prizes[i]}
        />   
      )}
    </div>
  </div>
  )
}

export default YourNumbersButtonsClicked;