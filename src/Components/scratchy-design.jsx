import React from 'react';
import skin from './skin.png';
import WinningNumber from './scratchy-winning-number.jsx'
import YourNumber from './scratchy-your-number.jsx'

function ScratchyDesign() {
  return (
    <div style={{"display":"flex", "justifyContent":"Center"}}>
      <img src={skin} alt="Skin" style={{"height": "55%", "width":"55%", "marginTop": "2.5%"}}/>
      <div style={{"display":"flex", "position":"absolute", "height": "9.1%", "width":"24.22%", "left":"37.7%", "top":"27.7%", "fontWeight":"1200", "fontSize": "300%", "fontFamily": "Helvetica"}}>
      <WinningNumber />
      <WinningNumber />
      <WinningNumber />
      <WinningNumber />
      <WinningNumber />
    </div>
    <div style={{"display":"flex","backgroundColor": "transparent", "position":"absolute", "height": "9.1%", "width":"24.22%", "left":"37.5%", "top":"42%", "fontWeight":"1200", "fontSize": "300%", "fontFamily": "Helvetica"}}>
      <YourNumber />
      <YourNumber />
      <YourNumber />
      <YourNumber />
    </div>
      <div style={{"outline":"1px solid white", "width":"27.5%", "marginTop":"2.5%"}}></div>
    </div>
  )
}

export default ScratchyDesign;