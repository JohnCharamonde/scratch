import React from 'react';
import WinningNumberButton from './WinningNumberButton.jsx';

function WinningNumbersButtons(props) {
  return (
    <div style={{
      "display": "flex",
      "position": "absolute",
      "height": "11.6%",
      "width": "26.75%",
      "left": "37.7%",
      "top": "15.5%",
      "zIndex": "150",
    }}>

      {props.winningNumbers.map((winningNumber, i) => 
        <WinningNumberButton
          visualStatus={winningNumber.visualStatus}
          i={i}
          handleWinningNumberButtonClick={props.handleWinningNumberButtonClick}
        />   
      )}
    </div>
  )
}

export default WinningNumbersButtons;