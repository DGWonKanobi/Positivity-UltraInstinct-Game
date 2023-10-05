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





// Example usage:
const randomNegative = getRandomNegative();
const randomPositive = getRandomPositive();

console.log("Random Negative: " + randomNegative);
console.log("Random Positive: " + randomPositive);













// ====================== PAINT INTIAL SCREEN ======================= //
// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', function () {
    //load the donkey on the shrek on page 
    saiyan = new Saiyan(100, 200, '#bad55', 50, 100);
    // donkey = new Crawler(10, 20, 'brown', 25, 25);

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


// function shrekAIMovement() {
//     // make a conditional for each direction
//     // first move the shrek up, then move to the right, then to the left, the down and repeat
//     console.log('Shrek AI');
//     moveUp();
//     moveUp();

//     setTimeout(() => {
//         moveRight();
//         moveRight();
//     }, 500);

//     setTimeout(() => {
//         moveDown();
//         moveDown();
//     }, 1000);

// }

// function moveUp() {
//     if (shrek.y - 10 >= 0) {
//         shrek.y -= 10;
//     } else {
//         shrek.y = 100
//     }
// }

// function moveRight() {
//     if (shrek.x + 10 <= game.width - shrek.width) {
//         shrek.x += 10;
//     } else {
//         shrek.x = 100;
//     }
// }

// function moveDown() {
//     if (shrek.y + 10 <= game.height - shrek.height) {
//         shrek.y += 10
//     } else {
//         shrek.y = 100;
//     }
// }

// function moveLeft() {
//     if (shrek.x - 10 >= 10) {
//         shrek.x -= 10
//     } else {
//         shrek.x = 100;
//     }
// }




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
        saiyan = new Crawler(randomX, randomY, randomColor, 50, 100);
    }, 1000);
    return true;
}

// ====================== GAME PROCESSES ======================= //
function gameLoop() {
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height)
    //display x and y coordinates for our donkey
    movement.textContent = `X: ${donkey.x}\nY: ${donkey.y}`;

    // check to see if shrek is alive
    if (shrek.alive) {
        // render the shrek
        shrek.render();
        // check for collision between donkey and shrek
        let hit = detectHit(donkey, shrek);


    }
    //render the donkey
    donkey.render();
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