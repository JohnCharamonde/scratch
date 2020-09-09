import React from 'react';
import WinningNumber from './WinningNumber.jsx';

function WinningNumbers(props) {
  return (
    <div style={{
      "display": "flex",
      "position": "absolute",
      "height": "10.1%",
      "width": "26.5%",
      "left": "37.8%",
      "top": "20.9%"
    }}>

      {props.winningNumbers.map((winningNumber, i) => 
        <WinningNumber 
          number={winningNumber.number}
          text={winningNumber.text}
          shape={winningNumber.shape}
          clickCount={winningNumber.clickCount}
          handleWinningNumberClick={props.handleWinningNumberClick}
          i={i}
        />   
      )}
    </div>
  )
}

export default WinningNumbers;