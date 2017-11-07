Tic Tac Toe Project
-------------------

For our first General Assembly project, I have built a web app that allows users
to sign in and play a game of tic tac toe.  The user must signup and sign in to
create the game and access the board.  The first player will always be X.  The
user may change their password and retrieve their win, loss and draw history at
any time.  They may also reset the board to start a new game at any time.
Signing out will reset the game board and send the user back to the sign in
screen.

I approached this project starting with the game itself, first building the
visual board and then the game logic that allows it to respond to clicks.
I laid out what the user would need to be able to do with the board: placing
X or O, detecting whether they had won, and the ability to start a new game.
After I had a functioning game, I started working on communication with the API.
I again set out all the functions the user would need to perform: sign-up,
sign-in, sign-out and retrieving their games.  As I did this, I also integrated
my previously written game logic with communication with the API so as to
properly record games.

When I cam across problems, I tried to work through my code backward to find the
issue and used console logs to understand how my code was behaving.  If I wanted
to find out how to do something, I found that google was usually able to direct
me to the correct resource.  I also sought the advice of my peers to see how
they had handled these issues.  When none of these methods produced a solution,
I submitted an issue to my instructors.

* URL: https://PDSamson.github.io/peters-tic-tac-toe

Technologies Used
-----------------

* Languages - HTML5, CSS3, Javascript, jQuery
* Text editor - Atom
* Bootstrap
* Webpack
* Github Repository

Wireframe
---------

![Alt text](https://i.imgur.com/OrrfaQ6.jpg)
