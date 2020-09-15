handleYourNumberNumberButtonClick(e, i, j) {
    const number = this.state.yourNumbers[i][j].number;
    let numberStatus = this.state.yourNumbers[i][j].status[0];
    let newNumberStatus = numberStatus;
    let prizeStatus = this.state.yourNumbers[i][j].status[1];
    let newPrizeStatus = prizeStatus;
    let gameStatus = this.state.yourNumbers[i][j].status[2];
    let newGameStatus = gameStatus;
    let newUnclaimedPrizes = this.state.unclaimedPrizes;
    let newYourNumbers = this.state.yourNumbers;

    const scratch = new Audio(scratchSound);
    const uncertain = new Audio(bwongSound);
    const win = new Audio(winSound);
    const loss = new Audio(lossSound);
    const mysteryPrize = new Audio(mysteryPrizeSound) 

    if(gameStatus === 'uncertain') {
      if(numberStatus === 0 && prizeStatus === 0) {
        newPrizeStatus++;
        scratch.play();
        setTimeout(() => {mysteryPrize.play()}, 700);
      } else if(numberStatus === 1 && prizeStatus === 0) {
        newPrizeStatus++;
        mysterySound.play();
      } else if(numberStatus === 0 && prizeStatus === 1) {
        // TODO => OPEN PRIZE SHOWCASE
        alert('OPEN PRIZE SHOWCASE')
        mysterySound.play();
      } else if(numberStatus === 1 && prizeStatus === 1) {
          newPrizeStatus++;
          newNumberStatus++;
        // TODO => OPEN PRIZE SHOWCASE
        alert('OPEN PRIZE SHOWCASE')
        mysterySound.play();
      } else if(numberStatus === 2 && prizeStatus === 2) {
        // TODO => OPEN PRIZE SHOWCASE
        alert('OPEN PRIZE SHOWCASE')
        mysterySound.play();
      }
     } else if(gameStatus === 'loss') {
       newPrizeStatus = 2;
       newNumberStatus = 2;
       lossSound.play();
       if(prizeStatus >= 1) {
         // TODO => OPEN PRIZE SHOWCASE
         alert('OPEN PRIZE SHOWCASE')
       }
     } else if(gameStatus === 'win') {
       newPrizeStatus = 2;
       newNUmberStatus = 2;
       winSound.play();
       if(prizeStatus >= 1) {
           newUnclaimedPrizes[i][j] = false;
           alert('OPEN PRIZE SHOWCASE')
         // TODO => OPEN PRIZE SHOWCASE
       }
     }

    newYourNumbers[i][j].status = [newNumberStatus, newPrizeStatus, newGameStatus];

    this.setState({
      yourNumbers: newYourNumbers,
      unclaimedPrizes: newUnclaimedPrizes,
    })
  }