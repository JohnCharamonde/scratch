import React from 'react';
import YourNumbersRow from './YourNumbersRow.jsx';
import Background from './contours.png'

function YourNumbers() {
  return (
    <div style={{"backgroundColor":"beige", "backgroundImage": "url(" + Background + ")", "position":"absolute", "height": "47.8%", "width":"26.5%", "left":"37.6%", "top":"36.5%", "fontFamily": "Helvetica"}}>
      < YourNumbersRow/>
      < YourNumbersRow/>
      < YourNumbersRow/>
      < YourNumbersRow/>
      < YourNumbersRow/>
    </div>
  )
}

export default YourNumbers;