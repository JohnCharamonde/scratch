import React from 'react';
import coins from '../../../Images/coins.png'
import PrizeCalculatorWinningNumber from './PrizeCalculatorWinningNumber.jsx'
import EthereumIcon from '../../../Images/ethereum-icon.png'
import CryptoKittiesIcon from '../../../Images/CryptoKittiesIcon.png'
import Background from '../../../Images/contours.png'

function PrizeCalculator(props) {
  return(
    <div style={{
      "display":"flex",
      "flexDirection":"column",
      "alignItems":"center",
      "position":"absolute",
      "backgroundImage": "url(" + coins + ")",
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
          "width":"98%",
          "backgroundColor":"RGB(80, 80, 80)",
          "color":"white",
          "marginTop": "1%",
          "outline":".1px solid gray",
          "backgroundImage": "url(" + Background + ")",
      }}>
        <div style={{"width":"98%", "marginTop":"2%", "fontSize":"150%", "borderBottom":".1px solid gray", "color":"RGB(255, 153, 204)", "fontWeight":"bolder"}}>CRYPTOCURRENCY</div>
        <div style={{
          "width":"98%",
          "height":"7vh",
        //   "marginTop":".1vh",
          "borderBottom":".1px solid gray",
          "display":"flex",
          "alignItems":"center",
        //   "backgroundColor":"aqua",
        //   "color":"black",
        //   "backgroundImage": "url(" + Background + ")",
        //   "fontSize":"150%"
      }}>
          <PrizeCalculatorWinningNumber />

           <div style={{"height":"85%", "width":"13%", "marginLeft":"1%"}}><img src={EthereumIcon} alt="ETH" style={{"height":"100%"}} /></div>
          
          <div style={{"display":"flex", "marginLeft":"1%", "alignItems":"flex-end","justifyContent":"space-between", "fontSize":"150%", "height":"80%", "width":"70%"}}>
              <div>ETH worth</div>
              <div>≈ $50</div>
              </div>
      </div>

      <div style={{
          "width":"98%",
          "height":"7vh",
        //   "marginTop":".1vh",
          "borderBottom":".1px solid gray",
          "display":"flex",
          "alignItems":"center"
        //   "fontSize":"150%"
      }}>
          <PrizeCalculatorWinningNumber />

          <div style={{"height":"70%", "width":"13%", "marginLeft":"1%"}}><img src={EthereumIcon} alt="ETH" style={{"height":"100%"}} /></div>
          
          <div style={{"display":"flex", "marginLeft":"1%", "alignItems":"flex-end","justifyContent":"space-between", "fontSize":"150%", "height":"80%", "width":"70%"}}>
              <div>ETH worth</div>
              <div>≈ $10</div>
              </div>
      </div>


      <div style={{
          "width":"98%",
          "height":"7vh",
        //   "marginTop":".1vh",
          "borderBottom":".1px solid gray",
          "display":"flex",
          "alignItems":"center"
        //   "fontSize":"150%"
      }}>
          <PrizeCalculatorWinningNumber />

          <div style={{"height":"70%", "width":"13%", "marginLeft":"1%"}}><img src={EthereumIcon} alt="ETH" style={{"height":"100%"}} /></div>
          
          <div style={{"display":"flex", "marginLeft":"1%", "alignItems":"flex-end","justifyContent":"space-between", "fontSize":"150%", "height":"80%", "width":"70%"}}>
              <div>ETH worth</div>
              <div>≈ $25</div>
              </div>
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
          "backgroundColor":"RGB(80, 80, 80)",
        //   "backgroundColor":"white",
          "backgroundImage": "url(" + Background + ")",
          "marginTop": "1%",
          "outline":".1px solid gray",
          "color":"white"

      }}>
        <div style={{"width":"98%", "marginTop":"2%", "fontSize":"150%", "borderBottom":".1px solid gray", "color":"RGB(255, 153, 204)"}}>COLLECTIBLES</div>
        <div style={{
          "width":"98%",
          "height":"8vh",
          "marginTop":".3vh",
          "borderBottom":".1px solid gray",
          "display":"flex",
          "alignItems":"center",
        //   "marginLeft":"1%"
        //   "backgroundColor":"aqua"
        //   "fontSize":"150%"
      }}>
          <PrizeCalculatorWinningNumber />

          <div style={{"height":"70%", "width":"13%", "marginLeft":"1%"}}><img src={CryptoKittiesIcon} alt="CK" style={{"height":"100%"}} /></div>
          
          <div style={{"display":"flex", "marginLeft":"1%","alignItems":"flex-end","justifyContent":"space-between", "fontSize":"150%", "height":"80%", "width":"70%"}}>
              <div>CryptoKitties NFT</div>
              </div>
      </div>




      </div>






     







      
    </div>
  )
}

export default PrizeCalculator;

