import React from 'react';
import WinningNumber from './WinningNumber.jsx';

function WinningNumbers(props) {
  return (
    <div style={{
      "display": "flex",
      "position": "absolute",
      "height": "11.6%",
      "width": "26.75%",
      "left": "37.7%",
      "top": "15.5%",
    }}>

      {props.winningNumbers.map((winningNumber, i) => 
        <WinningNumber 
          winningNumber={winningNumber}
        />   
      )}
    </div>
  )
}

export default WinningNumbers;