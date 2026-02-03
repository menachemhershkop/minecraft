const game = document.getElementById("game")

function sky(){
    for (let i=0; i<25; i++){
        for (let j=0; j<25; j++){
            const sky = document.createElement("div");
            sky.classList = 'sky';
            game.appendChild(sky)
        }
    }
}
sky()