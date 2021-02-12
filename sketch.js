var gameState = 0
var playerCount = 0
var form,player,game
var allPlayers
var distance = 0
var car1 ,car2 , car3 , car4, cars
function preload(){
track = loadImage("images/track.jpg")
whiteCar = loadImage("images/car1.png")
redCar = loadImage("images/car2.png")
blueCar  = loadImage("images/car3.png")
blackCar = loadImage("images/car4.png")
ground = loadImage("images/ground.png")
}

function setup(){
    createCanvas(400,400)
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}
function draw(){
    if(playerCount === 4){
        game.update(1)
    }
    if(gameState === 1){
        clear()
        game.play()

    }
    if(gameState === 2){
        game.end()
        

    }
    }













