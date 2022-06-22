class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score = 0;
        
        this.rank = null ;
    }

    getCount() {
        var playerCountRef = database.ref('/Apanhador De Frutas/playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/Apanhador De Frutas/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "/Apanhador De Frutas/players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('/Apanhador De Frutas/players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    getPlayerAtEnd(){
        database.ref('/Apanhador De Frutas/playerAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }

    static updatePlayerAtEnd(rank){
        database.ref("/Apanhador De Frutas/").update({
            playerAtEnd : rank
        })
    }

    
}
