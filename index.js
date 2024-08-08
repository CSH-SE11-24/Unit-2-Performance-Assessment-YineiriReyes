const prompt = require('prompt-sync')()

let lebronjames = {
  name: "lebron james",
  age: 38,
  hints: ["he's on the lakers", "height 6'9", "net worth 1 billion USD",]
}
let kobebryant = {
  name: "kobe bryant",
  age: 41,
  hints: ["height 6'6", "net worth 600 million", " he died on January 26, 2020"]
}
let stephencurry = {
  name: "stephen curry",
  age: 35,
  hints: ["height 6'3", "net worth 160 million", " he's on the Golden State Warriors"]
}
let players = [lebronjames, stephencurry, kobebryant]
// console.log(players)
// The players will be printed out in the console for the game

let guess = prompt("Enter your name ")
console.log("hi " + guess)
console.log("Welcome to my game, you're going to be playing a basketball game, Good luck")

// game starts
function askquestion(i) {
  console.log(players[i]["hints"][0])

  let idk = prompt("guess ")
  if (idk === players[i]["name"]) {
    console.log("Yes you got it right")
  } else {
    console.log("no thts wrong")
    console.log(players[i]["hints"][1])
    let guessAgain = prompt("guess Again ")
    if (guessAgain === players[i]["name"]) {
      console.log("yes thts right")
    } else {
      // print wrong, print next clue, check answer
      console.log("you got it wrong again")
      console.log(players[i]["hints"][2])
      let idkkk = prompt("omg guess again you're getting me tight ")
      if (idkkk === players[i]["name"]) {
        console.log("Yes you got it right")
      } else {
        console.log("no thts wrong bettr luck next time")


      }
    }




  }
}
let idkkkk = "yes"
while(idkkkk=== "yes") {
  console.log()

  for (let i = 0; i < 3; i++) {
    console.log("Now you are going to guess the player")
    askquestion(i)
   
  }
  idkkkk=prompt("you wanna play again? ")
}
