THIS FILE DESCRIBES THE LOGIC DICTATING THE STATE OF A PARTICULAR YourNumber WHEN THAT YourNumber'S YourNumberNumberButton OR YourNumberPrizeButton IS CLICKED

THIS LOGIC USED IN Scratchy.jsx'S HandleYourNumberNumberButtonClick AND HandleYourNumberPrizeButtonClick PROPERTIES. 
    - SOUND EFFECTS ARE EVOKED FROM WITHIN THESE FUCNTIONS.
    - RENDERING LOGIC (RELEVANT TO CONDITIONAL RENDERING, BUTTON ANIMATION, UNCLAIMED PRIZE ANIMATION) IS HANDLED INSIDE INDIVIDUAL COMPONENTS, BASED ON THE STATE AS SET BY THESE FUNCTIONS.

____________________________________________________________________________________________________

status = [numberStatus, prizeStatus, gameStatus]

List of possible numberStatus:
0
1
2

List of possible prizeStatus:
0
1
2

List of possible gameStatus:
'uncertain'
'loss'
'win'

List of all possible combinations:
[0, 0, 'uncertain']
[1, 0, 'uncertain']
[0, 1, 'uncertain']
[1, 1, 'uncertain']
[2, 2, 'uncertain']
[1, 0, 'loss']
[1, 1, 'loss']
[2, 2, 'loss']
[1, 0, 'win']
[1, 1, 'win']
[2, 2, 'win']

____________________________________________________________________________________________________

Logic for YourNumber YourNumberNumberButton and YourNumberPrizeButton clicks when gameStatus is 'uncertain':

__________________________________________________
A = [0, 0, 'uncertain'] 
    OPTION 1) CLICK NUMBER:
        a) Check if number exists in winningNumbersClicked:
            - if yes, newState = I = [1, 0, 'win']
            - if no:
                - if all winningNumbers already scratched, newState = F = [1, 0, 'loss']
                - else (meaning, if all winningNumbers NOT already scratched), newState = B = [1, 0, 'uncertain'] + push number to yourNumbersClicked
        b) Play scratch sound
        c) If newState = I
                -play win sound
           else if newState = F
                - play loss sound
           else if newState = B
                - play bwong sound
        d) setState to be newState as assigned in step a
           
    OPTION 2) CLICK PRIZE:
        a) Play scratch sound
        b) Play mystery sound
        c) setState to C = [0, 1, 'uncertain']

__________________________________________________
B = [1, 0, 'uncertain']
    OPTION 1) CLICK NUMBER:
        a) Play mystery sound
        c) setState to D = [1, 1, 'uncertain']

    OPTION 2) CLICK PRIZE:
        b) Play mystery sound
        c) setState to D = [1, 1, 'uncertain']

__________________________________________________
C = [0, 1, 'uncertain']
    OPTION 1) CLICK NUMBER:
        a) Check if number exists in winningNumbersClicked:
            - if yes, newState = J = [1, 1, 'win']
            - if no:
                - if all winningNumbers already scratched, newState = G = [1, 1, 'loss']
                - else (meaning, if all winningNumbers NOT already scratched), newState = D = [1, 1, 'uncertain'] + push number to yourNumbersClicked
        b) If newState = J
                -play win sound
           else if newState = G
                - play loss sound
           else if newState = D
                - play bwong sound
        c) setState to be newState as assigned in step a

    OPTION 2) CLICK PRIZE:
        a) Play mystery sound
        b) Open prize display

__________________________________________________
D = [1, 1, 'uncertain']
    OPTION 1) CLICK NUMBER:
        a) Play bwong sound
        a) setState to E = [2, 2, 'uncertain']
        
    OPTION 2) CLICK PRIZE:
        a) Play mystery sound
        b) Open prize display
        C) setState to E = [2, 2, "uncertain"]

__________________________________________________
e = [2, 2, 'uncertain']
    OPTION 1) CLICK NUMBER:
        a) Play bwong sound

    OPTION 2) CLICK PRIZE:
        a) Play mystery sound
        b) Open prize display

____________________________________________________________________________________________________

Logic for YourNumber YourNumberNumberButton and YourNumberPrizeButton clicks when gameStatus is 'loss':

__________________________________________________
F = [1, 0, 'loss']
    OPTION 1) CLICK NUMBER:
        a) Play loss sound
        b) setState to H = [2, 2, 'loss']

    OPTION 2) CLICK PRIZE:
        a) Play loss sound
        b) setState to H = [2, 2, 'loss']

__________________________________________________
G = [1, 1, 'loss']
    OPTION 1) CLICK NUMBER:
        a) Play loss sound
        b) setState to H = [2, 2, 'loss']

    OPTION 2) CLICK PRIZE:
        a) Play loss sound
        b) Open prize display
        c) setState to H = [2, 2, 'loss']
__________________________________________________
H = [2, 2, 'loss']
    OPTION 1) CLICK NUMBER:
        a) Play loss sound

    OPTION 2) CLICK PRIZE:
        a) Play loss sound
        b) Open prize display

____________________________________________________________________________________________________

Logic for YourNumber YourNumberNumberButton and YourNumberPrizeButton clicks when gameStatus is 'win':

__________________________________________________
I = [1, 0, 'win']
    OPTION 1: CLICK NUMBER:
        a) Play win sound
        b) setState to K = [2, 2, 'win']

    OPTION 2: CLICK PRIZE:
        a) Play win sound
        c) setState to K = [2, 2, 'win']

__________________________________________________
J = [1, 1, 'win']
    OPTION 1: CLICK NUMBER:
        a) Play win sound
        b) setState to K = [2, 2, 'win']

    OPTION 2: CLICK PRIZE:
        a) Play win sound
        b) Open prize display
        c) Remove from unclaimed prizes arr
        c) setState to K = [2, 2, 'win']

__________________________________________________
K = [2, 2, 'win']
    OPTION 1: CLICK NUMBER:
        a) Play win sound

    OPTION 2: CLICK PRIZE:
        a) Play win sound
        b) Remove from unclaimed prizes arr if necessary
        c) Open prize display