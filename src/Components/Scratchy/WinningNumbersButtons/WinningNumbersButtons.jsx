import React from 'react';
import WinningNumberButton from './WinningNumberButton.jsx';

function WinningNumbersButtons(props) {
  return (
    <div style={{
      "display": "flex",
      "position": "absolute",
      "height": "11.6%",
      "width": "26.75%",
      "left": "36.8%",
      "top": "15.5%",
      "zIndex": "150",
    }}>

      {props.winningNumbers.map((winningNumber, i) => 
        <WinningNumberButton
          audioVisualStatus={winningNumber.audioVisualStatus}
          i={i}
          handleWinningNumberButtonClick={props.handleWinningNumberButtonClick}
        />   
      )}
    </div>
  )
}

export default WinningNumbersButtons;