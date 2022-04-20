class Form{
    constructor(){
       //this.input = createInput("Name");
       this.input = createInput("").attribute("placeholder", "Nome");//Name
       this.button = createButton('Jogar');//Play
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Resetar');//Reset
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Apanhador De Frutas");//FRUIT CATCHER
        this.title.position(width / 2 - 310, 50);//350, 50
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(width / 2 - 85, 400);//550, 400
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(width / 2 - 80, 500);//560, 500
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(width - 120, height - 50);//900, 660
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Olá " + player.name)//Hello
            this.greeting.position(width / 2 - 110, 250);//400, 250
            this.greeting.style('color', 'magenta');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);



            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            var playerAtEndRef = database.ref('playerAtEnd');
            playerAtEndRef.remove();

            location.reload();
        });

    }
}