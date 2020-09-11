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
        />)
    }
    </div>
 )
}

export default YourNumbersButtonsRowClicked;