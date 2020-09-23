import React from 'react';
import coins from '../../../Images/coins.png'
import PrizeCalculatorWinningNumber from './PrizeWinningNumber.jsx'
import CryptoKittiesIcon from '../../../Images/CryptoKittiesIcon.png'
import Background from '../../../Images/contours.png'
import PrizesByCategory from './PrizesByCategory.jsx'

function YourPrizesDisplayPanel(props) {
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

    <PrizesByCategory 
       category={'CRYPTOCURRENCY'}
    />

    <PrizesByCategory 
       category={'COLLECTIBLES'}
    />
    
    </div>
  )
}

export default YourPrizesDisplayPanel;

