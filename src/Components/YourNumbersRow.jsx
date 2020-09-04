import React from 'react';
import YourNumber from './YourNumber.jsx'

function YourNumbersRow() {
  return (
    <div style={{"display":"flex","backgroundColor": "transparent", "height": "20%", "width":"100%", "fontFamily": "Helvetica"}}>
      <YourNumber />
      <YourNumber />
      <YourNumber />
      <YourNumber />
    </div>
 )
}

export default YourNumbersRow;