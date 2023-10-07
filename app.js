// Game Flow
// ...

// User input

const negatives = ["Negativity", "Complaining", "Gossip", "Stress"];
const positives = ["Gratitude", "Abundance", "Health", "Positivity"];

function getRandomNegative() {
    const randomIndex = Math.floor(Math.random() * negatives.length);
    return negatives[randomIndex];
}

function getRandomPositive() {
    const randomIndex = Math.floor(Math.random() * positives.length);
    return positives[randomIndex];
}

//We can use the Math.random() function to generate a random number within the range of the array indices


const saiyanImage = document.querySelector('#saiyan')

const player = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    width: 50,
    height: 50,
    speed: 5
};


// Initialize game variables
let score = 0;
let lifeScore = 100; // You can set the initial life score as needed
let gameOver = false;


function drawPlayer() {
    ctx.fillStyle = "#ff5733"; // Saiyan character color (orange)
    ctx.fillRect(player.x, player.y, player.width, player.height);



    // Update and display life score
function updateLifeScore() {
    if (!gameOver) {
        
        lifeScore -= 0.1;

        // Display the updated life score
        document.getElementById("score").textContent = Math.round(lifeScore);

        // Check for game over condition
        if (lifeScore <= 0) {
            gameOver = true;
            endGame();
        }
    }
}


// Handle the end of the game
function endGame() {
    // Implement game over logic here
    // Display a message, reset the game, etc.
}

// Start the game loop
gameLoop();

// ====================== PAINT INTIAL SCREEN ======================= //
// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', function () {
    //load the saiyan on the game opage 
    saiyan = new Saiyan(100, 200, '#bad55', 50, 100);
    

    let runGame = setInterval(gameLoop, 60);
})
document.addEventListener('keydown', movementHandler);

// ====================== SETUP FOR CANVAS RENDERING ======================= //
// 2D rendering context for canvas element
// This is used for drawing shapes, text, images, etc.
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

// ====================== ENTITIES ======================= //
class Saiyan {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;


        this.render = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}
// let testCrawler = new Crawler(150, 20, 'blue', 200, 200);
// testCrawler.render();

// KEYBOARD LOGIC

function movementHandler(e) {

    // make a conditional for each direction
    if (e.key === 'w' || e.key === 'ArrowUp') {
        saiyan.y - 10 >= 0 ? (saiyan.y -= 10) : null;
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        saiyan.y + 10 <= game.height - saiyan.height ? (saiyan.y += 10) : null;
    } else if (e.key === 'a' || e.key === 'ArrowLeft') {
        saiyan.x - 10 >= 0 ? (saiyan.x -= 10) : null;
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
        saiyan.x + 10 <= game.width - saiyan.width ? (saiyan.x += 10) : null;
    }

}



// ====================== HELPER FUNCTIONS ======================= //
function addNewSaiyan() {
    saiyan.alive = false;
    //use setTime function createa new Shrek after1 second ( 1000 milliseconds)
    setTimeout(function () {
        let randomX = Math.floor(Math.random() * game.width - 40);
        let randomY = Math.floor(Math.random() * game.width - 80)
        // random color
        const colors = ['pink', 'purple', 'red', 'cyan', 'magenta', 'teal', 'green'];
        let randomIndex = Math.floor(Math.random() * colors.length - 1);
        let randomColor = colors[randomIndex];
        // create new Shrek
        saiyan = new Saiyan(randomX, randomY, randomColor, 50, 100);
    }, 1000);
    return true;
}

// ====================== GAME PROCESSES ======================= //
function gameLoop() {
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height)
    //display x and y coordinates for our donkey
    movement.textContent = `X: ${saiyan.x}\nY: ${saiyan.y}`;

    // check to see if shrek is alive
    if (saiyan.alive) {
        // render the shrek
        saiyan.render();
        // check for collision between donkey and shrek
        let hit = detectHit(donkey, shrek);


    }
    //render the donkey
    saiyan.render();
}
// ====================== COLLISION DETECTION ======================= //

function detectHit(player, opp) {
    let hitTest = (
        player.y + player.height > opp.y && //
        player.y < opp.y + opp.height &&
        player.x + player.width > opp.x && //
        player.x < opp.x + opp.width
    );
    console.log(hitTest);
    if (hitTest) {
        //add 100 points to current score
        let newScore = Number(score.textContent) + 100;
        console.log(score.textContent);
        score.textContent = newScore;
        // return a new Shrek with the addNewShrek function
        return addNewSaiyan();
    } else {
        return false;
    }
}