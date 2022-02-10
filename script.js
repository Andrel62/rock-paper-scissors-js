const computerPlay = function(){
    let moves = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return moves[random];
};

let compMove = computerPlay();

let playerSelection = prompt('rock, paper, scissors!');


const play = function(player, computer){
    //for rock
    if(player == 'rock'){
        if(computer == 'rock' ){
            console.log(`PC played ${computer} and so it's a tie`);
        }else if(computer == 'paper'){
            console.log(`PC played ${computer} and so you lost!`);
        }else{
            console.log(`PC played ${computer} and so you WON!`);
        }
    }
    //for paper
    if(player == 'paper'){
        if(computer == 'rock' ){
            console.log(`PC played ${computer} and so you WON!`);
        }else if(computer == 'paper'){
            console.log(`PC played ${computer} and so it's a tie`);
        }else{
            console.log(`PC played ${computer} and so you lost!`);
        }
    }
    //for scissors
    if(player == 'scissors'){
        if(computer == 'rock' ){
            console.log(`PC played ${computer} and so you lost!`);
        }else if(computer == 'paper'){ 
            console.log(`PC played ${computer} and so you WON!`);
        }else{
            console.log(`PC played ${computer} and so it's a tie`);
        }
    }
    
};

play(playerSelection, compMove);