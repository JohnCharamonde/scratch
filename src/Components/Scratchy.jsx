import React from 'react';
import skin from './skin.png';
import WinningNumber from './WinningNumber.jsx';
import YourNumbers from './YourNumbers.jsx';

function Scratchy() {
  return (
    <div style={{"display":"flex", "justifyContent":"Center"}}>
      <img src={skin} alt="Skin" style={{"height": "60%", "width":"60%", "marginTop": "1%"}}/>
      <div style={{"display":"flex", "position":"absolute", "height": "9.1%", "width":"24.22%", "left":"37.7%", "top":"22.6%", "fontWeight":"1200", "fontSize": "300%", "fontFamily": "Helvetica"}}>
        <WinningNumber />
        <WinningNumber />
        <WinningNumber />
        <WinningNumber />
        <WinningNumber />
      </div>
      <YourNumbers />
      <div style={{"display":"flex", "backgroundColor": "rgb(25, 24, 27)", "width":"27.4%", "marginTop":"1%"}}></div>
    </div>
  )
}

export default Scratchy;