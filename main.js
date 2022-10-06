// TO DO 
// Add a failsafe for compchoice when all options are played


const reset = document.getElementById('resetBtn');
const start = document.getElementById('start');
const restartBtn = document.getElementById('gameRestartBtn');
const restartDiv = document.getElementById('gameRestart');

// radio buttons to determine if computer or human mode is enabled
const compChoice = document.getElementById('comp');
const humanChoice = document.getElementById('human');

const Gameboard = (() => {
    // Variable to enable computer mode 
    let isComp = 1;
    
    // Variables to control the flow of the game
    let round = 1;
    let p1Wins = 0;
    let p2Wins = 0;
    let playerX = 0;
    let gameWon = 0;

    //Array to hold game moves
    let ary = ['','','','','','','','',''];
    
    // Interactive elements and elements that are updated
    const cells = document.querySelectorAll('.cellP')
    const board = document.getElementById('board');
    const winText = document.getElementById('winText');
    const p1NameP = document.getElementById('p1NameP');
    const name1Label = document.getElementById('name1Label');
    const name1 = document.getElementById('name1');
    const p2NameP = document.getElementById('p2NameP');
    const name2Label = document.getElementById('name2Label');
    const name2 = document.getElementById('name2');

    // Constants for scoreboard setup 
    const p1ScoreName = document.getElementById('p1ScoreName');
    const p1Score = document.getElementById('p1Score');
    const p2ScoreName = document.getElementById('p2ScoreName');
    const p2Score = document.getElementById('p2Score');
    const roundCounter = document.getElementById('roundCounter');

    // Functions 

    // Checks for a winning game state -- explore breaking the check for win functionality out 
    // from the other stuff. Make a second function so you can check for wins multiple times without committing to updating the round etc. 
    const checkForWinner = () => {
        if (ary[0] == 'X' && ary[1] == 'X' && ary[2] == 'X' ||
            ary[3] == 'X' && ary[4] == 'X' && ary[5] == 'X' ||
            ary[6] == 'X' && ary[7] == 'X' && ary[8] == 'X' ||
            ary[0] == 'X' && ary[3] == 'X' && ary[6] == 'X' ||
            ary[1] == 'X' && ary[4] == 'X' && ary[7] == 'X' ||
            ary[2] == 'X' && ary[5] == 'X' && ary[8] == 'X' ||
            ary[0] == 'X' && ary[4] == 'X' && ary[8] == 'X' ||
            ary[2] == 'X' && ary[4] == 'X' && ary[6] == 'X') {
            if (Gameboard.playerX == 0) {
                document.getElementById('winText').innerHTML = `${document.getElementById('name1').value}` + ' is the winner of round ' + `${Gameboard.round}` + '!';
                board.classList.add('masc');
                ++Gameboard.p1Wins;
                Gameboard.playerX = 1;
                Gameboard.plusRound();
            } else if (Gameboard.playerX == 1) {
                if (document.getElementById('name2').value == '') {
                    document.getElementById('winText').innerHTML = 'Computer is the winner of round ' + `${Gameboard.round}` + '!';
                } else {
                  document.getElementById('winText').innerHTML = `${document.getElementById('name2').value}` + ' is the winner of round ' + `${Gameboard.round}` + '!';  
                }
                board.classList.add('masc');
                ++Gameboard.p2Wins
                Gameboard.playerX = 0
                Gameboard.plusRound();
            }
        } else if (
            ary[0] == 'O' && ary[1] == 'O' && ary[2] == 'O' ||
            ary[3] == 'O' && ary[4] == 'O' && ary[5] == 'O' ||
            ary[6] == 'O' && ary[7] == 'O' && ary[8] == 'O' ||
            ary[0] == 'O' && ary[3] == 'O' && ary[6] == 'O' ||
            ary[1] == 'O' && ary[4] == 'O' && ary[7] == 'O' ||
            ary[2] == 'O' && ary[5] == 'O' && ary[8] == 'O' ||
            ary[0] == 'O' && ary[4] == 'O' && ary[8] == 'O' ||
            ary[2] == 'O' && ary[4] == 'O' && ary[6] == 'O') {
            if (Gameboard.playerX == 0) {
                if (document.getElementById('name2').value == '') {
                    document.getElementById('winText').innerHTML = 'Computer is the winner of round ' + `${Gameboard.round}` + '!';
                } else {
                  document.getElementById('winText').innerHTML = `${document.getElementById('name2').value}` + ' is the winner of round ' + `${Gameboard.round}` + '!';  
                }
                board.classList.add('masc');
                ++Gameboard.p2Wins
                Gameboard.playerX = 1;
                Gameboard.gameWon = 1;
                Gameboard.plusRound();
            } else if (Gameboard.playerX == 1) {
                document.getElementById('winText').innerHTML = `${document.getElementById('name1').value}` + ' is the winner of round ' + `${Gameboard.round}` + '!';
                board.classList.add('masc');
                ++Gameboard.p1Wins;
                Gameboard.playerX = 0
                Gameboard.gameWon = 1;
                Gameboard.plusRound();
            }
        } else if (ary[0] != '' && ary[1] != '' && ary[2] != '' && ary[3] != '' && ary[4] != '' && ary[5] != '' && ary[6] != '' && ary[7] != '' && ary[8] != '') {
                document.getElementById('winText').innerHTML = 'Tie, press Reset Game to play again.'
        }
    }

    //Adds 1 to the round counter
    const plusRound = () => {
        ++Gameboard.round;
    }

    // Replaces input fields with input, or Computer if computer radio button is selected
    const changeName = () => {
        if (document.getElementById('comp').checked && name1.value != '') {
            name1Label.style.display = 'none';
            name1.style.display = 'none';
            p1NameP.innerHTML = `${document.getElementById('name1').value}`;
            p2NameP.style.display = 'none';
            name2.style.display = 'none';
            name2Label.innerHTML = 'Computer';
            Gameboard.resetGame();
        } else if (name1.value != '' && name2.value != '') {
            name1Label.style.display = 'none';
            name1.style.display = 'none';
            p1NameP.innerHTML = `${document.getElementById('name1').value}`;
            p2NameP.style.display = 'none';
            name2.style.display = 'none';
            name2Label.innerHTML = `${document.getElementById('name2').value}`;
            Gameboard.resetGame();
        } else {
            alert('Error, please enter names.');
            start.classList.remove('masc');
            reset.classList.add('masc');
        }
    }

    // Updates scoreboard and round counter 
    const setScoreBoard = () => {
        if (document.getElementById('comp').checked && name1.value != '') {
            p1ScoreName.innerHTML = `${document.getElementById('name1').value}`;
            p2ScoreName.innerHTML = 'Computer';
            p1Score.innerHTML = `${Gameboard.p1Wins}`;
            p2Score.innerHTML = `${Gameboard.p2Wins}`;
            roundCounter.innerHTML = `${Gameboard.round}`;
        } else if (name1.value != '' && name2.value != '') {
            p1ScoreName.innerHTML = `${document.getElementById('name1').value}`;
            p2ScoreName.innerHTML = `${document.getElementById('name2').value}`;
            p1Score.innerHTML = `${Gameboard.p1Wins}`;
            p2Score.innerHTML = `${Gameboard.p2Wins}`;
            roundCounter.innerHTML = `${Gameboard.round}`;
        }
    }

    // Handles changing player two from computer to human
    const switchToHuman = () => {
        document.getElementById('human').addEventListener('click', () => {
            p2NameP.style.display = 'flex';
            name2.style.display = 'flex';
            name2Label.innerHTML = 'Enter Name:';
            name2.removeAttribute('disabled');
            start.classList.remove('masc');
            Gameboard.isComp = 0;
        })
    }

    // Handles changing player two from human to computer 
    const switchToComp = () => {
        document.getElementById('comp').addEventListener('click', () => {
            name2.setAttribute('disabled', '');
            Gameboard.isComp = 1;
        })
    }

    // Resets ary and other game mechanic variables to beginning state 
    const resetGame = () => {
        cells.forEach(cell => {
            cell.textContent = '';
        },
        ary.splice(0, 9));
        ary.push('','','','','','','','','');
        winText.innerHTML = '';
        board.classList.remove('masc');
        PlayGame.x = 0;
    }

    // Applies wingame overlay and declares a winner
    const gameWinner = () => {
        if (Gameboard.p1Wins === 4) {
            restartDiv.style.display = 'flex';
            document.getElementById('gameWinText').innerHTML = `${document.getElementById('name1').value}` + ' is the winner of the game!';
        } else if (Gameboard.p2Wins === 4) {
            if (name2Label.innerHTML == 'Computer') {
                restartDiv.style.display = 'flex';
                document.getElementById('gameWinText').innerHTML = 'Computer is the winner of the game!';
            } else {
              restartDiv.style.display = 'flex';
              document.getElementById('gameWinText').innerHTML = `${document.getElementById('name2').value}` + ' is the winner of the game!';
            }
        } else return; 
    }

    const togglePlayerX = () => {
        if (Gameboard.playerX == 0) {
            Gameboard.playerX = 1;
        } else if (Gameboard.playerX == 1) {
            Gameboard.playerX = 0;
        }
    }

    return {    checkForWinner, 
                ary, 
                resetGame, 
                changeName, 
                switchToHuman, 
                checkForWinner, 
                switchToComp, 
                setScoreBoard, 
                playerX, 
                gameWinner,
                p1Wins,
                p2Wins,
                round,
                isComp,
                togglePlayerX,
                plusRound,
                gameWon
            };
})();

