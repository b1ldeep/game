class Game{
    constructor(){

    }
     getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })


    }
    car1 = createSprite(100,200);
   //car1.addImage("car1",whitecar)
    
    car2 = createSprite(300,200)
    
    car3 = createSprite(500,200)
    
    car4 = createSprite(700,200)

    cars = [car1,car2,car3,car4]

    play(){
        form.hide()
        textSize(35)
        text("GAME START",120,100)
        Player.getPlayerInfo()

        if(allPlayers!== undefined ){
            var displayPosition = 130

            for(var plr in allPlayer){
                if(plr === "player" + player.index){
                    fill("red")
                }
                else{
                    fill ("black")
                }
                displayPosition += 20
                textSize(15)
                text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPosition)
            }
        }

    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState === 0){
            player = new Player()
            //player.getCount()
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount
            }
            form = new Form()
            form.display()
        }
    }
}