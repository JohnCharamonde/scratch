import React from 'react';
import WinningNumber from './WinningNumber.jsx'
import Background from './contours.png'

function WinningNumbers() {
  return (
    <div style={{"display":"flex","position": "absolute", "backgroundColor": "beige", "backgroundImage": "url(" + Background + ")", "height": "10.1%", "width":"26.5%", "left":"37.8%", "top":"20.9%"}}>
      <WinningNumber number={7} text={'SVN'}/>
      <WinningNumber number={7} text={'SVN'}/>
      <WinningNumber number={9} text={'NINE'}/>
      <WinningNumber number={7} text={'SVN'}/>
      <WinningNumber number={7} text={'SVN'}/>
    </div>
  )
}
export default WinningNumbers