class Form{
    constuctor(){
        this.input = createInput("player name")
        this.button = createButton("start Game")
        this.greeting  = createElement('h3') 
        this.title = createElement('h2')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
        this.title.hide()

    }
    display(){
        
        this.title.html("game")
        this.title.position(displayWidth/2-50,0)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)

       this.button.mousePressed(function(){
                this.input.hide()
                this.button.hide()
                player.name = this.input.value()
                playerCount = playerCount + 1
                player.index = playerCount
                player.update()
                player.updateCount(playerCount)
                this.greeting.html("hello "+player.name)
                this.greeting.position(displayWidth/2-70,displayheight/4)

        })
    }
}