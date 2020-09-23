import React from 'react';
import skin from '../../Images/skin.png';
import WinningNumbers from './WinningNumbers/WinningNumbers.jsx';
import WinningNumbersButtons from './WinningNumbersButtons/WinningNumbersButtons.jsx'
import WinningNumbersButtonsClicked from './WinningNumbersButtonsClicked/WinningNumbersButtonsClicked.jsx'
import YourNumbers from './YourNumbers/YourNumbers.jsx';
import YourNumbersButtons from './YourNumbersButtons/YourNumbersButtons.jsx'
import YourNumbersButtonsClicked from './YourNumbersButtonsClicked/YourNumbersButtonsClicked.jsx'
import PersonalMessage from './PersonalMessage/PersonalMessage.jsx'
import YourPrizesDisplayPanel from './YourPrizesDisplayPanel/YourPrizesDisplayPanel.jsx'
import UIfx from 'uifx';
import bwongSound from '../../Sounds/bwongSound.mp3';
import scratchSound from '../../Sounds/scratchSound.mp3';
import mysteryPrizeSound from '../../Sounds/suspense.mp3';
import winSound from '../../Sounds/kids-saying-yay-sound-effect_2.mp3';
import lossSound from '../../Sounds/answer-wrong.mp3';
import dissapointedSound from '../../Sounds/spongebob-fail.mp3'

