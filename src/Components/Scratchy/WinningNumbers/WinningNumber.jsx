import React from 'react';
import Background from '../../../Images/contours.png'

function WinningNumber(props) {
  const clipPaths = [
    "polygon(24% 16%, 16% 25%, 19% 22%, 18% 31%, 20% 29%, 18% 37%, 20% 33%, 18% 43%, 21% 42%, 20% 50%, 21% 50%, 19% 60%, 20% 60%, 20% 67%, 23% 66%, 21% 74%, 23% 72%, 24% 77%, 31% 78%, 34% 77%, 36% 79%, 38% 80%, 50% 77%, 53% 78%, 56% 79%, 59% 79%, 62% 81%, 68% 78%, 80% 76%, 86% 53%, 83% 49%, 84% 44%, 80% 44%, 82% 37%, 84% 32%, 83% 28%, 80% 23%, 80% 24%, 78% 18%, 70% 19%, 70% 17%, 64% 18%, 61% 16%, 54% 19%, 55% 17%, 48% 19%, 49% 17%, 39% 20%, 35% 18%, 32% 18%)",
    "polygon(10% 28%, 11% 32%, 9% 34%, 11% 38%, 10% 41%, 12% 47%, 10% 51%, 9% 56%, 8% 63%, 11% 65%, 9% 70%, 9% 76%, 26% 73%, 34% 73%, 41% 73%, 50% 73%, 59% 71%, 70% 66%, 79% 68%, 91% 68%, 97% 63%, 93% 60%, 96% 55%, 94% 48%, 94% 43%, 96% 38%, 96% 32%, 93% 27%, 95% 20%, 89% 16%, 78% 16%, 72% 14%, 64% 13%, 55% 13%, 45% 17%, 35% 17%, 23% 18%, 18% 18%, 12% 21%, 6% 23%)",
    "polygon(69% 72%, 64% 85%, 78% 36%, 70% 49%, 92% 8%, 83% 8%, 72% 21%, 70% 15%, 63% 13%, 62% 16%, 49% 20%, 39% 35%, 47% 20%, 45% 23%, 38% 34%, 36% 37%, 32% 36%, 24% 35%, 21% 45%, 20% 56%, 23% 52%, 27% 43%, 14% 80%, 26% 83%, 34% 80%, 37% 74%, 34% 89%, 38% 94%, 50% 76%, 40% 95%, 54% 85%, 61% 87%, 71% 87%)",
    "polygon(19% 73%, 10% 95%, 23% 80%, 30% 84%, 33% 81%, 52% 52%, 36% 83%, 41% 82%, 41% 82%, 46% 83%, 50% 84%, 53% 86%, 51% 89%, 59% 88%, 70% 83%, 75% 81%, 80% 59%, 77% 73%, 88% 50%, 95% 33%, 71% 77%, 93% 25%, 96% 27%, 90% 20%, 84% 20%, 76% 24%, 75% 17%, 71% 17%, 64% 22%, 57% 21%, 43% 41%, 56% 17%, 48% 23%, 35% 18%, 32% 35%, 24% 41%, 11% 71%, 28% 45%, 44% 8%)",
    "polygon(11% 81%, 17% 83%, 14% 89%, 19% 90%, 22% 86%, 25% 87%, 24% 94%, 29% 94%, 29% 94%, 41% 91%, 50% 93%, 56% 87%, 77% 65%, 53% 93%, 66% 96%, 69% 86%, 74% 86%, 81% 72%, 91% 49%, 98% 24%, 89% 45%, 98% 17%, 85% 38%, 98% 7%, 87% 9%, 86% 3%, 78% 9%, 69% 6%, 58% 12%, 53% 26%, 54% 10%, 42% 13%, 29% 32%, 21% 62%, 26% 38%, 16% 73%, 18% 52%)"
  ]

  const backgroundColors= {
    uncertain: 'white',
    win: 'aqua',
    loss: 'pink'
  }

  if(props.winningNumber.audioVisualStatus === 0) {
    return (
      <div style={{"display":"flex",
      "backgroundColor": "transparent",
      "height": "100%",
      "width": "25%",
      "zIndex":"102",
      "fontFamily":"Helvetica",
      "fontWeight":"bolder",
      "alignItems": "center",
      "justifyContent": "center",
      "color":"transparent"}}
      >
      <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent":"center", "height":"90%", "width":"90%", "border":".1px solid transparent"}}>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"30%", "width":"100%", "fontSize":"160%"}}>{props.winningNumber.number}</div>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"20%", "width":"100%", "fontSize":"10%"}}>{props.winningNumber.text}</div>
    </div>
  </div>
  )
  }

  if(props.winningNumber.audioVisualStatus === 1) {
    return (
      <div style={{"display":"flex", "backgroundColor":backgroundColors[props.winningNumber.winStatus], "backgroundImage": "url(" + Background + ")","height": "100%", "width": "25%", "zIndex":"102","fontFamily":"Helvetica", "fontWeight":"bolder", "alignItems": "center", "justifyContent": "center", "clipPath":clipPaths[props.winningNumber.clipPathIndex]}}>
        <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent":"center", "height":"90%", "width":"90%", "border":".1px solid pink"}}>
        <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"30%", "width":"100%", "fontSize":"160%"}}>{props.winningNumber.number}</div>
        <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"20%", "width":"100%", "fontSize":"10%"}}>{props.winningNumber.text}</div>
    </div>
  </div>
  )
  }

  return (
    <div style={{"display":"flex", "backgroundColor":backgroundColors[props.winningNumber.winStatus], "backgroundImage": "url(" + Background + ")","height": "100%", "width": "25%", "zIndex":"102","fontFamily":"Helvetica", "fontWeight":"bolder", "alignItems": "center", "justifyContent": "center"}}>
      <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent":"center", "height":"90%", "width":"90%", "border":".1px solid pink"}}>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"30%", "width":"100%", "fontSize":"160%"}}>{props.winningNumber.number}</div>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"20%", "width":"100%", "fontSize":"10%"}}>{props.winningNumber.text}</div>
    </div>
  </div>
  )
}

export default WinningNumber;