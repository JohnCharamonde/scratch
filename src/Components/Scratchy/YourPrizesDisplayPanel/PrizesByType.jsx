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
        "backgroundColor":"RGB(0, 0, 0, .6)",
        // "backgroundColor":"black",
        "color":"white",
        "marginTop": "1%",
        "marginBottom":"1%",
        "outline":"2px solid white",
        "backgroundImage": "url(" + Background + ")",
    }}>

      <div style={{
        "display":"flex",
        "justifyContent":"center",
        "alignItems":"center",
        "width":"100%",
        "marginTop":"2%",
        "fontSize":"200%",
        "borderBottom":"2px solid white",
        // "color":"RGB(255, 153, 204)",
        "color":"white",
        "fontWeight":"bolder"
      }}>
        <div>{props.type}</div>
      </div>  

      {
        props.prizeCoordinates.map((prizeCoordinatesPair) => 
          <Prize 
            prize={props.prizes[prizeCoordinatesPair[0]][prizeCoordinatesPair[1]]}
            number={props.yourNumbers[prizeCoordinatesPair[0]][prizeCoordinatesPair[1]]}
          />
        )
      }

      {
      props.type === 'Cryptocurrency' ?
        <div style={{
        // "height":"15%",
        "marginTop":"2%",
        "width":"98%",
        "fontSize":"200%",
        "display":"flex",
        "justifyContent":"space-between"
        }}>
          <div>TOTAL:</div>
          <div>{props.claimedCryptocurrencyTotal || "$0.00"}</div>
        </div>
      :
        ''
      }
  </div>
  )
}

export default PrizesByCategory;
