import React from 'react';

function PrizeShowcase(props) {
  return (
    <div>
    {props.isActive ? 
      <div
      style={{
        "position":"absolute",
        "left":"36.25%",
        "top":"15.05%",
        "backgroundColor":"orange",
        "height":"74.7%",
        "width":"27.55%",
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