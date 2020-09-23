import React from 'react';
import Prize from './Prize.jsx'
import Background from '../../../Images/contours.png'

function PrizesByCategory(props) {
 return(      
    <div style={{
        "display":"flex",
        "flexDirection":"column",
        "alignItems": "center",
        "width":"98%",
        "backgroundColor":"RGB(80, 80, 80)",
        // "backgroundColor":"black",
        "color":"white",
        "marginTop": "1%",
        "outline":".1px solid gray",
        "backgroundImage": "url(" + Background + ")",
    }}>

      <div style={{
        "width":"98%",
        "marginTop":"2%",
        "fontSize":"200%",
        "borderBottom":".1px solid gray",
        "color":"RGB(255, 153, 204)",
        "fontWeight":"bolder"
      }}>
        <sp>{props.category}</sp>
      </div>  
      <Prize />
      <div style={{
        // "height":"15%",
        "marginTop":"2%",
        "width":"98%",
        "fontSize":"200%",
        "display":"flex",
        "justifyContent":"space-between"
      }}>
        <sp>TOTAL:</sp>
        <sp>≈ $100</sp>
    </div>
  </div>
  )
}

export default PrizesByCategory;
