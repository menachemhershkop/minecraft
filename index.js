const game = document.getElementById("game")
let TOOL = null;
function randstone(){
    const a = ['redstone','gold','stone','diamond','coal']
    return a[Math.floor(Math.random()*5)]
}
function board(){
    for (let i=0; i<25; i++){
        for (let j=0; j<25; j++){
            const board = document.createElement("div");
            // board.innerText = i+j
            board.classList = 'sky';
            if (i<17 && i>9 && j==10||
                i<18 && i>10 && j==5||
                i<18 && i>10 && j==15 ){
                    board.classList = 'wood';
                }
                if (j>12 && j<18 && i==10 ){
                    
                    board.classList = 'leaves';
                }
                if (i==17 &&j>7){
                    board.classList = 'grass'
                    // game.appendChild(sky)
                }
                if (i==18 && j<8){
                    board.classList = 'grass'
                }
                else if (i>17){
                    board.classList = 'soil'
                    // game.appendChild(sky)
                }
                if (i==20 && j<5){
                    board.classList = 'soil'
                }
                else if (i>=20){
                    board.classList = 'stone'
                    board.id = randstone()
                    
                    // game.appendChild(sky)
                }
                board.addEventListener('click', ()=>{
                    console.log(TOOL);
                    
                    const x = document.body.style.cursor
                    // console.log(x);
                    if (TOOL == 'exe' && (board.classList == 'wood'||board.classList == 'leaves') ) {
                        board.classList = 'sky';
                    }
                    if (TOOL == 'shovel' && (board.classList == 'grass'||board.classList == 'soil')){
                        board.classList = 'sky';
                    }
                    if (TOOL == 'picaxe' && board.classList == 'stone'){
                        board.classList = 'sky'
                        board.id = ''
                    }
                })
                game.appendChild(board)
            }
        }
        return game
    //-------------//
//     for (let index = 1; index <=875; index++) {
    
//             const sky = document.createElement("div");
//             sky.innerText = index

//             sky.classList = 'sky';
//             game.appendChild(sky)

// }
}
const obj = board()

console.log(game.children.length);

function tree(tree, board){
    for (let i=0; i<tree.length; i++){
        for (let j=0; j<i.length;j++){
            const tre = document.createElement("div");
            if (tree[i][j] === 1 ){
                tre.classList = 'leaves';
            }
            if (tree[i][j] === 2 ){
                tre.classList = 'wood';
            }
            board.appendChild(tre)
        }
    }
}

const tre1=[
            [0,0,1,0,0],
            [0,1,1,1,0],
            [1,1,1,1,1],
            [0,0,2,2,0]
            [0,0,2,2,0]
        ]

tree(tre1, game)


const tols  = document.getElementById('tols');
console.log(tols);

function getTool(tool){
    if (tool.id == 'axe'){
    document.body.style.cursor = "URL(img/axe.cur) 8 8, auto"
    TOOL = 'exe'
    }
    if (tool.id == 'shovel'){
    document.body.style.cursor = "URL(img/shovel.cur) 8 8, auto"
    TOOL = 'shovel'
    }
    if (tool.id == 'picaxe'){
    document.body.style.cursor = "URL(img/pickaxe.cur) 8 8, auto"
    TOOL = 'picaxe'
    }
    if (tool.id == 'sword'){
    document.body.style.cursor = "URL(img/sword.cur) 8 8, auto"
    TOOL = 'sword'
    }
    return tool
}






