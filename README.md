# Tic-Tac-Toe

A Tic Tac Toe game made for The Odin Project lesson on Javascript modules and factory functions. 

DONE - Create a Gameboard module that holds a gameBoard array. 
    DONE - Return the array so the Game module can mark played squares. 
    Create a function that checks the board after each move. 
        If 3 in a row, winner is declared. 
        If no available moves, tie is declared.
    DONE - Create a reset game function that resets all DOM elements. 

Create a Players factory function to generate the two player objects.
    X and O are players. Let user select which they want, two players, or computer takes the other. 
    Let players enter their name(s).

Create a Game module to control the gameplay.
    Game starts, and alternates between players. X starts. 
        As moves are made, you cannot play an occupied square. 
        Computer makes random moves to available squares. 
    DONE - Create a function inside this module that injects the gameBoard array into the HTML. Do this by making the array elements spaces that take up 1 sqaure on a 3x3 grid. 


PROGRESS THOUGHTS - NEXT STEPS 
1. I want to create a function that alternates which player is making moves. I think this will be amending the Playgame object, firing a check for what value X is at (0 or 1 for playerone and playertwo). 

2. Create a CreatePlayer factory function that sets the name fields in the HTML (create a field that takes a name for player two as well). When the people click a button next to the name form it should remove the form and add the name in a fancy font. 
    2a. Playertwo should have a radio button that lets you switch between computer and human. 
    2b. These player objects should store which piece each is using. This information will be what ultimately tells PlayGame which symbol to inject into the HTML and ary. 
    2c. - STRETCH GOAL - Create a computer AI to play against that makes random moves. 
        2ca. Take the available spaces in the ary, then randomly choose one to play.




