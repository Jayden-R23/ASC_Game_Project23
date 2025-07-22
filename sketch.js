let pig;
let backgroundImage;
let rockObstacle;
let backgroundImage2;

let red;
let gameOver = false;
let score = 0;

// collision 

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let redLeft, redRight, redTop, redBottom;

// i'm trying to publish something ignore this

// coordinates for some stuff


let pigXPos;
let pigYPos;
let pigVelocityY;

let obstaclesx;
let obstaclesY;
// enemy

let enemyX2;
let enemyY2;

let backgroundX;
let backgroundY;

let backgroundX2;

function preload() {
    pig = loadImage("images_game/pigImage.webp");
    backgroundImage = loadImage("images_game/stary_bg.jpg");
    backgroundImage2 = loadImage("images_game/stary_bg2.jpg");
    rockObstacle = loadImage("images_game/stone_obs.webp");

    red = loadImage("images_game/red.webp");

}

function setup() {
    createCanvas(1920, 1080);
    background(0);
    pigXPos = 100;
    pigYPos = 500;
    pigVelocityY = 0;

    obstaclesx = 100;
    obstaclesY = 600;


    enemyX2 = 900;
    enemyY2 = 500;

    backgroundX = 950;
    backgroundY = 100;

    backgroundX2 = 2850;
    imageMode(CENTER);
}

function draw() {
    if (gameOver) {
        background(200, 200, 255);
        textSize(100);
        text("Game Over", 100, 250);
        textSize(40);
        text("Press R to Restart", 120, 350);
        return;
    }
    
    
    background(203, 158, 230);

    
    image(backgroundImage, backgroundX, backgroundY, 1910, 1080)
    image(backgroundImage2, backgroundX2, backgroundY, 1900, 1080)
    image(rockObstacle, obstaclesx, obstaclesY, 100, 100);

    textSize(40);
    text("Score: " + score, 25, 45);


    image(pig, pigXPos, pigYPos, 70, 70);
    line(1, 640, 1950, 640);

    if (keyIsDown(32) && pigYPos > 490) {
        pigYPos -= 3;
        pigVelocityY = -5;
    }
    if (pigYPos < 500) {

        pigVelocityY += 0.2;
        pigYPos += pigVelocityY;
        pigVelocityY + pigYPos;

    }

    // enemy code starts here, pseudo-random obstacles 
    image(red, enemyX2, enemyY2, 100, 100);





    if (frameCount % 80 === 0) {

        enemyX2 = random(1800, 1300);

        image(red, enemyX2, enemyY2, 100, 100);

    }

    backgroundX -= 3;
    backgroundX2 -= 3;


    enemyX2 -= (random(10, 30));

    if (backgroundX < -950) {
        backgroundX = 2850;
    }

    if (backgroundX2 < -950) {
        backgroundX2 = 2850;
    }
    // collision works

    myLeft = pigXPos - 25;
    myRight = pigXPos + 25;
    myTop = pigYPos - 25;
    myBottom = pigYPos + 25;



    redLeft = enemyX2 - 25;
    redRight = enemyX2 + 25;
    redTop = enemyY2 - 25;
    redBottom = enemyY2 + 25;




    if (myLeft > redRight || myRight < redLeft || myTop > redBottom || myBottom < redTop) {
        score += 1
    }
    else {

        gameOver = true

    }


}

function keyPressed() {
    if (gameOver && key === 'r') {
        pigXPos = 100;
        pigYPos = 500;
        pigVelocityY = 0;

        obstaclesx = 100;
        obstaclesY = 600;

        enemyX2 = 900;
        enemyY2 = 500;

        backgroundX = 950;
        lbackgroundY = 100;

        backgroundX2 = 2850;
        score = 0;
        gameOver = false;
    }
}

function mouseClicked() {

}
