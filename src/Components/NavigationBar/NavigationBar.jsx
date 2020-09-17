import React from 'react';
import logo from '../../Images/logo-ish.png';

function NavBar() {
  return (
    <div style={{"display":"flex","justifyContent":"center"}}>
    <div style= {{"display":"flex", "width":"85%", "height": "3%", "justifyContent": "center", "color":"white"}}>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"flex-start","width":"35%"}}>
      <img src={logo} alt="Logo" style={{"height": "100%", "width":"80%"}}/>
      </div>

      <div style={{"display":"flex", "alignItems":"center","fontFamily":"Apercu,Lucida Grande,sans-serif", "fontSize":"100%", "width":"40%", "justifyContent": "Space-between"}}>
          <div>Play</div>
          <div>Create</div>
          <div>Staking</div>
          <div>Marketplace</div>
          <div>About</div>
      </div>

      <div style={{"display":"flex", "alignItems":"center","fontFamily":"Apercu,Lucida Grande,sans-serif", "fontSize":"100%", "width":"30%", "justifyContent": "flex-end"}}>
          <div>Wallet</div>
      </div>

    </div>
    </div>
  )
}

export default NavBar;