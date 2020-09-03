import React from 'react';
import skin from './skin.png';

function Scratchy() {
  return (
    <div style={{"display":"flex", "justifyContent":"Center"}}>
      <img src={skin} alt="Skin" style={{"height": "55%", "width":"55%", "marginTop": "2.5%"}}/>
      <div style={{"outline":"1px solid white", "width":"27.5%", "marginTop":"2.5%"}}></div>
    </div>
  )
}

export default Scratchy;