import React from 'react';
import logo from './logo-ish.png';

function NavBar() {
  return (
    <div style={{"display":"flex","justifyContent":"center"}}>
    <div style= {{"display":"flex", "width":"85%", "height": "3%", "justifyContent": "space-between", "color":"white"}}>
      
      <div style={{"display":"flex", "alignItems":"center", "width": "30%"}}>  
        <div style={{"fontWeight":"700", "fontSize": "30px", "marginRight": "5%", "marginLeft": "5%"}}>
          <i className="fas fa-bars"></i>
        </div>
      </div>

      
      <img src={logo} alt="Logo" style={{"height": "30%", "width":"30%"}}/>


      <div style={{"display":"flex", "alignItems":"center","fontFamily":"Apercu,Lucida Grande,sans-serif", "fontSize":"100%", "width":"25%", "justifyContent": "Space-between", "marginRight":"2%"}}>
          <div style={{"marginRight":"10%"}}>Create</div>
          <div style={{"marginRight":"10%"}}>Wallet</div>
          <div style={{"marginRight":"10%"}}>Account</div>
      </div>
    </div>
    </div>
  )
}

export default NavBar;