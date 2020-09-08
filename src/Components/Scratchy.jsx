import React from 'react';
import skin from './skin.png';
import WinningNumbers from './WinningNumbers.jsx';
import YourNumbers from './YourNumbers.jsx';
import PersonalMessage from './PersonalMessage.jsx'
import UIfx from 'uifx';
import bwongSound from '../soundEffects/bwongSound.mp3';
import scratchSound from '../soundEffects/scratchSound.mp3';

class Scratchy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winningNumbers: [
        {number: 40, text: 'FRTY', shape:'e', clickCount: 0},
        {number: 30, text: 'TRTY', shape:'d', clickCount: 0},
        {number: 20, text: 'TNTY', shape:'c', clickCount: 0},
        {number: 9, text: 'NINE', shape:'c', clickCount: 0},
        {number: 7, text: 'SEVN', shape:'c', clickCount: 0},
      ]
    }
  }

  handleWinningNumberClick(e, i) {
    if(this.state.winningNumbers[i].clickCount < 2) {
      let newWinningNumbers = this.state.winningNumbers;
      newWinningNumbers[i].clickCount++;
      this.setState({
        winningNumbers: newWinningNumbers
      })
    }

    
    const secondScratch = new Audio(scratchSound);
    const bwong = new Audio(bwongSound);
    
    if(this.state.winningNumbers[i].clickCount === 1) {
      secondScratch.play()
    } else {
      bwong.play();
    }
  }

  render() {
    return (
      <div style={{"display":"flex", "justifyContent":"Center"}}>
        <img src={skin} alt="Skin" style={{"height": "60%", "width":"60%", "marginTop": "1%", "zIndex":"100"}}/>
        <WinningNumbers 
            winningNumbers={this.state.winningNumbers}
            handleWinningNumberClick={this.handleWinningNumberClick.bind(this)}
        />
        <YourNumbers />
        <PersonalMessage />
        <div style={{
          "display":"flex",
          "backgroundColor":
          "rgb(25, 24, 27)",
          "width":"27.4%",
          "marginTop":"1%"
        }}>
        </div>
      </div>
    )
  }
}

export default Scratchy;