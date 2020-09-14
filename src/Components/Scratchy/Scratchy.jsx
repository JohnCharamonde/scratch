import React from 'react';
import skin from '../../Images/skin.png';
import WinningNumbers from './WinningNumbers/WinningNumbers.jsx';
import YourNumbers from './YourNumbers/YourNumbers.jsx';
import YourNumbersButtons from './YourNumbersButtons/YourNumbersButtons.jsx'
import YourNumbersButtonsClicked from './YourNumbersButtonsClicked/YourNumbersButtonsClicked.jsx'
import PersonalMessage from './PersonalMessage/PersonalMessage.jsx'
import UIfx from 'uifx';
import bwongSound from '../../Sounds/bwongSound.mp3';
import scratchSound from '../../Sounds/scratchSound.mp3';
import suspenseSound from '../../Sounds/suspense.mp3';

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
      winningNumbersClicked: [],
      yourNumbers: [
        [
          {number: 41, text: 'FRON', shape:'c', status: [0, 0, 'uncertain']},
          {number: 33, text: 'TRTR', shape:'d', status: [0, 0, 'uncertain']},
          {number: 28, text: 'TNET', shape:'e', status: [0, 0, 'uncertain']},
          {number: 19, text: 'NNTN', shape:'c', status: [0, 0, 'uncertain']}
        ],
        [
          {number: 23, text: 'TNTR', shape:'e', status: [0, 0, 'uncertain']},
          {number: 12, text: 'TWLV', shape:'d', status: [0, 0, 'uncertain']},
          {number: 8, text: 'EIGH', shape:'e', status: [0, 0, 'uncertain']},
          {number: 27, text: 'TNSV', shape:'c', status: [0, 0, 'uncertain']}
        ],
        [
          {number: 34, text: 'TRFR', shape:'e', status: [0, 0, 'uncertain']},
          {number: 1, text: 'ONE', shape:'d', status: [0, 0, 'uncertain']},
          {number: 48, text: 'FRET', shape:'c', status: [0, 0, 'uncertain']},
          {number: 45, text: 'FRFV', shape:'d', status: [0, 0, 'uncertain']}
        ],
        [
          {number: 16, text: 'SXTN', shape:'e', status: [0, 0, 'uncertain']},
          {number: 25, text: 'TNFV', shape:'d', status: [0, 0, 'uncertain']},
          {number: 26, text: 'TNSX', shape:'c', status: [0, 0, 'uncertain']},
          {number: 36, text: 'TRSX', shape:'e', status: [0, 0, 'uncertain']}
        ],
        [
          {number: 20, text: 'TNTY', shape:'d', status: [0, 0, 'uncertain']},
          {number: 49, text: 'FRNN', shape:'c', status: [0, 0, 'uncertain']},
          {number: 11, text: 'ELVN', shape:'e', status: [0, 0, 'uncertain']},
          {number: 10, text: 'TEN', shape:'c', status: [0, 0, 'uncertain']}
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

    const scratch = new Audio(scratchSound);
    const bwong = new Audio(bwongSound);
    
    if(this.state.winningNumbers[i].clickCount === 1) {
      scratch.play()
    } else {
      bwong.play();
    }
  }

  handleYourNumberNumberButtonClick(e, i, j) {
    const numberStatus = this.state.yourNumbers[i][j].status[0];
    const prizeStatus = this.state.yourNumbers[i][j].status[1];
    const gameStatus = this.state.yourNumbers[i][j].status[2];
    const number = this.state.yourNumbers[i][j].number;
    const winningNumbersClicked = this.state.winningNumbersClicked;

    const scratch = new Audio(scratchSound);
    const uncertain = new Audio(bwongSound);
    const win = new Audio(winSound);
    const loss = new Audio(lossSound);
    const mysterPrize = new Audio(mysteryPrizeSound) 

    if(numberStatus === 0 && prizeStatus === 0) {
      numberStatus++;
      if(number in winningNumbersClicked) {
        scratch.play();
        setTimeout(() => {win.play()}, 1000)
        this.state.unclaimedPrizes.push()
      }
    } else if(numberStatus === 1 && prizeStatus === 0 && gameStatus === 'uncertain') {
      prizeStatus++;
      
    }



    this.setState({
      status: [numberStatus, prizeStatus, gameStatus]
    })
  }


  handleYourNumberPrizeButtonClick(e, i, j) {
    if(this.state.yourNumbers[i][j].prizeClickCount < 2) {
      let newYourNumbers = this.state.yourNumbers;
      newYourNumbers[i][j].prizeClickCount++;
      this.setState({
        yourNumbers: newYourNumbers
      })
    }

    const scratch = new Audio(scratchSound);
    const suspense = new Audio(suspenseSound);
    
    if(this.state.yourNumbers[i][j].prizeClickCount === 1) {
      scratch.play()
    } else {
      suspense.play();
    }
  }

  render() {
    return (
      <div style={{"position":"absolute","display":"flex", "justifyContent":"Center"}}>
        <img src={skin} alt="Skin" style={{"height": "60%", "width":"60%", "marginTop": "1%", "zIndex":"100"}}/>
        <WinningNumbers 
          winningNumbers={this.state.winningNumbers}
          handleWinningNumberClick={this.handleWinningNumberClick.bind(this)}
        />
        <YourNumbers 
          yourNumbers={this.state.yourNumbers}
        />
        <YourNumbersButtons 
          yourNumbers={this.state.yourNumbers}
          handleYourNumberPrizeButtonClick={this.handleYourNumberPrizeButtonClick.bind(this)}
          handleYourNumberNumberButtonClick={this.handleYourNumberNumberButtonClick.bind(this)}
        />
        <YourNumbersButtonsClicked 
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