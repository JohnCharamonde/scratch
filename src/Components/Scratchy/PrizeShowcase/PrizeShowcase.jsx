import React from 'react';

function PrizeShowcase(props) {
  return (
    <div>
    {props.isActive ? 
      <div
      style={{
        "position":"absolute",
        "left":"30%",
        "top":"15%",
        "backgroundColor":"orange",
        "height":"30%",
        "width":"25%",
        "zIndex":"500"
      }}>
      hey what's up!
      </div>
      :
      ''
    }
    </div>
  )
}

export default PrizeShowcase;