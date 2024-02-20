const prompt = require("prompt-sync")();

let gamenum=25;
let usernum = prompt("guess the game  number :");
while(usernum!=gamenum){
    usernum=prompt("you enterd the wrong number guess again your number :");
}
console.log("congratulation you guess the right no:",usernum);