import React from 'react';

function PersonalMessage() {
  return (
    <div style={{
      "position":"absolute",
      "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",
    "color":"white",
    "backgroundColor":"transparent",
    "fontFamily":"Helvetica",
    "fontSize": "120%",
    "fontWeight":"bolder",
    "textTransform":"uppercase",
    "height":"72%",
    "width":"26.55%",
    "left":"6.9%",
    "top":"16.2%",
    "zIndex":"105"}}>
      <div style={{"maxHeight": "80%", "width":"80%"}}>
         <div style={{"backgroundColor":"RGB(0, 0, 0, .6)", "width":"fit-content", "transform":"skewX(-15deg)"}}>Welcome, Visitor.</div>
         <br/>
         <div style={{"backgroundColor":"RGB(0, 0, 0, .6)", "width":"fit-content", "transform":"skewX(-15deg)"}}>This is a sample scratchy. Please take and look around, have fun, and sign up to configure your own scratchies with crypto prizes and send them to your friends!</div>
         <br/>
         <div style={{"backgroundColor":"RGB(0, 0, 0, .6)", "width":"fit-content", "transform":"skewX(-15deg)"}}>Enjoy!</div>
         <br/>
         <div style={{"backgroundColor":"RGB(0, 0, 0, .6)", "width":"fit-content", "maxWidth":"100%", "transform":"skewX(-15deg)"}}>The Scratchy Happy Team</div>
       </div>
    </div>  
  )
}

export default PersonalMessage;