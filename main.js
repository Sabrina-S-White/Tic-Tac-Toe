const reset = document.getElementById('resetBtn');
const start = document.getElementById('start');

const Gameboard = (() => {
    let x = 0;
    
    //Array to hold game moves
        let ary = ['','','','','','','','',''];
    
    const cells = document.querySelectorAll('.cellP')

    const logAry = document.getElementById('log');

    const checkForWinner = () => {
        for (i = 0; i < ary.length; i++) {
            
        }
    }

    const startGame = () => {
        cells.forEach(cell => {
            cell.textContent = '';
        },
        ary.splice(0, 9));
        ary.push('','','','','','','','','');
        return;
    }

    const log = () => {
        logAry.addEventListener('click', () => {
            console.log(ary)
        })
    };

    return { checkForWinner, ary, log, startGame, x };
})();

const PlayGame = (() => {
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

    // Game tile <p> elements to inject HTML into.
        const cellP1 = document.getElementById('cellP1');
        const cellP2 = document.getElementById('cellP2');
        const cellP3 = document.getElementById('cellP3');
        const cellP4 = document.getElementById('cellP4');
        const cellP5 = document.getElementById('cellP5');
        const cellP6 = document.getElementById('cellP6');
        const cellP7 = document.getElementById('cellP7');
        const cellP8 = document.getElementById('cellP8');
        const cellP9 = document.getElementById('cellP9');

    const click = () => {
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if (Gameboard.x == 0) {
                    if(cell.id === cellOne.id) {
                        if (Gameboard.ary[0] == '') {
                        Gameboard.ary.splice(0, 1, 'X');
                        cellP1.innerHTML = `${Gameboard.ary[0].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 1;
                    } else if (cell.id === cellTwo.id) {
                        if (Gameboard.ary[1] == '') {
                        Gameboard.ary.splice(1, 1, 'X');
                        cellP2.innerHTML = `${Gameboard.ary[1].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 1;
                    } else if (cell.id === cellThree.id) {
                        if (Gameboard.ary[2] == '') {
                        Gameboard.ary.splice(2, 1, 'X');
                        cellP3.innerHTML = `${Gameboard.ary[2].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 1;
                    } else if (cell.id === cellFour.id) {
                        if (Gameboard.ary[3] == '') {
                        Gameboard.ary.splice(3, 1, 'X');
                        cellP4.innerHTML = `${Gameboard.ary[3].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 1;
                    } else if (cell.id === cellFive.id) {
                        if (Gameboard.ary[4] == '') {
                        Gameboard.ary.splice(4, 1, 'X');
                        cellP5.innerHTML = `${Gameboard.ary[4].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 1;
                    } else if (cell.id === cellSix.id) {
                        if (Gameboard.ary[5] == '') {
                        Gameboard.ary.splice(5, 1, 'X');
                        cellP6.innerHTML = `${Gameboard.ary[5].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 1;
                    } else if (cell.id === cellSeven.id) {
                        if (Gameboard.ary[6] == '') {
                        Gameboard.ary.splice(6, 1, 'X');
                        cellP7.innerHTML = `${Gameboard.ary[6].toString()}`; 
                        } else {
                            return;
                        }
                        Gameboard.x = 1;
                    } else if (cell.id === cellEight.id) {
                        if (Gameboard.ary[7] == '') {
                        Gameboard.ary.splice(7, 1, 'X');
                        cellP8.innerHTML = `${Gameboard.ary[7].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 1;
                    } else if (cell.id === cellNine.id) {
                        if (Gameboard.ary[8] == '') {
                        Gameboard.ary.splice(8, 1, 'X');
                        cellP9.innerHTML = `${Gameboard.ary[8].toString()}`; 
                        } else {
                            return;
                        }
                        Gameboard.x = 1;
                    }
                } else if (Gameboard.x == 1) {
                    if(cell.id === cellOne.id) {
                        if (Gameboard.ary[0] == '') {
                        Gameboard.ary.splice(0, 1, 'O');
                        cellP1.innerHTML = `${Gameboard.ary[0].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 0;
                    } else if (cell.id === cellTwo.id) {
                        if (Gameboard.ary[1] == '') {
                        Gameboard.ary.splice(1, 1, 'O');
                        cellP2.innerHTML = `${Gameboard.ary[1].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 0;
                    } else if (cell.id === cellThree.id) {
                        if (Gameboard.ary[2] == '') {
                        Gameboard.ary.splice(2, 1, 'O');
                        cellP3.innerHTML = `${Gameboard.ary[2].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 0;
                    } else if (cell.id === cellFour.id) {
                        if (Gameboard.ary[3] == '') {
                        Gameboard.ary.splice(3, 1, 'O');
                        cellP4.innerHTML = `${Gameboard.ary[3].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 0;
                    } else if (cell.id === cellFive.id) {
                        if (Gameboard.ary[4] == '') {
                        Gameboard.ary.splice(4, 1, 'O');
                        cellP5.innerHTML = `${Gameboard.ary[4].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 0;
                    } else if (cell.id === cellSix.id) {
                        if (Gameboard.ary[5] == '') {
                        Gameboard.ary.splice(5, 1, 'O');
                        cellP6.innerHTML = `${Gameboard.ary[5].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 0;
                    } else if (cell.id === cellSeven.id) {
                        if (Gameboard.ary[6] == '') {
                        Gameboard.ary.splice(6, 1, 'O');
                        cellP7.innerHTML = `${Gameboard.ary[6].toString()}`; 
                        } else {
                            return;
                        }
                        Gameboard.x = 0;
                    } else if (cell.id === cellEight.id) {
                        if (Gameboard.ary[7] == '') {
                        Gameboard.ary.splice(7, 1, 'O');
                        cellP8.innerHTML = `${Gameboard.ary[7].toString()}`;
                        } else {
                            return;
                        }
                        Gameboard.x = 0;
                    } else if (cell.id === cellNine.id) {
                        if (Gameboard.ary[8] == '') {
                        Gameboard.ary.splice(8, 1, 'O');
                        cellP9.innerHTML = `${Gameboard.ary[8].toString()}`; 
                        } else {
                            return;
                        }
                        Gameboard.x = 0;
                    }
                }
            })
        })
    }
    return { click, x };
})();

const Player = (name, piece) => {
    const p1Btn = document.getElementById('p1Name');
    const p2Btn = document.getElementById('p2Name');

    const getName = () => {
        name1 = document.getElementById('name1').value;
        name2 = document.getElementById('name2').value;
        return name1, name2;
    };

    const p1p = () => {
        if (document.getElementById('x').checked) {
            piece = 'x'
        } else if (document.getElementById('o').checked) {
            piece = 'o'
        }
        return piece;
    }

    const p2p = () => {
        if (p1Piece == 'x') {
            piece = 'o';
        } else {
            piece = 'x';
        }
        return piece;
    }

    const p1Piece = p1p();

    const p2Piece = p2p();
    
    return { name, p1Piece, p2Piece }

    
}
Gameboard.log();
PlayGame.click();

reset.addEventListener('click', () => {
    Gameboard.startGame();
    Gameboard.x = 0;
    p1 = Player(document.getElementById('name1').value);
    p2 = Player(document.getElementById('name2').value);
    return p1, p2;
})

start.addEventListener('click', () => {
    p1 = Player(document.getElementById('name1').value);
    p2 = Player(document.getElementById('name2').value);
    Gameboard.startGame();
})