const Gameboard = (() => {
    //Array to hold game moves
        let ary = ['','','','','','','','',''];
    
    const cells = document.querySelectorAll('.cellP')

    const resetBtn = document.getElementById('resetBtn');

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


    const resetGame = () => {
        resetBtn.addEventListener('click', () => {
            startGame();
            })
    };

    const log = () => {
        logAry.addEventListener('click', () => {
            console.log(ary)
        })
    };

    return { checkForWinner, ary, resetGame, log };
})();

const PlayGame = (() => {
    let x;

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
                if(cell.id === cellOne.id) {
                    if (Gameboard.ary[0] == '') {
                    Gameboard.ary.splice(0, 1, 'X');
                    cellP1.innerHTML = `${Gameboard.ary[0].toString()}`;
                    } else {
                        return;
                    }
                    x = 0;
                } else if (cell.id === cellTwo.id) {
                    if (Gameboard.ary[1] == '') {
                    Gameboard.ary.splice(1, 1, 'X');
                    cellP2.innerHTML = `${Gameboard.ary[1].toString()}`;
                    } else {
                        return;
                    }
                    x = 1;
                } else if (cell.id === cellThree.id) {
                    if (Gameboard.ary[2] == '') {
                    Gameboard.ary.splice(2, 1, 'X');
                    cellP3.innerHTML = `${Gameboard.ary[2].toString()}`;
                    } else {
                        return;
                    }
                    x = 2;
                } else if (cell.id === cellFour.id) {
                    if (Gameboard.ary[3] == '') {
                    Gameboard.ary.splice(3, 1, 'X');
                    cellP4.innerHTML = `${Gameboard.ary[3].toString()}`;
                    } else {
                        return;
                    }
                    x = 3;
                } else if (cell.id === cellFive.id) {
                    if (Gameboard.ary[4] == '') {
                    Gameboard.ary.splice(4, 1, 'X');
                    cellP5.innerHTML = `${Gameboard.ary[4].toString()}`;
                    } else {
                        return;
                    }
                    x = 4;
                } else if (cell.id === cellSix.id) {
                    if (Gameboard.ary[5] == '') {
                    Gameboard.ary.splice(5, 1, 'X');
                    cellP6.innerHTML = `${Gameboard.ary[5].toString()}`;
                    } else {
                        return;
                    }
                    x = 5;
                } else if (cell.id === cellSeven.id) {
                    if (Gameboard.ary[6] == '') {
                    Gameboard.ary.splice(6, 1, 'X');
                    cellP7.innerHTML = `${Gameboard.ary[6].toString()}`; 
                    } else {
                        return;
                    }
                    x = 6;
                } else if (cell.id === cellEight.id) {
                    if (Gameboard.ary[7] == '') {
                    Gameboard.ary.splice(7, 1, 'X');
                    cellP8.innerHTML = `${Gameboard.ary[7].toString()}`;
                    } else {
                        return;
                    }
                    x = 7;
                } else if (cell.id === cellNine.id) {
                    if (Gameboard.ary[8] == '') {
                    Gameboard.ary.splice(8, 1, 'X');
                    cellP9.innerHTML = `${Gameboard.ary[8].toString()}`; 
                    } else {
                        return;
                    }
                    x = 8;
                }
            })
        })
    }
    return { click, x };
})();

const Players = (name, piece) => {

}


Gameboard.resetGame();
Gameboard.log();
PlayGame.click();
