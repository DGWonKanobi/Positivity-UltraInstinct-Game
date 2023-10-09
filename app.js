// Game Flow


// User input
const gokuImage = document.querySelector("#goku");
const jirenImage = document.querySelector("#jiren");
const movement = document.querySelector('#movement');
const game = document.querySelector('#game');
const score = document.querySelector('#score');
const status = document.querySelector('#status');
const ctx = game.getContext('2d');
const audio = document.querySelector("#audio");
let goku;
let jiren;

// ====================== PAINT INTIAL SCREEN ======================= //
// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', function () {
    //load the saiyan on the game opage 
    goku = new Character(gokuImage, 100, 200, 'pink', 100, 50,);
    jiren = new Character(jirenImage, 10, 10, 'red', 75, 75)

    


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
class Character extends Saiyan {
    constructor(image, ...args) {
        super(...args)
        this.image = image;
        this.render = function () {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        }
    }
}



// let testCrawler = new Crawler(150, 20, 'blue', 200, 200);
// testCrawler.render();

// KEYBOARD LOGIC
function movementHandler(e) {

    // make a conditional for each direction
    if (e.key === 'w' || e.key === 'ArrowUp') {
        goku.y - 10 >= 0 ? (goku.y -= 10) : null;
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        goku.y + 10 <= game.height - goku.height ? (goku.y += 10) : null;
    } else if (e.key === 'a' || e.key === 'ArrowLeft') {
        goku.x - 10 >= 0 ? (goku.x -= 10) : null;
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
        goku.x + 10 <= game.width - goku.width ? (goku.x += 10) : null;
    }

}



// ====================== HELPER FUNCTIONS ======================= //
function addNewgoku() {
    
    //use setTime function createa new Shrek after1 second ( 1000 milliseconds)
    setTimeout(function () {
        let randomX = Math.floor(Math.random() * game.width - 40);
        let randomY = Math.floor(Math.random() * game.width - 80)
        // random color
        const colors = ['pink', 'purple', 'red', 'cyan', 'magenta', 'teal', 'green'];
        let randomIndex = Math.floor(Math.random() * colors.length - 1);
        let randomColor = colors[randomIndex];
        // create new Shrek
        goku = new Character(gokuImage, randomX, randomY, randomColor, 50, 100);
    }, 1000);
    return true;
}

// ====================== GAME PROCESSES ======================= //
function gameLoop() {
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height)
    //display x and y coordinates for our saiyan
    movement.textContent = `X: ${goku.x}\nY: ${goku.y}`;
if (goku.alive){
    goku.render()
    let hit = detectHit(jiren, goku)
}

    jiren.render();
    
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
        return addNewgoku();
    } else {
        return false;
    }
}