const PlayGame = (() => {
    // Counter to keep track of which piece to play next
    let x = 0;

    //Query selecter to listen to all game cells.
    const cells = document.querySelectorAll('.cell')

    // Cell divs for listening for game moves.
    const cellOne = document.getElementById('cellOne');
    const cellTwo = document.getElementById('cellTwo');
    const cellThree = document.getElementById('cellThree');
    const cellFour = document.getElementById('cellFour');
    const cellFive = document.getElementById('cellFive');
    const cellSix = document.getElementById('cellSix');
    const cellSeven = document.getElementById('cellSeven');
    const cellEight = document.getElementById('cellEight');
    const cellNine = document.getElementById('cellNine');

    // Game tile <p> elements to add HTML into.
    const cellP1 = document.getElementById('cellP1');
    const cellP2 = document.getElementById('cellP2');
    const cellP3 = document.getElementById('cellP3');
    const cellP4 = document.getElementById('cellP4');
    const cellP5 = document.getElementById('cellP5');
    const cellP6 = document.getElementById('cellP6');
    const cellP7 = document.getElementById('cellP7');
    const cellP8 = document.getElementById('cellP8');
    const cellP9 = document.getElementById('cellP9');
    
    const restartGame = () => {
        restartDiv.style.display = 'none';
        start.classList.remove('masc');
        Gameboard.resetGame();
        Gameboard.round = 1;
        Gameboard.p1Wins = 0;
        Gameboard.p2Wins = 0;
        name1Label.style.display = 'block';
        name1.style.display = 'block';
        p1NameP.innerHTML = '';
        p2NameP.style.display = 'block';
        name2.style.display = 'block';
        name2Label.innerHTML = '';
        p1Score.innerHTML = `${Gameboard.p1Wins}`;
        p2Score.innerHTML = `${Gameboard.p2Wins}`;
        roundCounter.innerHTML = `${Gameboard.round}`;
        reset.classList.add('masc');
        board.classList.add('masc');
    }

    const click = () => {
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if (Gameboard.isComp == 0) {
                    if (PlayGame.x == 0) {
                        if(cell.id === cellOne.id) {
                            if (Gameboard.ary[0] == '') {
                            Gameboard.ary.splice(0, 1, 'X');
                            cellP1.innerHTML = `${Gameboard.ary[0].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 1;
                        } else if (cell.id === cellTwo.id) {
                            if (Gameboard.ary[1] == '') {
                            Gameboard.ary.splice(1, 1, 'X');
                            cellP2.innerHTML = `${Gameboard.ary[1].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 1;
                        } else if (cell.id === cellThree.id) {
                            if (Gameboard.ary[2] == '') {
                            Gameboard.ary.splice(2, 1, 'X');
                            cellP3.innerHTML = `${Gameboard.ary[2].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 1;
                        } else if (cell.id === cellFour.id) {
                            if (Gameboard.ary[3] == '') {
                            Gameboard.ary.splice(3, 1, 'X');
                            cellP4.innerHTML = `${Gameboard.ary[3].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 1;
                        } else if (cell.id === cellFive.id) {
                            if (Gameboard.ary[4] == '') {
                            Gameboard.ary.splice(4, 1, 'X');
                            cellP5.innerHTML = `${Gameboard.ary[4].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 1;
                        } else if (cell.id === cellSix.id) {
                            if (Gameboard.ary[5] == '') {
                            Gameboard.ary.splice(5, 1, 'X');
                            cellP6.innerHTML = `${Gameboard.ary[5].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 1;
                        } else if (cell.id === cellSeven.id) {
                            if (Gameboard.ary[6] == '') {
                            Gameboard.ary.splice(6, 1, 'X');
                            cellP7.innerHTML = `${Gameboard.ary[6].toString()}`; 
                            } else {
                                return;
                            }
                            PlayGame.x = 1;
                        } else if (cell.id === cellEight.id) {
                            if (Gameboard.ary[7] == '') {
                            Gameboard.ary.splice(7, 1, 'X');
                            cellP8.innerHTML = `${Gameboard.ary[7].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 1;
                        } else if (cell.id === cellNine.id) {
                            if (Gameboard.ary[8] == '') {
                            Gameboard.ary.splice(8, 1, 'X');
                            cellP9.innerHTML = `${Gameboard.ary[8].toString()}`; 
                            } else {
                                return;
                            }
                            PlayGame.x = 1;
                        }
                        Gameboard.checkForWinner();
                        Gameboard.gameWinner();
                        Gameboard.setScoreBoard();
                    } else if (PlayGame.x == 1) {
                        if(cell.id === cellOne.id) {
                            if (Gameboard.ary[0] == '') {
                            Gameboard.ary.splice(0, 1, 'O');
                            cellP1.innerHTML = `${Gameboard.ary[0].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 0;
                        } else if (cell.id === cellTwo.id) {
                            if (Gameboard.ary[1] == '') {
                            Gameboard.ary.splice(1, 1, 'O');
                            cellP2.innerHTML = `${Gameboard.ary[1].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 0;
                        } else if (cell.id === cellThree.id) {
                            if (Gameboard.ary[2] == '') {
                            Gameboard.ary.splice(2, 1, 'O');
                            cellP3.innerHTML = `${Gameboard.ary[2].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 0;
                        } else if (cell.id === cellFour.id) {
                            if (Gameboard.ary[3] == '') {
                            Gameboard.ary.splice(3, 1, 'O');
                            cellP4.innerHTML = `${Gameboard.ary[3].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 0;
                        } else if (cell.id === cellFive.id) {
                            if (Gameboard.ary[4] == '') {
                            Gameboard.ary.splice(4, 1, 'O');
                            cellP5.innerHTML = `${Gameboard.ary[4].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 0;
                        } else if (cell.id === cellSix.id) {
                            if (Gameboard.ary[5] == '') {
                            Gameboard.ary.splice(5, 1, 'O');
                            cellP6.innerHTML = `${Gameboard.ary[5].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 0;
                        } else if (cell.id === cellSeven.id) {
                            if (Gameboard.ary[6] == '') {
                            Gameboard.ary.splice(6, 1, 'O');
                            cellP7.innerHTML = `${Gameboard.ary[6].toString()}`; 
                            } else {
                                return;
                            }
                            PlayGame.x = 0;
                        } else if (cell.id === cellEight.id) {
                            if (Gameboard.ary[7] == '') {
                            Gameboard.ary.splice(7, 1, 'O');
                            cellP8.innerHTML = `${Gameboard.ary[7].toString()}`;
                            } else {
                                return;
                            }
                            PlayGame.x = 0;
                        } else if (cell.id === cellNine.id) {
                            if (Gameboard.ary[8] == '') {
                            Gameboard.ary.splice(8, 1, 'O');
                            cellP9.innerHTML = `${Gameboard.ary[8].toString()}`; 
                            } else {
                                return;
                            }
                            PlayGame.x = 0;
                        }
                        Gameboard.checkForWinner();
                        Gameboard.gameWinner();
                        Gameboard.setScoreBoard();
                    } 
                } else if (Gameboard.isComp == 1) {
                    if (Gameboard.playerX == 0) {

                        //Remove playgame.x and just use Gameboard.playerX for computer switching? Currently am struggling to get player1 to have access to 'O' after first round vs comp. 
                            if(cell.id === cellOne.id) {
                                if (Gameboard.ary[0] == '') {
                                Gameboard.ary.splice(0, 1, 'X');
                                cellP1.innerHTML = `${Gameboard.ary[0].toString()}`;
                                } else return;
                            } else if (cell.id === cellTwo.id) {
                                if (Gameboard.ary[1] == '') {
                                Gameboard.ary.splice(1, 1, 'X');
                                cellP2.innerHTML = `${Gameboard.ary[1].toString()}`;
                                } else return;
                            } else if (cell.id === cellThree.id) {
                                if (Gameboard.ary[2] == '') {
                                Gameboard.ary.splice(2, 1, 'X');
                                cellP3.innerHTML = `${Gameboard.ary[2].toString()}`;
                                } else return;
                            } else if (cell.id === cellFour.id) {
                                if (Gameboard.ary[3] == '') {
                                Gameboard.ary.splice(3, 1, 'X');
                                cellP4.innerHTML = `${Gameboard.ary[3].toString()}`;
                                } else return;
                            } else if (cell.id === cellFive.id) {
                                if (Gameboard.ary[4] == '') {
                                Gameboard.ary.splice(4, 1, 'X');
                                cellP5.innerHTML = `${Gameboard.ary[4].toString()}`;
                                } else return;
                            } else if (cell.id === cellSix.id) {
                                if (Gameboard.ary[5] == '') {
                                Gameboard.ary.splice(5, 1, 'X');
                                cellP6.innerHTML = `${Gameboard.ary[5].toString()}`;
                                } else return;
                            } else if (cell.id === cellSeven.id) {
                                if (Gameboard.ary[6] == '') {
                                Gameboard.ary.splice(6, 1, 'X');
                                cellP7.innerHTML = `${Gameboard.ary[6].toString()}`; 
                                } else return;
                            } else if (cell.id === cellEight.id) {
                                if (Gameboard.ary[7] == '') {
                                Gameboard.ary.splice(7, 1, 'X');
                                cellP8.innerHTML = `${Gameboard.ary[7].toString()}`;
                                } else return;
                            } else if (cell.id === cellNine.id) {
                                if (Gameboard.ary[8] == '') {
                                Gameboard.ary.splice(8, 1, 'X');
                                cellP9.innerHTML = `${Gameboard.ary[8].toString()}`; 
                                } else return;
                            }
                            Gameboard.checkForWinner();
                            Gameboard.gameWinner();
                            Gameboard.setScoreBoard();
                            PlayGame.compMove();
                            PlayGame.x = 1;
                    } else if (Gameboard.playerX == 1) {
                            if(cell.id === cellOne.id) {
                                if (Gameboard.ary[0] == '') {
                                Gameboard.ary.splice(0, 1, 'O');
                                cellP1.innerHTML = `${Gameboard.ary[0].toString()}`;
                                } else {
                                    return;
                                }
                                PlayGame.x = 0;
                            } else if (cell.id === cellTwo.id) {
                                if (Gameboard.ary[1] == '') {
                                Gameboard.ary.splice(1, 1, 'O');
                                cellP2.innerHTML = `${Gameboard.ary[1].toString()}`;
                                } else {
                                    return;
                                }
                                PlayGame.x = 0;
                            } else if (cell.id === cellThree.id) {
                                if (Gameboard.ary[2] == '') {
                                Gameboard.ary.splice(2, 1, 'O');
                                cellP3.innerHTML = `${Gameboard.ary[2].toString()}`;
                                } else {
                                    return;
                                }
                                PlayGame.x = 0;
                            } else if (cell.id === cellFour.id) {
                                if (Gameboard.ary[3] == '') {
                                Gameboard.ary.splice(3, 1, 'O');
                                cellP4.innerHTML = `${Gameboard.ary[3].toString()}`;
                                } else {
                                    return;
                                }
                                PlayGame.x = 0;
                            } else if (cell.id === cellFive.id) {
                                if (Gameboard.ary[4] == '') {
                                Gameboard.ary.splice(4, 1, 'O');
                                cellP5.innerHTML = `${Gameboard.ary[4].toString()}`;
                                } else {
                                    return;
                                }
                                PlayGame.x = 0;
                            } else if (cell.id === cellSix.id) {
                                if (Gameboard.ary[5] == '') {
                                Gameboard.ary.splice(5, 1, 'O');
                                cellP6.innerHTML = `${Gameboard.ary[5].toString()}`;
                                } else {
                                    return;
                                }
                                PlayGame.x = 0;
                            } else if (cell.id === cellSeven.id) {
                                if (Gameboard.ary[6] == '') {
                                Gameboard.ary.splice(6, 1, 'O');
                                cellP7.innerHTML = `${Gameboard.ary[6].toString()}`; 
                                } else {
                                    return;
                                }
                                PlayGame.x = 0;
                            } else if (cell.id === cellEight.id) {
                                if (Gameboard.ary[7] == '') {
                                Gameboard.ary.splice(7, 1, 'O');
                                cellP8.innerHTML = `${Gameboard.ary[7].toString()}`;
                                } else {
                                    return;
                                }
                                PlayGame.x = 0;
                            } else if (cell.id === cellNine.id) {
                                if (Gameboard.ary[8] == '') {
                                Gameboard.ary.splice(8, 1, 'O');
                                cellP9.innerHTML = `${Gameboard.ary[8].toString()}`; 
                                } else {
                                    return;
                                }
                                PlayGame.x = 0;
                            }
                            Gameboard.checkForWinner();
                            Gameboard.gameWinner();
                            Gameboard.setScoreBoard();
                            PlayGame.compMove();
                            console.log('andhereisthis');
                        } }
                    }
            )})};
  
    const compMove = () => {
        let num = Math.floor(Math.random() * 9);
            if (Gameboard.playerX == 0) {
                if (Gameboard.ary[num] == '') {
                    Gameboard.ary.splice([num], 1, 'O');
                    if (num == 0) {
                        cellP1.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 1) {
                        cellP2.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 2) {
                        cellP3.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 3) {
                        cellP4.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 4) {
                        cellP5.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 5) {
                        cellP6.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 6) {
                        cellP7.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 7) {
                        cellP8.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 8) {
                        cellP9.innerHTML = `${Gameboard.ary[num].toString()}`;
                    }
                } else compMove();
            } else if (Gameboard.playerX == 1) {
                if (Gameboard.ary[num] == '') {
                    Gameboard.ary.splice([num], 1, 'X');
                    if (num == 0) {
                        cellP1.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 1) {
                        cellP2.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 2) {
                        cellP3.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 3) {
                        cellP4.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 4) {
                        cellP5.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 5) {
                        cellP6.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 6) {
                        cellP7.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 7) {
                        cellP8.innerHTML = `${Gameboard.ary[num].toString()}`;
                    } else if (num == 8) {
                        cellP9.innerHTML = `${Gameboard.ary[num].toString()}`;
                    }
                } else compMove();
            }
    };

    return { click, x, restartGame, compMove };
})();

const Player = (name, piece) => {
    const getName = () => {
        name1 = document.getElementById('name1').value;
        name2 = document.getElementById('name2').value;
        return name1, name2;
    };
    
    return { name }
}

//Funnctions and button event listeners 
//Listens for the human radio button being clicked
Gameboard.switchToHuman();
//Listens for the computer radio button being clicked
Gameboard.switchToComp();
//Listens for player inputs 
PlayGame.click();

//Resets game after the first round is done
reset.addEventListener('click', () => {
    Gameboard.resetGame();
    p1 = Player(document.getElementById('name1').value);
    p2 = Player(document.getElementById('name2').value);
    if (Gameboard.playerX == 1 && compChoice.checked) {
        PlayGame.compMove();
    }
    return p1, p2;
})

//Starts game, changes names
start.addEventListener('click', () => {
    p1 = Player(document.getElementById('name1').value);
    p2 = Player(document.getElementById('name2').value);
    start.classList.add('masc');
    reset.classList.remove('masc');
    Gameboard.setScoreBoard();
    Gameboard.changeName();
})

//Restarts game when best of 7 is over
restartBtn.addEventListener('click', () => {
    PlayGame.restartGame();
})