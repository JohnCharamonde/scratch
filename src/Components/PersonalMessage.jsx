import React from 'react';

function PersonalMessage() {
  return (
    <div style={{"display":"flex","justifyContent":"center", "textAlign":"center","alignItems": "center","color":"white","position":"absolute", "backgroundColor":"transparent", "fontFamily":"Helvetica","fontSize": "200%","fontWeight":"bolder","height":"47.4%", "width":"26.25%", "left":"8.75%","top":"37.2%", "zIndex":"1000000", "textShadow":"1px 1px 2px black, 0 0 25px orange, 0 0 5px orangered"}}>
       Hey there,
       <br/>
       <br/>This is a sample!
       <br/>
       <br/>Enjoy!
       <br/>
       <br/>- John
    </div>  
  )
}

export default PersonalMessage;