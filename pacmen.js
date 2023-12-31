var pos = 0;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
var direction = 0;
const pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}
// Factory to make a PacMan at a random position with random velocity
function makePac() {
    // returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(200);
    // Add image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = 'PacMan1.png';
    newimg.width = 100;
    newimg.style.left = position.x + 'px';
    newimg.style.top = position.y + 'px';

    // add new Child image to game
    game.appendChild(newimg);
    // return details in an object
    return {
        position,
        velocity,
        newimg
    }
}

function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x + 'px';
        item.newimg.style.top = item.position.y + 'px';
    })
    setTimeout(update, 20);
}

function checkCollisions(item) {
    let imgWidth = item.newimg.width;
    let imgHeight = item.newimg.height;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    if (item.position.x + imgWidth >= screenWidth || item.position.x <= 0) {
        item.velocity.x *= -1; // Reverse X velocity to bounce off the edges
    }

    if (item.position.y + imgHeight >= screenHeight || item.position.y <= 0) {
        item.velocity.y *= -1; // Reverse Y velocity to bounce off the edges
    }
}

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}