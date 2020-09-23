import React from 'react';
import PrizeWinningNumber from './PrizeWinningNumber.jsx'
import EthereumIcon from '../../../Images/ethereum-icon.png'

function Prize(props) {
    return (
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
            <PrizeWinningNumber />
    
             <div style={{"height":"85%", "width":"13%", "marginLeft":"1%"}}><img src={EthereumIcon} alt="ETH" style={{"height":"100%"}} /></div>
            
            <div style={{"display":"flex", "marginLeft":"1%", "alignItems":"flex-end","justifyContent":"space-between", "fontSize":"150%", "height":"80%", "width":"70%"}}>
                <div>ETH worth</div>
                <div>≈ $50</div>
                </div>
        </div>
    )
}

export default Prize;

