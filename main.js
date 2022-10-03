const reset = document.getElementById('resetBtn');
const start = document.getElementById('start');
const restartBtn = document.getElementById('gameRestartBtn');
const restartDiv = document.getElementById('gameRestart');

const Gameboard = (() => {
    // Variables to control the flow of the game
    let round = 1;
    let p1Wins = 0;
    let p2Wins = 0;
    let playerX = 0;

    //Array to hold game moves
    let ary = ['','','','','','','','',''];
    
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

    const checkForWinner = () => {
        if (ary[0] == 'X' && ary[1] == 'X' && ary[2] == 'X' ||
            ary[3] == 'X' && ary[4] == 'X' && ary[5] == 'X' ||
            ary[6] == 'X' && ary[7] == 'X' && ary[8] == 'X' ||
            ary[0] == 'X' && ary[3] == 'X' && ary[6] == 'X' ||
            ary[1] == 'X' && ary[4] == 'X' && ary[7] == 'X' ||
            ary[2] == 'X' && ary[5] == 'X' && ary[8] == 'X' ||
            ary[0] == 'X' && ary[4] == 'X' && ary[8] == 'X' ||
            ary[2] == 'X' && ary[4] == 'X' && ary[6] == 'X') {
            // Need to add in logic that checks which piece each player is in PlayGame and then provide the appropriate winning text. Also need to send a ping to PlayGame that we should track the win and up the round counter. 
            if (Gameboard.playerX == 0) {
                document.getElementById('winText').innerHTML = `${document.getElementById('name1').value}` + ' is the winner of round ' + `${Gameboard.round}` + '!';
                board.classList.add('masc');
                ++Gameboard.p1Wins;
                Gameboard.playerX = 1;
                ++Gameboard.round;
            } else if (Gameboard.playerX == 1) {
                if (document.getElementById('name2').value == '') {
                    document.getElementById('winText').innerHTML = 'Computer is the winner of round ' + `${Gameboard.round}` + '!';
                } else {
                  document.getElementById('winText').innerHTML = `${document.getElementById('name2').value}` + ' is the winner of round ' + `${Gameboard.round}` + '!';  
                }
                board.classList.add('masc');
                ++Gameboard.p2Wins
                Gameboard.playerX = 0
                ++Gameboard.round;
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
                ++Gameboard.round;
            } else if (Gameboard.playerX == 1) {
                document.getElementById('winText').innerHTML = `${document.getElementById('name1').value}` + ' is the winner of round ' + `${Gameboard.round}` + '!';
                board.classList.add('masc');
                ++Gameboard.p1Wins;
                Gameboard.playerX = 0
                ++Gameboard.round;
            }
        } else if (ary[0] != '' && ary[1] != '' && ary[2] != '' && ary[3] != '' && ary[4] != '' && ary[5] != '' && ary[6] != '' && ary[7] != '' && ary[8] != '') {
                document.getElementById('winText').innerHTML = 'Tie, press Reset Game to play again.'
        }
    }

    const changeName = () => {
        if (document.getElementById('comp').checked && name1.value != '') {
            name1Label.style.display = 'none';
            name1.style.display = 'none';
            p1NameP.innerHTML = `${document.getElementById('name1').value}`;
            p2NameP.style.display = 'none';
            name2.style.display = 'none';
            name2Label.innerHTML = 'Computer';

            cells.forEach(cell => {
                cell.textContent = '';
            },
            ary.splice(0, 9));
            ary.push('','','','','','','','','');
            winText.innerHTML = '';
            board.classList.remove('masc');
        } else if (name1.value != '' && name2.value != '') {
            name1Label.style.display = 'none';
            name1.style.display = 'none';
            p1NameP.innerHTML = `${document.getElementById('name1').value}`;
            p2NameP.style.display = 'none';
            name2.style.display = 'none';
            name2Label.innerHTML = `${document.getElementById('name2').value}`;

            cells.forEach(cell => {
                cell.textContent = '';
            },
            ary.splice(0, 9));
            ary.push('','','','','','','','','');
            winText.innerHTML = '';
            board.classList.remove('masc');
        } else {
            alert('Error, please enter names.');
        }
    }

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

    const switchToHuman = () => {
        document.getElementById('human').addEventListener('click', () => {
            p2NameP.style.display = 'flex';
            name2.style.display = 'flex';
            name2Label.innerHTML = 'Enter Name:';
            name2.removeAttribute('disabled');
            start.classList.remove('masc');
        })
    }

    const switchToComp = () => {
        document.getElementById('comp').addEventListener('click', () => {
            name2.setAttribute('disabled', '');
        })
    }

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
                round
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
                }
            Gameboard.checkForWinner();
            Gameboard.gameWinner();
            Gameboard.setScoreBoard();
            })
        })
    }
    return { click, x, restartGame };
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
Gameboard.switchToHuman();
Gameboard.switchToComp();
PlayGame.click();

reset.addEventListener('click', () => {
    Gameboard.resetGame();
    p1 = Player(document.getElementById('name1').value);
    p2 = Player(document.getElementById('name2').value);
    return p1, p2;
})

start.addEventListener('click', () => {
    p1 = Player(document.getElementById('name1').value);
    p2 = Player(document.getElementById('name2').value);
    Gameboard.changeName();
    start.classList.add('masc');
    reset.classList.remove('masc');
    Gameboard.setScoreBoard();
})

restartBtn.addEventListener('click', () => {
    PlayGame.restartGame();
})