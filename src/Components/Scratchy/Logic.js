// YourNumbers

// YourNumbers posible states for uncertain status:
[numberStatus, prizeStatus, gameStatus]

a = [0, 0, "uncertain"]
    OPTION 1) CLICK NUMBER:
        a) check for change in gameStatus (does num appear in winning nums) and prepare for setState update if necessary
        b) initiate scratch animation, play scratch sound + appropriate sound
        c) setState - if certain loss, now becomes f
           setState - if certain win, now becomes i + prize moves to unclaimed prizes
           setState - if still uncertain, becomes b + move to uncertain clicked arr
           
    OPTION 2) CLICK PRIZE:
        a) initiate scratch animation, play scratch sound + play mystery sound
        b) setState - moves to c

b = [1, 0, "uncertain"]
    option 1) click number:
        a) prepare to increment PRIZE status
        b) play mystery sound
        c) setState - moves to d
    option 2) click prize:
        a) prepare to increment PRIZE status
        b) play mystery sound
        c) setState - moves to d

c = [0, 1, "uncertain"]
    option 1) click number:
        a) check for change in gameStatus (does num appear in winning nums) and prepare for setState update if necessary
        b) initiate scratch animation, play scratch sound + appropriate sound
        c) setState - if loss certain, becomes g
           setState - if win certain, becomes j + prize moves to unclaimed prizes
           setState - if uncertain, becomes d, move to uncertain clicked arr
    option 2) click prize:
        a) play mystery sound + open prize display

d = [1, 1, "uncertain"]
    option 1) click number:
        a) play bwong sound
        a) setState to [2, 2, "uncertain"]
    option 2) click prize:
        a) play mystery sound + open prize display
        b) setState to [2, 2, "uncertain"]

e = [2, 2, "uncertain"]
    option 1) click number:
        a) play bwong sound
    option 2) click prize:
        a) play mystery sound + open prize display

//YourNUmbers possible states for loss status:

f = [1, 0, "loss"]
g = [1, 1, "loss"]
h = [2, 2, "loss"]

//YourNumbers - possible states for win status:

i = [1, 0, "win"]
j = [1, 1, "win"]
k = [2, 2, "win"]

a b c d e f g h i j  k
1 2 3 4 5 6 7 8 9 10 11


rendering
sound effects
animations
