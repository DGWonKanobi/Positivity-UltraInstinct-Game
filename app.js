// Game Flow


// User input
const movement = document.querySelector('#movement');
const game = document.querySelector('#game');
const score = document.querySelector('#score');
const status = document.querySelector('#status');
const ctx = game.getContext('2d');
let saiyan;
let enemy;
let enemy2

let saiyanImage = document.querySelector("#goku")
let freezaImage = document.querySelector("#freeza")
let jirenImage = document.querySelector("#jiren")
let cellImage = document.querySelector("#cell")

const negatives = ["Negativity", "Complaining", "Gossip", "Stress"];
const positives = ["Gratitude", "Abundance", "Health", "Positivity"];

const objects = [];
function getRandomNegative() {
    const randomIndex = Math.floor(Math.random() * negatives.length);
    return negatives[randomIndex];
}

function getRandomPositive() {
    const randomIndex = Math.floor(Math.random() * positives.length);
    return positives[randomIndex];
}




// ====================== PAINT INTIAL SCREEN ======================= //
// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', function () {
    //load the saiyan on the game opage 
    saiyan = new Saiyan(100, 200, 'pink', 100, 50,);
    let randomNegative = getRandomNegative();

    enemy = new Enemies(50, 25, 60, 35, randomNegative);
    enemy2 = new Enemies(100, 50, 60, 35, randomNegative);


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
    constructor(x, y, color, width, height,) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;
        



    this.render = function () {
            // ctx.fillStyle = this.color;
            // ctx.fillRect(this.x, this.y, this.width, this.height)
            // ctx.fillStyle = 'blue';
            // ctx.fillText(this.message, this.x + 10, this.y + 20);
            ctx.drawImage(saiyanImage, this.x, this.y, this.width, this.height)

        }
    }
}
class Enemies {
    constructor(x, y, width, height, message,) {
        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;
        this.alive = true;
        this.message = message;
        



        this.render = function () {
            // ctx.fillStyle = "rgba(0, 0, 0, 0)";
            // ctx.fillRect(20, 15, 60, 35);
            // ctx.fillStyle = 'white';
            // ctx.font = '16px Arial';
            // ctx.fillText(this.message, 30, 20);
            ctx.drawImage(freezaImage, this.x, this.y, this.width, this.height)

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
    //display x and y coordinates for our saiyan
    movement.textContent = `X: ${saiyan.x}\nY: ${saiyan.y}`;



    saiyan.render();
    enemy.render();
    enemy2.render();
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