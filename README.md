The Tournament Of Power
Game Type : Anime Battle

//Installation Instructions:
1. Open Terminal
2. cd to Desktop
3. cd to General Assembly Folder
4. cd to General Unit 1 Folder
5. cd to General Deliverables Folder
6. cd to Positivity Ultra Instict Folder
7. type open index.html and hit return to launch the Game screen.

//Game Summary  :

The Game is  one that pays hommage to one of the most Inspirational Anime Characters of our modern era, the Saiyan Warrior who goes by the name of Goku and Kakarot.

This Character has embodied the growth mindset  of wanting to become a better version of himself every day. The Saiyans affectionately referred to this as "gettting stronger", and we ,the fanbase, internalize it as chasing mastery.

In Goku's greatest challenge yet, he faces an Adversary by the name of Jiren in the Tournament of Power where he breaks through his limits, achieves the ultimate fighting technique only wielded by gods called Ultra Intinct. 

This game allows the player to play as the antagonist (Jiren) , flying toward our hero protaginist (goku) , observing the rendering of an intense final attack then allowing the user to observe the final battle that played out deep within the digital html-css-javascript universe.


//Overall Approach:

The Project Shrek Crawler was used as a guideline to construct the code for the game utilizing its manipulation of the canvas and using Classes to create characters that render on the canvas and can then be moved to iteract with eacother.

JavaScript breakdown:

We built our code with 1 app.js file.

We created constants and gave them the appropirate ids and classes to be able to manipulate the game screen and canvas.

We built a functions with an event listener to  load the  characters on to the game page.

Two Classes (Saiyan and Character) were constructed to reperesent both the two players in the game.

A function  movementHandler was constructed to control the movement of the player by keyboard arrows.

A function  detectHit was constructed to detect when the two players make contact which is then ran in the gameloop function.

A function  was created to regenerate the user player after contact with the computer user.
 
 //CSS
The page was styled via CSS targeting elements of the HTML page including html, body, h1, h2, canvas, #container and main.

//HTML Breakdown

The canvas element is hosted within a 'container' div to enable more design manipulations. Canvas element given an id of game.
 <!-- <canvas id="game"><!-- play it, a game --></canvas> -->

 Body Element :

Image tags were used to provide jpegs for the character pictures.

<!-- <img src="./img/jiren-image.jpeg" alt="goku" id="goku" style="display: none;">
    <img src="./img/UIkameameha.jpeg" alt="jiren" id="jiren" style="display: none;"> -->

A div element was used to create structure of game screen. Holding the canvas, game instructions as well as buttons.

<!-- <div id="container">
            <aside id="top-left">
                <h2>Welcome to the Tournament of Power!!</h2>
            </aside>
            <aside id="top-right">
                <h2 id="movement"></h2>
            </aside>
            <main>
                
                <canvas id="game"><!-- play it, a game --></canvas>
                <div class='screen' id="startScreen">
                    <div class="buttonBox">
                        
                        <div class="modes">
                            <button type='button' class='modeBtn' id='single'>  READY PLAYER ONE  </button>
                           
                        </div>
                    </div>
                    <button type='button' id='help'> PRESS THE FIRST PLAY BUTTON & GIVE YOURSELF SOME THEME MUSIC!!</button>
                </div>
    


Second Primary div:
Created to add Images and enhaces aethtic to the game page. with url links serving as the image sources.


<!-- <div class="container">
    <!-- <button type="button" id="startBtn" onclick="startGame()" > -->
        <img id='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfcaXDy2CXH9JdTVL8rkdBIGXoT51XQJ_nw&usqp=CAU"
    </button>
    <button type='button' class='' id=''>Computer</button>
    <!-- <button type="button" id="startBtn" onclick="startGame()" > -->
        <img id='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozpDd_rMps_YwjRZDAFN7fxGllqmmm1Uang&usqp=CAU">
    </button>
    <button type='button' class='' id=''>Player 1</button>
    <!-- <button type="button" id="startBtn" onclick="startGame()" > -->
        <img id='gameStart' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxPggwdgfqVjgdlaWlKxMl9ae8DX0N4lGxg&usqp=CAU">
    </button>
    
    </div>  -->
Media: 

Audio and Video tags were used to access local files to be displayed and played on the game screen as part of the game instructions.

<!-- <audio controls autoplay>
    <source src="/Users/darrengardner/Downloads/New Recording 5.m4a"  type="audio/mp4">
</audio>

<video controls  src="/Users/darrengardner/Downloads/tournament.mov" style="display: internal;">
</video> -->
 



