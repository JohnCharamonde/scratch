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
      ],
      yourNumbers: [
        [
          {number: 41, text: 'FRON', shape:'c', clickCount: 0},
          {number: 33, text: 'TRTR', shape:'d', clickCount: 0},
          {number: 28, text: 'TNET', shape:'e', clickCount: 0},
          {number: 19, text: 'NNTN', shape:'c', clickCount: 0}
        ],
        [
          {number: 23, text: 'TNTR', shape:'e', clickCount: 0},
          {number: 12, text: 'TWLV', shape:'d', clickCount: 0},
          {number: 8, text: 'EIGH', shape:'e', clickCount: 0},
          {number: 27, text: 'TNSV', shape:'c', clickCount: 0}
        ],
        [
          {number: 34, text: 'TRFR', shape:'e', clickCount: 1},
          {number: 1, text: 'ONE', shape:'d', clickCount: 2},
          {number: 48, text: 'FRET', shape:'c', clickCount: 0},
          {number: 45, text: 'FRFV', shape:'d', clickCount: 0}
        ],
        [
          {number: 16, text: 'SXTN', shape:'e', clickCount: 0},
          {number: 25, text: 'TNFV', shape:'d', clickCount: 0},
          {number: 26, text: 'TNSX', shape:'c', clickCount: 0},
          {number: 36, text: 'TRSX', shape:'e', clickCount: 0}
        ],
        [
          {number: 20, text: 'TNTY', shape:'d', clickCount: 0},
          {number: 49, text: 'FRNN', shape:'c', clickCount: 0},
          {number: 11, text: 'ELVN', shape:'e', clickCount: 0},
          {number: 10, text: 'TEN', shape:'c', clickCount: 0}
        ],
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
        <YourNumbers 
          yourNumbers={this.state.yourNumbers}
        />
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