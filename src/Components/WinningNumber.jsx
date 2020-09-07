import React from 'react';
import Background from './contours.png'
function WinningNumber(props) {
  const shapes = {
    a: "polygon(24% 16%, 16% 25%, 19% 22%, 18% 31%, 20% 29%, 18% 37%, 20% 33%, 18% 43%, 21% 42%, 20% 50%, 21% 50%, 19% 60%, 20% 60%, 20% 67%, 23% 66%, 21% 74%, 23% 72%, 24% 77%, 31% 78%, 34% 77%, 36% 79%, 38% 80%, 50% 77%, 53% 78%, 56% 79%, 59% 79%, 62% 81%, 68% 78%, 80% 76%, 86% 53%, 83% 49%, 84% 44%, 80% 44%, 82% 37%, 84% 32%, 83% 28%, 80% 23%, 80% 24%, 78% 18%, 70% 19%, 70% 17%, 64% 18%, 61% 16%, 54% 19%, 55% 17%, 48% 19%, 49% 17%, 39% 20%, 35% 18%, 32% 18%)",
    b: "polygon(10% 28%, 11% 32%, 9% 34%, 11% 38%, 10% 41%, 12% 47%, 10% 51%, 9% 56%, 8% 63%, 11% 65%, 9% 70%, 9% 76%, 26% 73%, 34% 73%, 41% 73%, 50% 73%, 59% 71%, 70% 66%, 79% 68%, 91% 68%, 97% 63%, 93% 60%, 96% 55%, 94% 48%, 94% 43%, 96% 38%, 96% 32%, 93% 27%, 95% 20%, 89% 16%, 78% 16%, 72% 14%, 64% 13%, 55% 13%, 45% 17%, 35% 17%, 23% 18%, 18% 18%, 12% 21%, 6% 23%)",
    c: "polygon(69% 72%, 64% 85%, 78% 36%, 70% 49%, 92% 8%, 83% 8%, 72% 21%, 70% 15%, 63% 13%, 62% 16%, 49% 20%, 39% 35%, 47% 20%, 45% 23%, 38% 34%, 36% 37%, 32% 36%, 24% 35%, 21% 45%, 20% 56%, 23% 52%, 27% 43%, 14% 80%, 26% 83%, 34% 80%, 37% 74%, 34% 89%, 38% 94%, 50% 76%, 40% 95%, 54% 85%, 61% 87%, 71% 87%)",
    d: "polygon(25% 13%, 30% 12%, 31% 15%, 29% 18%, 29% 18%, 38% 17%, 44% 6%, 38% 24%, 36% 33%, 57% 23%, 64% 12%, 78% 9%, 78% 26%, 72% 36%, 59% 58%, 40% 73%, 59% 63%, 65% 75%, 63% 82%, 59% 84%, 53% 87%, 42% 88%, 25% 86%, 22% 100%, 15% 90%, 15% 68%, 12% 77%, 16% 49%, 10% 59%, 10% 68%, 13% 26%, 10% 41%, 6% 52%, 44% 24%, 20% 17%, 23% 33%, 16% 41%, 34% 30%",
    e: "polygon(24% 24%, 39% 8%, 17% 40%, 28% 30%, 14% 52%, 2% 75%, 14% 61%, 4% 94%, 7% 97%, 13% 98%, 19% 82%, 16% 95%, 59% 99%, 74% 79%, 64% 93%, 88% 66%, 83% 44%, 100% 7%, 97% 1%, 68% 9%, 45% 5%)"
  }
  // if(props.number !== 7 || props.number !== 9) {
  //   return (
  //     <div style={{"display":"flex", "backgroundColor": "pink", "backgroundImage": "url(" + Background + ")","height": "100%", "width": "25%", "zIndex":"99","fontFamily":"Apercu,Lucida Grande,sans-serif", "fontWeight":"bolder", "alignItems": "center", "justifyContent": "center"}}>
  //   <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent":"center", "height":"90%", "width":"90%", "border":".1px solid lightgray"}}>
  //     <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"30%", "width":"100%", "fontSize":"160%"}}>{props.number}</div>
  //     <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"20%", "width":"100%", "fontSize":"10%"}}>{props.text}</div>
  //   </div>
  // </div>
  // )
  // }
  return (
      <div style={{"display":"flex", "backgroundColor": "aqua", "backgroundImage": "url(" + Background + ")","height": "100%", "width": "25%", "zIndex":"101","fontFamily":"Helvetica", "fontWeight":"bolder", "alignItems": "center", "justifyContent": "center", "white":"black", "clipPath":shapes[props.shape]}}>
      <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent":"center", "height":"90%", "width":"90%", "border":".1px solid pink"}}>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"30%", "width":"100%", "fontSize":"160%"}}>{props.number}</div>
      <div style={{"display":"flex", "alignItems": "center", "justifyContent":"center", "height":"20%", "width":"100%", "fontSize":"10%"}}>{props.text}</div>
    </div>
  </div>
  )
}

export default WinningNumber