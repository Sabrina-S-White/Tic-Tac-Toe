const Gameboard = (() => {
    //Array to hold game moves
        let ary = ['','','','','','','','',''];

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
    
    const cells = document.querySelectorAll('.cell')

    const resetBtn = document.getElementById('resetBtn');

    const logAry = document.getElementById('log');

    const checkForWinner = () => {
        for (i = 0; i < ary.length; i++) {
            
        }
    }

    const cellPop = () => {
        if (PlayGame.x == 0) {
            cellP1.innerHTML = `${Gameboard.ary[0].toString()}`
        }
    };

    const startGame = () => {
        cells.forEach(cell => {
            cell.textContent = '';
        },
        ary.splice(0, 9));
        ary.push('','','','','','','','','');
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

    return { checkForWinner, ary, resetGame, log, cellPop };
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
                    Gameboard.ary.splice(0, 1, 'X');
                    // cellP1.innerHTML = `${Gameboard.ary[0].toString()}`
                    console.log('1')
                    x = 0;
                    Gameboard.cellPop();
                } else if (cell.id === cellTwo.id) {
                    Gameboard.ary.splice(1, 1, 'X');
                    cellP2.innerHTML = `${Gameboard.ary[1].toString()}`
                    x = 1;
                } else if (cell.id === cellThree.id) {
                    Gameboard.ary.splice(2, 1, 'X');
                    cellP3.innerHTML = `${Gameboard.ary[2].toString()}`
                    x = 2;
                } else if (cell.id === cellFour.id) {
                    Gameboard.ary.splice(3, 1, 'X');
                    cellP4.innerHTML = `${Gameboard.ary[3].toString()}`
                    x = 3;
                } else if (cell.id === cellFive.id) {
                    Gameboard.ary.splice(4, 1, 'X');
                    cellP5.innerHTML = `${Gameboard.ary[4].toString()}`
                    x = 4;
                } else if (cell.id === cellSix.id) {
                    Gameboard.ary.splice(5, 1, 'X');
                    cellP6.innerHTML = `${Gameboard.ary[5].toString()}`
                    x = 5;
                } else if (cell.id === cellSeven.id) {
                    Gameboard.ary.splice(6, 1, 'X');
                    cellP7.innerHTML = `${Gameboard.ary[6].toString()}`
                    x = 6;
                } else if (cell.id === cellEight.id) {
                    Gameboard.ary.splice(7, 1, 'X');
                    cellP8.innerHTML = `${Gameboard.ary[7].toString()}`
                    x = 7;
                } else if (cell.id === cellNine.id) {
                    Gameboard.ary.splice(8, 1, 'X');
                    cellP9.innerHTML = `${Gameboard.ary[8].toString()}`
                    x = 8;
                }
            })
        })
    }
    return { click, x };
})();


Gameboard.resetGame();
Gameboard.log();
PlayGame.click();
Gameboard.cellPop();