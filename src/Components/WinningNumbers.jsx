import React from 'react';
import WinningNumber from './WinningNumber.jsx';
import Background from './contours.png';

function WinningNumbers(props) {
  return (
    <div style={{"display":"flex","position": "absolute", "backgroundColor": "beige", "backgroundImage": "url(" + Background + ")", "height": "10.1%", "width":"26.5%", "left":"37.8%", "top":"20.9%"}}>
      {props.winningNumbers.map(winningNumber => 
        <WinningNumber number={winningNumber.number} text={winningNumber.text} shape={winningNumber.shape}/>
      )}
    </div>
  )
}

export default WinningNumbers;