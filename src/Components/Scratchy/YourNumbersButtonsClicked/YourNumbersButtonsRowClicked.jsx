import React from 'react';
import YourNumberButtonsClicked from './YourNumberButtonsClicked.jsx'

function YourNumbersButtonsRowClicked(props) {
  return (
    <div style={{
      "display":"flex",
      "height": "20%",
      "width":"100%",
    }}>
    {
    props.yourNumbersRow.map((yourNumber, j) => 
        <YourNumberButtonsClicked
          yourNumber={yourNumber}
          prize={props.prizeRow[j]}
        />)
    }
    </div>
 )
}

export default YourNumbersButtonsRowClicked;