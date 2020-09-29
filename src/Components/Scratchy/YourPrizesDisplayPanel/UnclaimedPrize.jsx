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
    
           
            
            

            <div style={{
              "box-shadow": "0px 1px 0px 0px #fff6af",
              "background": "linear-gradient(to bottom, #ffec64 5%, #ffab23 100%)",
              "backgroundColor": "#ffec64",
              "borderradius":"10px",
              "border":"1px solid #ffaa22",
              "display":"inline-block",
              "cursor":"pointer",
              "color":"#333333",
              "fontFamily":"Helvetica",
              "fontSize":"16px",
              "fontWeight":"bolder",
              "fontStyle":"italic",
              "padding":"6px 24px",
              "textDecoration":"none",
              "textShadow":"0px 1px 0px #ffee66",
              "width":"75%"
            }}
            onClick={(e) => {props.handlePrizeDisplayPanelUnclaimedPrizeButtonClick(e, props.i, props.j)}}
            >
              CLICK TO REVEAL PRIZE       
                </div>
        </div>
    )
}

export default UnclaimedPrize