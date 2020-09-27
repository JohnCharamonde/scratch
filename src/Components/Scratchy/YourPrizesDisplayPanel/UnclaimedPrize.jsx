import React from 'react';
import PrizeWinningNumber from './PrizeWinningNumber.jsx'
import iris from "../../../Images/iris.jpeg"

function UnclaimedPrize(props) {
    return (
        <div style={{
            "width":"98%",
            "height":"6vh",
          //   "marginTop":".1vh",
            "borderBottom":".1px solid gray",
            "display":"flex",
            "alignItems":"center",
          //   "backgroundColor":"aqua",
          //   "color":"black",
          //   "backgroundImage": "url(" + Background + ")",
          //   "fontSize":"150%"
        }}>
            <PrizeWinningNumber 
              number={props.number}
              text={props.text}
            />
    
             <div style={{"height":"85%", "width":"13%", "marginLeft":"1%"}}><img src={iris} alt="perhaps" style={{"height":"100%"}} /></div>
            
            <div style={{"display":"flex", "marginLeft":"1%", "alignItems":"center","justifyContent":"space-between", "fontSize":"150%", "height":"80%", "width":"70%"}}>
          CLICK HERE!
                </div>
        </div>
    )
}

export default UnclaimedPrize