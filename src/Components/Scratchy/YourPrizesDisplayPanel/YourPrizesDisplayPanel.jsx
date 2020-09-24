import React from 'react';
import coins from '../../../Images/coins.png'
import PrizeCalculatorWinningNumber from './PrizeWinningNumber.jsx'
import CryptoKittiesIcon from '../../../Images/CryptoKittiesIcon.png'
import Background from '../../../Images/contours.png'
import PrizesByType from './PrizesByType.jsx'

function YourPrizesDisplayPanel(props) {
  const coordinatesOfPrizesWonByType = props.yourNumbers.reduce((acc, yourNumbersRow, i) => {
    yourNumbersRow.forEach((yourNumber, j) => {
      if(yourNumber.winStatus === 'win') {
        if(props.prizes[i][j].type === 'cryptocurrency') {
          acc.cryptocurrency.push([i, j])
        } else {
          acc.collectibles.push([i, j])
        }
      }
    })
    return acc;
  }, {cryptocurrency:[], collectibles:[]});



  const claimedCryptocurrencyTotal = coordinatesOfPrizesWonByType.cryptocurrency.reduce((acc, coordinates) => {
    const i = coordinates[0];
    const j = coordinates[1];
    if(props.prizes[i][j].hasBeenClaimed) {
      acc += props.prizes[i][j].dollarAmount;
    }
    return acc;
  }, 0);


  return(
    <div style={{
      "display":"flex",
      "flexDirection":"column",
      "alignItems":"center",
      "position":"absolute",
      "height":"71.55%",
      "width": "26.4%",
      "left":"66.6%",
      "top": "16.45%",
      "flexWrap":"nowrap",
      "overflow":"scroll",
      "outline":".1px solid gray",
      "fontFamily":"Helvetica",
      "fontWeight":"bolder",
      "zIndex":"150"
    }}>
    <PrizesByType
       type={'Cryptocurrency'}
       prizeCoordinates={coordinatesOfPrizesWonByType.cryptocurrency}
       yourNumbers={props.yourNumbers}
       prizes={props.prizes}
       claimedCryptocurrencyTotal={claimedCryptocurrencyTotal}
    />
    <PrizesByType
       type={'Collectibles'}
       prizeCoordinates={coordinatesOfPrizesWonByType.collectibles}
       yourNumbers={props.yourNumbers}
       prizes={props.prizes}
    />
    </div>
  )
}

export default YourPrizesDisplayPanel;

