import React from 'react';
import skin from './skin.png';
import WinningNumbers from './WinningNumbers.jsx';
import YourNumbers from './YourNumbers.jsx';
import PersonalMessage from './PersonalMessage.jsx'

class Scratchy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winningNumbers: [{number: 40, text: 'FRTY', shape:'c', clickCount: 0}, {number: 30, text: 'TRTY', shape:'c', clickCount: 1},{number: 20, text: 'TNTY', shape:'c', clickCount: 2},{number: 9, text: 'NINE', shape:'c', clickCount: 1},{number: 7, text: 'SEVN', shape:'c', clickCount: 0}]
    }

  }

  render() {
    return (
      <div style={{"display":"flex", "justifyContent":"Center"}}>
        <img src={skin} alt="Skin" style={{"height": "60%", "width":"60%", "marginTop": "1%", "zIndex":"100"}}/>
          <WinningNumbers winningNumbers={this.state.winningNumbers}/>
          <YourNumbers />
          <PersonalMessage />
        <div style={{"display":"flex", "backgroundColor": "rgb(25, 24, 27)", "width":"27.4%", "marginTop":"1%"}}></div>
      </div>
    )
  }
};

export default Scratchy;