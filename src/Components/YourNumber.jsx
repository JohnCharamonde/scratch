import React from 'react';

function YourNumber() {
  return (
      <div style={{"display":"flex","height": "100%", "width": "25%", "zIndex":"2","fontFamily":"Helvetica", "fontWeight":"bolder", "alignItems": "center", "justifyContent": "center"}}>
        <div style={{"height":"90%", "width":"90%", "border":".1px solid lightgray"}}>
          <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"40%", "width":"100%", "fontSize":"160%"}}>7</div>
          <div style={{"display":"flex", "alignItems": "flex-start", "justifyContent":"center", "height":"10%", "width":"100%", "fontSize":"10%"}}>SVN</div>
          <div style={{"display":"flex", "alignItems": "flex-end", "justifyContent":"center", "height":"40%", "width":"100%", "fontSize":"100%"}}>0.25 ETH</div>
          <div style={{"display":"flex", "alignItems": "flex-end", "justifyContent":"center", "height":"10%", "width":"100%", "fontSize":"30%"}}>$100.00</div>
        </div>
      </div>
  )
}

export default YourNumber;