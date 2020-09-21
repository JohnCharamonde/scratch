import React from 'react';
import coins from '../../../Images/coins.png'

function PrizeCalculator(props) {
  return(
    <div style={{
      "display":"flex",
      "flexDirection":"column",
      "alignItems":"center",
      "position":"absolute",
      "backgroundImage": "url(" + coins + ")",
      "backgroundSize:":"50% 50%",
      "height":"72.7%",
      "width": "26.8%",
      "left":"66.92%",
      "top": "15.5%",
      "flexWrap":"nowrap",
      "overflow":"scroll",
      "outline":".1px solid gray",
      "fontFamily":"Helvetica",
      "fontWeight":"bolder",
    }}>

      <div style={{
          "display":"flex",
          "flexDirection":"column",
          "alignItems": "center",
          "width":"95%",
          "backgroundColor":"black",
          "color":"white",
          "marginTop": "2.5%",
          "outline":".1px solid gray"


      }}>
        <div style={{"width":"98%", "marginTop":"2%", "fontSize":"150%", "borderBottom":".1px solid gray"}}>Cryptocurrency</div>
        <div style={{
          "width":"98%",
          "height":"8vh",
          "marginTop":".3vh",
          "borderBottom":".1px solid gray"
      }}>
          
          ETH worth ≈ $100.00
      </div>

      <div style={{
          "width":"98%",
          "height":"8vh",
          "marginTop":".3vh",
          "borderBottom":".1px solid gray"
      }}>2
      </div>
      <div style={{
          "width":"98%",
          "height":"8vh",
          "marginTop":".3vh",
          "borderBottom":".1px solid gray"
      }}>3
      </div>
      <div style={{
          "height":"15%",
          "width":"98%",
          "fontSize":"150%"
      }}>TOTAL:
      </div>
      </div>






      <div style={{
          "display":"flex",
          "flexDirection":"column",
          "alignItems": "center",
          "width":"98%",
          "backgroundColor":"black",
          "color":"white",
          "marginTop": "2%",
          "outline":".1px solid gray"

      }}>
        <div style={{"width":"100%", "marginTop":"2%", "fontSize":"150%", "borderBottom":".1px solid gray"}}>Collectibles</div>
        <div style={{
          "width":"100%",
          "height":"8vh",
          "marginTop":".3vh",
          "borderBottom":".1px solid gray"
      }}>≈ 1
      </div>
      </div>







      
    </div>
  )
}

export default PrizeCalculator;

