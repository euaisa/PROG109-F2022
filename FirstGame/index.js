var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

var soundGameOver = "sounds/gameover.mp3"; //Game Over sound efx
var soundCaught = "sounds/caught.mp3"; // Caught sound efx
var soundWin = "sounds/win.wav"; // Win sound efx
var soundEfx = document.getElementById("soundEfx"); //Assign audio to soundEfx

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
    canvas.width = bgImage.width;
    canvas.height = bgImage.height;
    reset(true);
};
bgImage.src = "images/background.jpg";

// Border image L-R
var lrReady = false;
var lrImage = new Image();
lrImage.onload = function () {
    lrReady = true;
};
lrImage.src = "images/bottomHedge164.jpg"; // <--- add image source

// Border image B-T
var btReady = false;
var btImage = new Image();
btImage.onload = function () {
    btReady = true;
};
btImage.src = "images/bottomHedge121.jpg"; // <--- add image source


// Hero image
var heroReady = false;
var heroImage = new Image();
var heroWidth = 0;
var heroHeight = 0;
heroImage.onload = function () {
    // Setting the desired width and height of the image
    heroWidth = heroImage.width / 11;
    heroHeight = heroImage.height / 11;
    heroReady = true;
};
heroImage.src = "images/hero.png";


// Monster image
var monsterReady = false;
var monsterImage = new Image();
var monsterWidth = 0;
var monsterHeight = 0;
monsterImage.onload = function () {
    // Setting the desired width and height of the image
    monsterWidth = monsterImage.width / 10;
    monsterHeight = monsterImage.height / 10;
    monsterReady = true;
};
monsterImage.src = "images/monster.png";


// Shark image
var sharkReady = false;
var sharkImage = new Image();
var sharkWidth = 0;
var sharkHeight = 0;
sharkImage.onload = function () {
    // Setting the desired width and height of the image
    sharkWidth = sharkImage.width / 10;
    sharkHeight = sharkImage.height / 10;
    sharkReady = true;
};
sharkImage.src = "images/shark.png";


// Obstacle image
var obstacleReady = false;
var obstacleImage = new Image();
var obstacleWidth = 0;
var obstacleHeight = 0;
obstacleImage.onload = function () {
    //Setting the desired width and height of the image
    obstacleWidth = obstacleImage.width / 10;
    obstacleHeight = obstacleImage.height / 10;
    obstacleReady = true;
};
obstacleImage.src = "images/obstacle.png";



/// Game objects
var hero = {
    speed: 256, // movement in pixels per second
    x: null,
    y: null
};


var obstacle = {
    x: 300,
    y: 300
}

var obstacle2 = {
    x: 150,
    y: 300
};

var monster = {
    x: 200,
    y: 200
};

// Shark objects
var shark1 = {
    x: 500,
    y: 500, 
};

var shark2 = {
    x: 750,
    y: 750
};

var shark3 = {
    x: 0,
    y: 0
};

var monstersCaught = 0;
let died = false;

// Handle keyboard controls
var keysDown = {}; 

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

// Check if there's enough space between two characters
function checkDistance(character1, character2, minDistance) {
    var dx = character1.x - character2.x;
    var dy = character1.y - character2.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    return distance >= minDistance;
}

// Reset the game when the player catches a monster
var reset = function (resetHeroPosition) {
    // Reset hero position if resetHeroPosition is true
    if (resetHeroPosition) {
        hero.x = canvas.width / 2 - heroWidth / 2;
        hero.y = canvas.height / 2 - heroHeight / 2;
    }

    // Move the monster-treasure to a random position without overlapping obstacles
    let monsterOverlap;
    do {
        monsterOverlap = false;

        placeItem(monster, 65);

        if (
            monster.x <= (obstacle.x + obstacleWidth) &&
            obstacle.x <= (monster.x + monsterWidth) &&
            monster.y <= (obstacle.y + obstacleHeight) &&
            obstacle.y <= (monster.y + monsterHeight)
        ) {
            monsterOverlap = true;
            continue; // skip checking for the second obstacle since we already know it overlaps the first one
        }

        if (
            monster.x <= (obstacle2.x + obstacleWidth) &&
            obstacle2.x <= (monster.x + monsterWidth) &&
            monster.y <= (obstacle2.y + obstacleHeight) &&
            obstacle2.y <= (monster.y + monsterHeight)
        ) {
            monsterOverlap = true;
        }
    } while (monsterOverlap);


    // Move the obstacles to random positions ensuring there's enough space between them
    let enoughSpace;
    do {
        enoughSpace = true;

        placeItem(obstacle, 75);
        placeItem(obstacle2, 75);

        // Check if there's enough space between obstacles and the hero
        if (!checkDistance(hero, obstacle, 100) || !checkDistance(hero, obstacle2, 100)) {
            enoughSpace = false;
        }

        // Check if there's enough space between obstacles
        if (!checkDistance(obstacle, obstacle2, 100)) {
            enoughSpace = false;
        }
    } while (!enoughSpace);

    // Move the sharks to random positions
    placeItem(shark1, sharkHeight);
    placeItem(shark2, sharkHeight);
    placeItem(shark3, sharkHeight);
    
    // Reset died variable
    died = false;
};

// Generate random positions for the given character object
let placeItem = function(character, padding = 32) {
    if (character === shark1 || character === shark2 || character === shark3) {
        character.x = canvas.width - padding;
    } else {
        character.x = padding + Math.random() * (canvas.width - 2 * padding);
    }
    character.y = padding + Math.random() * (canvas.height - 2 * padding);
};



