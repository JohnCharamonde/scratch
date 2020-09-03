import React from 'react';
import logo from './full-logo.jpg';

function Navbar() {
  return (
    <div style= {{"display":"flex", "alignItems":"center", "height": "5%", "justifyContent": "space-between", "color": "white"}}>
      
      <div style={{"display":"flex", "alignItems":"center"}}>  
        <div style={{"fontWeight":700, "fontSize": "30px", "marginRight": "5%", "marginLeft": "5%"}}>
          <i className="fas fa-bars"></i>
        </div>
        <div>
          <img src={logo} alt="Logo"/>
        </div>
      </div>

      <div style={{"display":"flex", "fontFamily":"Helvetica", "fontSize":"20px","width":"30%", "justifyContent": "Space-between", "marginRight":"2%"}}>
          <div style={{"marginRight":"10%"}}>Send</div>
          <div style={{"marginRight":"10%"}}>Wallet</div>
          <div style={{"marginRight":"10%"}}>Account</div>
      </div>

    </div>
  )
}

export default Navbar;