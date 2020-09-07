import React from 'react';
import WinningNumber from './WinningNumber.jsx'
import Background from './contours.png'

function WinningNumbers() {
  return (
    <div style={{"display":"flex","position": "absolute", "backgroundColor": "beige", "backgroundImage": "url(" + Background + ")", "height": "10.1%", "width":"26.5%", "left":"37.8%", "top":"20.9%"}}>
      <WinningNumber number={17} text={'SVNTN'} shape={'a'}/>
      <WinningNumber number={7} text={'SVN'} shape={'b'}/>
      <WinningNumber number={9} text={'NINE'} shape={'c'}/>
      <WinningNumber number={40} text={'FRTY'} shape={'d'}/>
      <WinningNumber number={24} text={'TWYFR'} shape={'e'}/>
    </div>
  )
}
export default WinningNumbers