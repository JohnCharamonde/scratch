import React from 'react';
import coin from './coin-flip-49.gif';
import Background from './contours.png'

function YourNumberPrize(props) {
  return (
    <div style={{"position":"relative",
    "top":"-25%",
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",
    "height":"150%",
    "width":"100%",
    "zIndex":"105",
    "backgroundColor":"aqua",
    "backgroundImage": "url(" + Background + ")",
    "clipPath":"polygon(19% 73%, 10% 95%, 23% 80%, 30% 84%, 33% 81%, 52% 52%, 36% 83%, 41% 82%, 41% 82%, 46% 83%, 50% 84%, 53% 86%, 51% 89%, 59% 88%, 70% 83%, 75% 81%, 80% 59%, 77% 73%, 88% 50%, 95% 33%, 71% 77%, 93% 25%, 96% 27%, 90% 20%, 84% 20%, 76% 24%, 75% 17%, 71% 17%, 64% 22%, 57% 21%, 43% 41%, 56% 17%, 48% 23%, 35% 18%, 32% 35%, 24% 41%, 11% 71%, 28% 45%, 44% 8%)"
    }}>
      <img src={coin} alt="Coin" style={{"height":"120%", "width":"70%"}} />
    </div>
  )
}

export default YourNumberPrize;