// Update game objects
var update = function (modifier) {

    // If the game is over, do not process key inputs
    if (!died) {
        // Calculate new positions based on key inputs
        var newX = hero.x;
        var newY = hero.y;

        if (38 in keysDown && hero.y > 32 + 4) { // holding up key
            newY -= hero.speed * modifier;
        }
        if (40 in keysDown && hero.y < canvas.height - (heroHeight + 32 + 4)) { // holding down key
            newY += hero.speed * modifier;
        }
        if (37 in keysDown && hero.x > (32 + 4)) { // holding left key
            newX -= hero.speed * modifier;
        }
        if (39 in keysDown && hero.x < canvas.width - (heroWidth + 32 + 4)) { // holding right key
    newX += hero.speed * modifier;
}

        // Check if the new position collides with any obstacle
        var collideObstacle1 = (
            newX <= (obstacle.x + obstacleWidth) &&
            obstacle.x <= (newX + heroWidth) &&
            newY <= (obstacle.y + obstacleHeight) &&
            obstacle.y <= (newY + heroHeight)
        );

        var collideObstacle2 = (
            newX <= (obstacle2.x + obstacleWidth) &&
            obstacle2.x <= (newX + heroWidth) &&
            newY <= (obstacle2.y + obstacleHeight) &&
            obstacle2.y <= (newY + heroHeight)
        );

        // Only update the hero's position if there is no collision and the game is not over
        if (!collideObstacle1 && !collideObstacle2 && !died) {
            hero.x = newX;
            hero.y = newY;
        }
    }
    
    // Move all sharks to the left
    shark1.x -= 1;
    shark2.x -= 1;
    shark3.x -= 1;

    // Check if any shark has reached the left edge of the canvas
    if (shark1.x + sharkWidth < 0) {
        shark1.x = canvas.width;
        shark1.y = Math.random() * (canvas.height - sharkHeight);
    }
    if (shark2.x + sharkWidth < 0) {
        shark2.x = canvas.width;
        shark2.y = Math.random() * (canvas.height - sharkHeight);
    }
    if (shark3.x + sharkWidth < 0) {
        shark3.x = canvas.width;
        shark3.y = Math.random() * (canvas.height - sharkHeight);
    }

    

    // Check if hero has caught the monster
    if (
        hero.x <= (monster.x + monsterWidth)
        && monster.x <= (hero.x + heroWidth)
        && hero.y <= (monster.y + monsterHeight)
        && monster.y <= (hero.y + heroHeight)
    ) 
    {
        ///play sound when touch
        soundEfx.src = soundCaught;
        soundEfx.play();
        monstersCaught++;       // keep track of our “score”

        // Increase hero's speed every time they catch 3 more treasures
        if (monstersCaught % 3 === 0) {
            hero.speed *= 1.2; // Increase the speed by 20%
        }

        reset(false);       // start a new cycle
          
    }

        // Check if hero collides with any shark
    if (
        hero.x <= (shark1.x + sharkWidth) &&
        shark1.x <= (hero.x + heroWidth) &&
        hero.y <= (shark1.y + sharkHeight) &&
        shark1.y <= (hero.y + heroHeight)
    ) {
        // Set the died flag to true
        died = true;
    }
    if (
        hero.x <= (shark2.x + sharkWidth) &&
        shark2.x <= (hero.x + heroWidth) &&
        hero.y <= (shark2.y + sharkHeight) &&
        shark2.y <= (hero.y + heroHeight)
    ) {
        // Set the died flag to true
        died = true;
    }
    if (
        hero.x <= (shark3.x + sharkWidth) &&
        shark3.x <= (hero.x + heroWidth) &&
        hero.y <= (shark3.y + sharkHeight) &&
        shark3.y <= (hero.y + heroHeight)
    ) {
        // Set the died flag to true
        died = true;
    }

    // If the player has died, show the alert and reset the game
    if (died) {
        // Change sound effect and play it
        soundEfx.src = soundGameOver;
        soundEfx.play();
        alert("Game Over");
        monstersCaught = 0;
        hero.speed = 256;
        keysDown = {}; // Clear the keysDown object
        died = false;
        reset(true);
    }

};


var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    if (lrReady) {
        var hedgePattern = ctx.createPattern(lrImage, "repeat");
        ctx.fillStyle = hedgePattern;
        ctx.fillRect(0, 0, canvas.width, 32);
        ctx.fillRect(0, canvas.height - 32, canvas.width, 32);
    }
    if (btReady) {
        var hedgePattern = ctx.createPattern(btImage, "repeat");
        ctx.fillStyle = hedgePattern;
        ctx.fillRect(0, 0, 32, canvas.height);
        ctx.fillRect(canvas.width - 32, 0, canvas.width, canvas.height);
    }
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y, heroWidth, heroHeight);
    }

    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y, monsterWidth, monsterHeight);
    }
    if (sharkReady) {
        ctx.drawImage(sharkImage, shark1.x, shark1.y, sharkWidth, sharkHeight);
        ctx.drawImage(sharkImage, shark2.x, shark2.y, sharkWidth, sharkHeight);
        ctx.drawImage(sharkImage, shark3.x, shark3.y, sharkWidth, sharkHeight);
    }

    if (obstacleReady) {
        ctx.drawImage(obstacleImage, obstacle.x, obstacle.y, obstacleWidth, obstacleHeight);
        ctx.drawImage(obstacleImage, obstacle2.x, obstacle2.y, obstacleWidth, obstacleHeight);
    }

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Treasures caught: " + monstersCaught, 32, 32);
}


//===============================
// End of looped part of app
//===============================

// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();
    then = now;
    //  Request to do this again ASAP
    requestAnimationFrame(main);
};


// Let's play this game!
var then = Date.now();

document.addEventListener("DOMContentLoaded", function(){
    document.body.appendChild(canvas);
    main();  // call the main game loop.
});