class Scratchy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winningNumbers: [
        {number: 40, text: 'FRTY', clipPathIndex: 4, audioVisualStatus: 0, winStatus: 'uncertain'},
        {number: 30, text: 'TRTY', clipPathIndex: 3, audioVisualStatus: 0, winStatus: 'uncertain'},
        {number: 20, text: 'TNTY', clipPathIndex: 2, audioVisualStatus: 0, winStatus: 'uncertain'},
        {number: 9, text: 'NINE', clipPathIndex: 2, audioVisualStatus: 0, winStatus: 'uncertain'},
        {number: 7, text: 'SEVN', clipPathIndex: 2, audioVisualStatus: 0, winStatus: 'uncertain'},
      ],
      yourNumbers: [
        [
          {number: 40, text: 'FRTY', clipPathIndex: 2, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 9, text: 'NINE', clipPathIndex: 3, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 7, text: 'SEVN', clipPathIndex: 3, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 30, text: 'TRTY', clipPathIndex: 4, audioVisualStatus: 0, winStatus: 'uncertain'}
        ],
        [
          {number: 7, text: 'SEVN', clipPathIndex:4, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 9, text: 'NINE', clipPathIndex: 3, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 30, text: 'TRTY', clipPathIndex: 4, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 20, text: 'TNTY', clipPathIndex: 2, audioVisualStatus: 0, winStatus: 'uncertain'}
        ],
        [
          {number: 9, text: 'NINE', clipPathIndex: 4, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 9, text: 'NINE', clipPathIndex: 3, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 20, text: 'TNTY', clipPathIndex: 2, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 20, text: 'TNTY', clipPathIndex: 3, audioVisualStatus: 0, winStatus: 'uncertain'}
        ],
        [
          {number: 9, text: 'NINE', clipPathIndex: 0, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 30, text: 'TRTY', clipPathIndex: 2, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 40, text: 'FRTY', clipPathIndex: 3, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 7, text: 'SEVN', clipPathIndex: 4, audioVisualStatus: 0, winStatus: 'uncertain'}
        ],
        [
          {number: 30, text: 'TRTY', clipPathIndex: 1, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 30, text: 'TRTY', clipPathIndex: 2, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 30, text: 'TRTY', clipPathIndex: 3, audioVisualStatus: 0, winStatus: 'uncertain'},
          {number: 20, text: 'TNTY', clipPathIndex: 0, audioVisualStatus: 0, winStatus: 'uncertain'}
        ],
      ],
      prizes: [
        [
          {type: 'cryptocurrency', unit: "ETH", amount: 0.25, dollarAmount: 100, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 1.0, dollarAmount: 400, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 2.0, dollarAmount: 800, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 0.125, dollarAmount: 50, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'}
        ],
        [
          {type: 'cryptocurrency', unit: "ETH", amount: 0.25, dollarAmount: 100, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 1.0, dollarAmount: 400, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 2.0, dollarAmount: 800, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 0.125, dollarAmount: 50, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'}
        ],
        [
          {type: 'cryptocurrency', unit: "ETH", amount: 0.25, dollarAmount: 100, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 1.0, dollarAmount: 400, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 2.0, dollarAmount: 800, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 0.125, dollarAmount: 50, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'}
        ],
        [
          {type: 'cryptocurrency', unit: "ETH", amount: 0.25, dollarAmount: 100, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 1.0, dollarAmount: 400, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 2.0, dollarAmount: 800, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 0.125, dollarAmount: 50, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'}
        ],
        [
          {type: 'cryptocurrency', unit: "ETH", amount: 0.25, dollarAmount: 100, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 1.0, dollarAmount: 400, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 2.0, dollarAmount: 800, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'},
          {type: 'cryptocurrency', unit: "ETH", amount: 0.125, dollarAmount: 50, audioVisualStatus: 0, hasBeenClaimed: false, iconKey: 'eth'}
        ],
      ],
    }
  }

  handleWinningNumberButtonClick(e, i) {
    let newYourNumbers = this.state.yourNumbers;
    let newWinningNumbers = this.state.winningNumbers;


    const win = new Audio(winSound);
    const loss = new Audio(lossSound)
    const scratch = new Audio(scratchSound);
    const uncertain = new Audio(bwongSound);

    if(newWinningNumbers[i].audioVisualStatus < 2) {
      newWinningNumbers[i].audioVisualStatus++;
    }
      for(let k = 0; k < newYourNumbers.length; k++) {
        for(let l = 0; l < newYourNumbers[k].length; l++) {
          if(newWinningNumbers[i].number === newYourNumbers[k][l].number &&
            newYourNumbers[k][l].audioVisualStatus > 0 &&
            newYourNumbers[k][l].winStatus === 'uncertain') {
              newYourNumbers[k][l].winStatus = 'win';
              newWinningNumbers[i].winStatus = 'win';
          }
        }
      }

        const winningNumbersClickedCount = newWinningNumbers.reduce((acc, num) => {
          if(num.audioVisualStatus > 0) {
            acc++;
          }
          return acc;
        }, 0)

        const yourNumbersClickedCount = newYourNumbers.reduce((acc, numRow) => {
          acc += numRow.reduce((a, num) => {
            if(num.audioVisualStatus > 0) {
              a++;
              }
              return a;
          }, 0)
          return acc;
        }, 0)

        if(winningNumbersClickedCount === 5) {
          for(let k = 0; k < newYourNumbers.length; k++) {
            for(let l = 0; l < newYourNumbers[k].length; l++) {
              if(newYourNumbers[k][l].audioVisualStatus > 0 && newYourNumbers[k][l].winStatus === 'uncertain') {
                newYourNumbers[k][l].winStatus = 'loss'
              }
            }
          }
        }

        if(yourNumbersClickedCount === 20 && newWinningNumbers[i].winStatus === 'uncertain') {
          newWinningNumbers[i].winStatus = 'loss'; 
        }

      this.setState({
        winningNumbers: newWinningNumbers,
        yourNumbers: newYourNumbers
      })


    if(this.state.winningNumbers[i].audioVisualStatus === 1) {
      if(this.state.winningNumbers[i].winStatus === 'uncertain') {
        scratch.play();
      } else if(this.state.winningNumbers[i].winStatus === 'win') {
        scratch.play();
        setTimeout(() => {win.play()}, 700);
      } else if(this.state.winningNumbers[i].winStatus === 'loss') {
        scratch.play();
        setTimeout(() => {loss.play()}, 700);
      }
    } else {
      if(this.state.winningNumbers[i].winStatus === 'uncertain') {
        uncertain.play();
      } else if(this.state.winningNumbers[i].winStatus === 'win') {
        win.play();
      } else if(this.state.winningNumbers[i].winStatus === 'loss') {
        loss.play();
      }
    }
  }

  handleYourNumberNumberButtonClick(e, i, j) {
    const number = this.state.yourNumbers[i][j].number;
    let numberStatus = this.state.yourNumbers[i][j].audioVisualStatus;
    let newNumberStatus = numberStatus;
    let prizeStatus = this.state.prizes[i][j].audioVisualStatus;
    let newPrizeStatus = prizeStatus;
    let winStatus = this.state.yourNumbers[i][j].winStatus;
    let newWinStatus = winStatus;
    let winningNumbers = this.state.winningNumbers;
    let newWinningNumbers = winningNumbers;
    let newYourNumbers = this.state.yourNumbers;
    let newPrizes = this.state.prizes;

    
    const scratch = new Audio(scratchSound);
    const uncertain = new Audio(bwongSound);
    const win = new Audio(winSound);
    const loss = new Audio(lossSound);
    const mysteryPrize = new Audio(mysteryPrizeSound) 
    
    const winningNumbersClicked = winningNumbers.reduce((acc, num) => {
      if(num.audioVisualStatus > 0) {
        acc.push(num.number)
      }
      return acc;
    }, [])
  
    if(winStatus === 'uncertain') {
      if(numberStatus === 0 && prizeStatus === 0) {
        newNumberStatus++;
        if(winningNumbersClicked.indexOf(number) >= 0) {
          newWinStatus = 'win';
          newWinningNumbers.forEach((winningNumber) => {
            if(winningNumber.number === number) {
              winningNumber.winStatus = 'win'
            }
          })
          scratch.play();
          setTimeout(() => {win.play()}, 700);
        } else if(winningNumbersClicked.length === 5){
          newWinStatus = 'loss';
          scratch.play();
          setTimeout(() => {loss.play()}, 700);
        } else {
          scratch.play();
          setTimeout(() => {uncertain.play()}, 700);
        }
      } else if(numberStatus === 1 && prizeStatus === 0) {
        newPrizeStatus++;
        mysteryPrize.play();
      } else if(numberStatus === 0 && prizeStatus === 1) {
        newNumberStatus++;
        if(winningNumbersClicked.indexOf(number) >= 0) {
          newWinStatus = 'win';
          newWinningNumbers.forEach((winningNumber) => {
            if(winningNumber.number === number) {
              winningNumber.winStatus = 'win'
            }
          })
          win.play();
        } else if(winningNumbersClicked.length === 5){
          newWinStatus = 'loss';
          loss.play();
        } else {
          uncertain.play();
        }
      } else if(numberStatus === 1 && prizeStatus === 1) {
        newNumberStatus++;
        newPrizeStatus++;
        uncertain.play();
      } else if(numberStatus === 2 && prizeStatus === 2) {
        uncertain.play();
      }
     } else if(winStatus === 'loss') {
      newNumberStatus = 2;
      newPrizeStatus = 2;
      loss.play();
     } else if(winStatus === 'win') {
      newNumberStatus = 2;
      newPrizeStatus = 2;
      win.play();
      if(prizeStatus === 2) {
        // TODO OPEN PRIZE SHOWCASE
        alert('OPENING PRIZE SHOWCASE FROM NUMBER BUTTON CLICK')
        newPrizes[i][j].hasBeenClaimed = true;
      }
     }

    newYourNumbers[i][j].audioVisualStatus = newNumberStatus
    newYourNumbers[i][j].winStatus = newWinStatus;
    newPrizes[i][j].audioVisualStatus = newPrizeStatus;

    const viewedYourNumbersCount = newYourNumbers.reduce((acc, numberRow) => {
      acc += numberRow.reduce((a, number) => {
       if(number.audioVisualStatus > 0) {
         a++;
       } 
       return a;
      }, 0)
      return acc;
    }, 0)

    if(viewedYourNumbersCount === 20) {
      newWinningNumbers.forEach((newWinningNumber) => {
        if(newWinningNumber.winStatus !== 'win') {
          newWinningNumber.winStatus = 'loss';
        }
      })
    }

    this.setState({
      winningNumbers: newWinningNumbers,
      yourNumbers: newYourNumbers,
      prizes: newPrizes,
    })
  }


  handleYourNumberPrizeButtonClick(e, i, j) {
    let numberStatus = this.state.yourNumbers[i][j].audioVisualStatus;
    let newNumberStatus = numberStatus;
    let prizeStatus = this.state.prizes[i][j].audioVisualStatus;
    let newPrizeStatus = prizeStatus;
    let winStatus = this.state.yourNumbers[i][j].winStatus;
    let newYourNumbers = this.state.yourNumbers;
    let newPrizes = this.state.prizes;

    const scratch = new Audio(scratchSound);
    const uncertain = new Audio(bwongSound);
    const win = new Audio(winSound);
    const loss = new Audio(lossSound);
    const mysteryPrize = new Audio(mysteryPrizeSound) 

    if(winStatus === 'uncertain') {
      if(numberStatus === 0 && prizeStatus === 0) {
        newPrizeStatus++;
        scratch.play();
        setTimeout(() => {mysteryPrize.play()}, 700);
      } else if(numberStatus === 1 && prizeStatus === 0) {
        newPrizeStatus++;
        mysteryPrize.play();
      } else if(numberStatus === 0 && prizeStatus === 1) {
        // TODO => OPEN PRIZE SHOWCASE
        alert('OPEN PRIZE SHOWCASE')
        mysteryPrize.play();
      } else if(numberStatus === 1 && prizeStatus === 1) {
          newPrizeStatus++;
          newNumberStatus++;
        // TODO => OPEN PRIZE SHOWCASE
        alert('OPEN PRIZE SHOWCASE')
        mysteryPrize.play();
      } else if(numberStatus === 2 && prizeStatus === 2) {
        // TODO => OPEN PRIZE SHOWCASE
        alert('OPEN PRIZE SHOWCASE')
        mysteryPrize.play();
      }
     } else if(winStatus === 'loss') {
       newPrizeStatus = 2;
       newNumberStatus = 2;
       loss.play();
       if(prizeStatus >= 1) {
         // TODO => OPEN PRIZE SHOWCASE
         alert('OPEN PRIZE SHOWCASE')
       }
     } else if(winStatus === 'win') {
       newPrizeStatus = 2;
       newNumberStatus = 2;
       win.play();
       
       if(!this.state.prizes[i][j].hasBeenClaimed) {
         if(this.state.prizes[i][j].audioVisualStatus > 0) {
          newPrizes[i][j].hasBeenClaimed = true;
          alert('OPEN PRIZE SHOWCASE')
        // TODO => OPEN PRIZE SHOWCASE
         }
       }
     }

    newYourNumbers[i][j].audioVisualStatus = newNumberStatus;
    newPrizes[i][j].audioVisualStatus = newPrizeStatus;

    this.setState({
      yourNumbers: newYourNumbers,
      prizes: newPrizes,
    })
  }

  render() {
    return (
      <div style={{"position":"absolute","display":"flex", "justifyContent":"Center", "top": "6.5%"}}>
        <img src={skin} alt="Skin" style={{"height": "60%", "width":"60%", "marginTop": "1%", "zIndex":"100"}}/>
        <WinningNumbers 
          winningNumbers={this.state.winningNumbers}
        />
        <WinningNumbersButtons 
          winningNumbers={this.state.winningNumbers}
          handleWinningNumberButtonClick={this.handleWinningNumberButtonClick.bind(this)}
        />
        <WinningNumbersButtonsClicked 
          winningNumbers={this.state.winningNumbers}
        />
        <YourNumbers 
          yourNumbers={this.state.yourNumbers}
          prizes={this.state.prizes}
        />
        <YourNumbersButtons 
          yourNumbers={this.state.yourNumbers}
          prizes={this.state.prizes}
          handleYourNumberPrizeButtonClick={this.handleYourNumberPrizeButtonClick.bind(this)}
          handleYourNumberNumberButtonClick={this.handleYourNumberNumberButtonClick.bind(this)}
        />
        <YourNumbersButtonsClicked 
          yourNumbers={this.state.yourNumbers}
          prizes={this.state.prizes}
        />
        <PersonalMessage />
        <div style={{
          "display":"flex",
          "backgroundColor":"rgb(25, 24, 27)",
          "width":"27.4%",
          "marginTop":"1%"
        }}>
        </div>
        <YourPrizesDisplayPanel 
          yourNumbers={this.state.yourNumbers}
          prizes={this.state.prizes}
        />
      </div>
    )
  }
}

export default Scratchy;