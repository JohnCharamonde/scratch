import React from 'react';
import WinningNumber from './scratchy-winning-number.jsx'

function WinningNumbers() {
  return (
    <div style={{"display":"flex","backgroundColor": "white", "zIndex": -1, "position":"absolute", "height": "9.1%", "width":"24.22%", "left":"37.7%", "top":"27.7%"}}>
      <WinningNumber />
      <WinningNumber />
      <WinningNumber />
      <WinningNumber />
      <WinningNumber />
    </div>
  )
}
export default WinningNumbers