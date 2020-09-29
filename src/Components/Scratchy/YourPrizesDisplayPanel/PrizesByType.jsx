import React from 'react';
import ClaimedPrize from './ClaimedPrize.jsx'
import UnclaimedPrize from './UnclaimedPrize.jsx'
import Background from '../../../Images/contours.png'

function PrizesByCategory(props) {
  const wonPrizesContainsUnclaimedPrize = props.prizeCoordinates.reduce((acc, coordinatesPair) => {
    const isWin = props.yourNumbers[coordinatesPair[0]][coordinatesPair[1]].winStatus === 'win';
    const hasBeenClaimed = props.prizes[coordinatesPair[0]][coordinatesPair[1]].hasBeenClaimed;
    if(isWin && !hasBeenClaimed) {
      acc = true;
    }
    return acc;
  }, false);

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
          props.prizes[prizeCoordinatesPair[0]][prizeCoordinatesPair[1]].hasBeenClaimed ?
          <ClaimedPrize 
            prize={props.prizes[prizeCoordinatesPair[0]][prizeCoordinatesPair[1]]}
            number={props.yourNumbers[prizeCoordinatesPair[0]][prizeCoordinatesPair[1]]}
          />
          :
          <UnclaimedPrize
            number={props.yourNumbers[prizeCoordinatesPair[0]][prizeCoordinatesPair[1]].number}
            text={props.yourNumbers[prizeCoordinatesPair[0]][prizeCoordinatesPair[1]].text}
            i={prizeCoordinatesPair[0]}
            j={prizeCoordinatesPair[1]}
            handlePrizeDisplayPanelUnclaimedPrizeButtonClick={props.handlePrizeDisplayPanelUnclaimedPrizeButtonClick}
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
          {wonPrizesContainsUnclaimedPrize ?
            <div>...</div>
          :
          <div>{props.claimedCryptocurrencyTotal || "$0.00"}</div>
        }
        </div>
      :
        ''
      }
  </div>
  )
}

export default PrizesByCategory;
