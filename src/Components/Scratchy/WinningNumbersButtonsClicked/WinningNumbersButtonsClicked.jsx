import React from 'react';
import WinningNumberButton from './WinningNumberButtonClicked.jsx';

function WinningNumbersButtonsClicked(props) {
  return (
    <div style={{
      "display": "flex",
      "position": "absolute",
      "height": "11.6%",
      "width": "26.75%",
      "left": "36.8%",
      "top": "15.5%",
      "zIndex": "101",
    }}>

      {props.winningNumbers.map((winningNumber) => 
        <WinningNumberButton
          audioVisualStatus={winningNumber.audioVisualStatus}
        />   
      )}
    </div>
  )
}

export default WinningNumbersButtonsClicked;