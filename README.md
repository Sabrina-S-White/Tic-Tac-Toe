# Tic-Tac-Toe

A Tic Tac Toe game made for The Odin Project lesson on Javascript modules and factory functions. 

INITIAL DESIGN - TO DO
DONE - Create a Gameboard module that holds a gameBoard array. 
    DONE - Return the array so the Game module can mark played squares. 
    Create a function that checks the board after each move. 
        
    DONE - Create a reset game function that resets all DOM elements. 

Create a Players factory function to generate the two player objects.
    DONE - X and O are players. Let user select which they want, two players, or computer takes the other. 

Create a Game module to control the gameplay.
    Game starts, and alternates between players. X starts. 
       DONE - As moves are made, you cannot play an occupied square. 
        Computer makes random moves to available squares. 
    DONE - Create a function inside this module that injects the gameBoard array into the HTML. Do this by making the array elements spaces that take up 1 sqaure on a 3x3 grid. 


PROGRESS THOUGHTS - NEXT STEPS 
DONE 1. I want to create a function that alternates which player is making moves. I think this will be amending the Playgame object, firing a check for what value X is at (0 or 1 for playerone and playertwo). 

DONE - 2. Create a CreatePlayer factory function that sets the name fields in the HTML (create a field that takes a name for player two as well). When the people click a button next to the name form it should remove the form and add the name in a fancy font. I'm going to add a function to Gameboard that replaces the form fields with the names, but the form fields need to be hidden not removed so when the game is reset it still keeps the old names. 

DONE - 1. Playertwo should have a radio button that lets you switch between computer and human. 

DONE - 1. These player objects should store which piece each is using. This information will be what ultimately tells PlayGame which symbol to inject into the HTML and ary. 

1. Make player 1 X by default, when reset game is clicked, switch X and O for player 1 and 2
    Game counter variable in GameBoard. This counts up to 10, alternating X and O for players between games. Make a score display as well and text to declare the eventual winner of the BO10. 

DONE - 1. Change text color in name input fields 

DONE - 1. Make winner text popup look prettier

1.  - STRETCH GOAL - Create a computer AI to play against that makes random moves. 
        2ca. Take the available spaces in the ary, then randomly choose one to play.

DONE - 1. Create a check for winner function in Gameboard. 
    If 3 in a row, winner is declared. 
    If no available moves, tie is declared.
