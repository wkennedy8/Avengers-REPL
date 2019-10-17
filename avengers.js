const readlineSync = require('readline-sync')

const commands = [ " UP", " DOWN", " LEFT", " RIGHT", " GRAB", " FIGHT"]

avengers = ["CAPTAIN AMERICA", "IRON MAN", "THOR", "HULK" ]

console.log("**************************************************** ")
console.log("**************************************************** ")
console.log("**************************************************** ")
console.log("WELCOME TO AVENGERS REPL!!!")
console.log('')
console.log('')
console.log("THANOS IS ON THE VERGE OF DESTROYING THE PLANET.") 
console.log("YOUR MISSION IS TO DEFEAT THANOS, AND STOP HIM FROM EXECUTING HIS MASTER PLAN.") 
console.log("")
console.log("YOU ARE ON THE TOP FLOOR OF STARK TOWER, AND MUST WALK THROUGH EACH FLOOR TO FIND WHAT YOU NEED.")
console.log("FOR EACH MOVE, YOU WILL ONLY HAVE 6 POSSIBLE COMMANDS:")
console.log('')

console.log(commands.toString())
console.log('')
console.log('')
let getAvenger = readlineSync.keyInSelect(avengers, "WHICH AVENGER WILL YOU CHOOSE?\n")

console.log('')
console.log('')
console.log(`${avengers[getAvenger]}, I HOPE YOU'RE READY TO SAVE THE EARTH!`)
console.log('')
console.log('')
console.log("YOU ARE ON THE TOP FLOOR: FLOOR 3, ROOM 1.")
console.log("YOU SEE: ")
console.log("   * the room is empty")
console.log('')

let madeWrongChoice = true

while(madeWrongChoice){
    let userInput = readlineSync.question(`\n WHAT DO YOU WANT TO DO? \n ${commands.toString()}\n`)
    if (userInput.trim().toUpperCase() === "UP"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 3, ROOM 1 \n","YOU SEE: \n","   * the room is empty" )
        console.log('')
    } else if (userInput.trim().toUpperCase() === "DOWN"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 3, ROOM 1 \n","YOU SEE: \n","   * the room is empty" )
        console.log('')
    } else if (userInput.trim().toUpperCase() === "LEFT"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 3, ROOM 1 \n","YOU SEE: \n","   * the room is empty" )
        console.log('')
    }else if (userInput.trim().toUpperCase() === "GRAB"){
        console.log("NOTHING TO GRAB! \n"," \n","YOU ARE ON FLOOR 3, ROOM 1 \n","YOU SEE: \n","   * the room is empty" )
        console.log('')
    }else if (userInput.trim().toUpperCase() === "FIGHT" ){
        console.log("FIGHT WHO?! THERE IS NO ONE TO FIGHT! \n"," \n","YOU ARE ON FLOOR 2, ROOM 1 \n","YOU SEE: \n","   * the room is empty" )
        console.log('')
    }else if (userInput.trim().toUpperCase() === "RIGHT"){
        madeWrongChoice = false
    }else if (!commands.includes(userInput.trim().toUpperCase())){
        console.log("INVALID COMMAND")
    } else {
        madeWrongChoice = false
    }
    }
    
console.log('')
console.log('')
console.log("YOU ARE ON FLOOR 3, ROOM 2")
console.log("YOU SEE: ")
console.log(" * a minion of Thanos")
console.log('')

let fightMinion = false
let madeRightChoiceOne = true
while(madeRightChoiceOne){
    let userInput = readlineSync.question(`WHAT DO YOU WANT TO DO? \n ${commands.toString()}\n`)
    if (userInput.trim().toUpperCase() === "UP"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 3, ROOM 2 \n","YOU SEE: \n"," * a minion of Thanos" )
        console.log('')
    } else if (userInput.trim().toUpperCase() === "DOWN"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 3, ROOM 2 \n","YOU SEE: \n"," * a minion of Thanos" )
        console.log('')
    } else if (userInput.trim().toUpperCase() === "LEFT"){
        console.log("YOU DON'T WANT TO GO BACK TO WHERE YOU CAME FROM DO YOU? \n", " \n","YOU ARE ON FLOOR 3, ROOM 2 \n","YOU SEE: \n"," * a minion of Thanos")
        console.log('')
    }else if (userInput.trim().toUpperCase() === "GRAB"){
        console.log("NOTHING TO GRAB! \n"," \n","YOU ARE ON FLOOR 3, ROOM 2 \n","YOU SEE: \n"," * a minion of Thanos")
        console.log('')
    }else if (userInput.trim().toUpperCase() === "FIGHT" && fightMinion === false){
        fightMinion = true
        console.log("IT WAS A TOUGH BATTLE, BUT YOU HAVE DEFEATED THE MONSTER! \n")
        console.log('')
        console.log("YOU ARE ON FLOOR 3, ROOM 2")
        console.log("YOU SEE: ")
        console.log("   * room is empty")
        console.log("")
    }else if(userInput.trim().toUpperCase() === "RIGHT" && fightMinion === false){
        fightMinion
        console.log('')
        console.log('')
        console.log("YOU COULDN'T ESCAPE THE MINION")
        console.log("****************** GAME OVER ******************")
        madeRightChoiceOne = false
        process.exit()
    } else if (userInput.trim().toUpperCase() === "RIGHT" && fightMinion === true){
        madeRightChoiceOne = false
    }
    else if (!commands.includes(userInput.trim().toUpperCase())){
         console.log("INVALID COMMAND")
    }else {
        madeRightChoiceOne = false
    }
}
// 
console.log('')
console.log('')
console.log("YOU ARE ON FLOOR 3, ROOM 3")
console.log('YOU SEE: ')
console.log(" * down-stairs")
console.log('')
// 
let madeRightChoiceTwo = true
while(madeRightChoiceTwo){
    let userInput = readlineSync.question(`\n WHAT DO YOU WANT TO DO? \n ${commands.toString()}\n`)
    if (userInput.trim().toUpperCase() === "UP"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 3, ROOM 3 \n","YOU SEE: \n"," * down-stairs" )
        console.log('')
    } else if (userInput.trim().toUpperCase() === "RIGHT"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 3, ROOM 3 \n","YOU SEE: \n"," * down-stairs" )
        console.log('')
    } else if (userInput.trim().toUpperCase() === "LEFT"){
        console.log("YOU DON'T WANT TO GO BACK TO WHERE YOU CAME FROM DO YOU? \n", " \n","YOU ARE ON FLOOR 3, ROOM 3 \n","YOU SEE: \n"," * down-stairs")
        console.log('')
    }else if (userInput.trim().toUpperCase() === "GRAB"){
        console.log("NOTHING TO GRAB! \n", " \n","YOU ARE ON FLOOR 3, ROOM 3 \n","YOU SEE: \n"," * down-stairs")
        console.log("")
    }else if (userInput.trim().toUpperCase() === "FIGHT"){
        console.log("FIGHT WHO?! THERE IS NO ONE TO FIGHT! \n"," \n","YOU ARE ON FLOOR 3, ROOM 3 \n","YOU SEE: \n"," * down-stairs")
    }else if (userInput.trim().toUpperCase() === "DOWN"){
        madeRightChoiceTwo = false
    }else if (!commands.includes(userInput.trim().toUpperCase())){
        console.log("INVALID COMMAND")  
    }else {  
        madeRightChoiceTwo = false
    }
}

console.log('')
console.log('')
console.log("YOU ARE ON FLOOR 2, ROOM 3")
console.log('YOU SEE: ')
console.log(" * the room is empty")
console.log('')
// 
let madeRightChoiceThree = true
while(madeRightChoiceThree){
    let userInput = readlineSync.question(`WHAT DO YOU WANT TO DO? \n ${commands.toString()}\n`)
    if (userInput.trim().toUpperCase() === "UP"){
        console.log("YOU DONT WANT TO GO BACK TO WHERE YOU CAME FROM DO YOU? \n", " \n","YOU ARE ON FLOOR 2, ROOM 3 \n","YOU SEE: \n"," * the room is empty")
        console.log('')
    } else if (userInput.trim().toUpperCase() === "DOWN"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 2, ROOM 3 \n","YOU SEE: \n"," * the room is empty" )
        console.log('')
    } else if (userInput.trim().toUpperCase() === "RIGHT"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 2, ROOM 3 \n","YOU SEE: \n"," * the room is empty" )
        console.log('')
    }else if (userInput.trim().toUpperCase() === "GRAB"){
        console.log("NOTHING TO GRAB! \n", " \n","YOU ARE ON FLOOR 2, ROOM 3 \n","YOU SEE: \n"," * the room is empty")
        console.log('')
    }else if (userInput.trim().toUpperCase() === "FIGHT"){
        console.log("FIGHT WHO?! THERE IS NO ONE TO FIGHT! \n"," \n","YOU ARE ON FLOOR 2, ROOM 3 \n","YOU SEE: \n"," * the room is empty")
        console.log('')
    }else if (userInput.trim().toUpperCase() === "LEFT"){
        madeRightChoiceThree = false
    }else if(!commands.includes(userInput.trim().toUpperCase())){
        console.log("INVALID COMMAND")
    }else{
        madeRightChoiceThree = false
    }
}
// 
console.log('')
console.log('')
console.log("YOU ARE ON FLOOR 2, ROOM 2")
console.log("YOU SEE: ")
console.log(" * infinity gauntlet")
console.log('')
let hasGauntlet = false
let madeRightChoiceFour = true
while(madeRightChoiceFour){
    let userInput = readlineSync.question(`WHAT DO YOU WANT TO DO? \n ${commands.toString()}\n`)
    if (userInput.trim().toUpperCase() === "UP"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 2, ROOM 2 \n","YOU SEE: \n"," * infinity gauntlet" )
        console.log('')
    } else if (userInput.trim().toUpperCase() === "DOWN"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 2, ROOM 2 \n","YOU SEE: \n"," * infinity gauntlet" )
        console.log('')
    } else if (userInput.trim().toUpperCase() === "RIGHT"){
        console.log("YOU DONT WANT TO GO BACK FROM WHERE YOU CAME FROM DO YOU? \n"," \n","YOU ARE ON FLOOR 2, ROOM 2 \n","YOU SEE: \n"," * infinity gauntlet" )
        console.log('')
    }else if (userInput.trim().toUpperCase() === "GRAB"){
        hasGauntlet = true
        console.log("YOU HAVE PICKED UP THE INFINITY GAUNTLET \n")
        console.log('')
        console.log("YOU ARE ON FLOOR 2, ROOM 2")
        console.log("YOU SEE: ")
        console.log(" * empty room")
        console.log('')
    }else if (userInput.trim().toUpperCase() === "FIGHT"){
        console.log("FIGHT WHO?! THERE IS NO ONE TO FIGHT! \n"," \n","YOU ARE ON FLOOR 2, ROOM 2 \n","YOU SEE: \n"," * infinity gauntlet")
        console.log('')
    }else if (userInput.trim().toUpperCase() === "LEFT"){
        madeRightChoiceFour = false
    }else if (!commands.includes(userInput.trim().toUpperCase())){
        console.log("INVALID COMMAND")
    }else{
        madeRightChoiceThree = false
}
}

// 
console.log('')
console.log('')
console.log("YOU ARE ON FLOOR 2, ROOM 1")
console.log("YOU SEE: ")
console.log(" * down-stairs")
console.log('')
// 
let madeRightChoiceFive = true
while(madeRightChoiceFive){
    let userInput = readlineSync.question(`\n WHAT DO YOU WANT TO DO? \n ${commands.toString()}\n`)
    if (userInput.trim().toUpperCase() === "UP"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 2, ROOM 1 \n","YOU SEE: \n"," * down-stairs" )
        console.log('')
    } else if (userInput.trim().toUpperCase() === "RIGHT"){
        console.log("YOU DON'T WANT TO GO BACK TO WHERE YOU CAME FROM DO YOU? \n"," \n","YOU ARE ON FLOOR 2, ROOM 1 \n","YOU SEE: \n"," * down-stairs" )
        console.log('')
    } else if (userInput.trim().toUpperCase() === "LEFT"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 2, ROOM 1 \n","YOU SEE: \n"," * down-stairs" )
        console.log('')
    }else if (userInput.trim().toUpperCase() === "GRAB"){
        console.log("NOTHING TO GRAB! \n"," \n","YOU ARE ON FLOOR 2, ROOM 1 \n","YOU SEE: \n"," * down-stairs")
        console.log("")
    }else if (userInput.trim().toUpperCase() === "FIGHT"){
        console.log("FIGHT WHO?! THERE IS NO ONE TO FIGHT! \n"," \n","YOU ARE ON FLOOR 2, ROOM 1 \n","YOU SEE: \n"," * down-stairs")
    }else if (userInput.trim().toUpperCase() === "DOWN"){
        madeRightChoiceFive = false
    }else if (!commands.includes(userInput.trim().toUpperCase())){
        console.log("INVALID COMMAND")
    }else{
        madeRightChoiceThree = false
}
}
// 
console.log('')
console.log('')
console.log("YOU ARE ON FLOOR 1, ROOM 1")
console.log("YOU SEE: ")
console.log(" * a minion of Thanos ")
console.log('')

let madeRightChoiceSix = true
while(madeRightChoiceSix){
    let userInput = readlineSync.question(`WHAT DO YOU WANT TO DO? \n ${commands.toString()}\n`)
    if (userInput.trim().toUpperCase() === "UP"){
        console.log("YOU DON'T WANT TO GO BACK TO WHERE YOU CAME FROM DO YOU? \n"," \n","YOU ARE ON FLOOR 1, ROOM 1 \n","YOU SEE: \n"," * a minion of Thanos")
        console.log('')
    } else if (userInput.trim().toUpperCase() === "DOWN"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 1, ROOM 1 \n","YOU SEE: \n"," * a minion of Thanos")
        console.log('')
    } else if (userInput.trim().toUpperCase() === "LEFT"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 1, ROOM 1 \n","YOU SEE: \n"," * a minion of Thanos")
        console.log('')
    }else if (userInput.trim().toUpperCase() === "GRAB"){
        console.log("NOTHING TO GRAB! \n"," \n","YOU ARE ON FLOOR 1, ROOM 1 \n","YOU SEE: \n"," * a minion of Thanos")
        console.log('')
    }else if (userInput.trim().toUpperCase() === "FIGHT"){
        console.log("IT WAS A TOUGH BATTLE, BUT YOU HAVE DEFEATED THE MONSTER! \n")
        console.log('')
        console.log("YOU ARE ON FLOOR 1, ROOM 1")
        console.log("YOU SEE: ")
        console.log("   * room is empty")
        console.log("")
    }else if (userInput.trim().toUpperCase() === "RIGHT"){
        madeRightChoiceSix = false
    }else if (!commands.includes(userInput.trim().toUpperCase())){
        console.log("INVALID COMMAND")
    }else{
        madeRightChoiceThree = false
}
}


console.log('')
console.log('')
console.log("YOU ARE ON FLOOR 1, ROOM 2")
console.log("YOU SEE: ")
console.log(" * Thanos ")
console.log('')
// 
// 
let madeRightChoiceSeven = true
while(madeRightChoiceSeven){
    let userInput = readlineSync.question(`\n WHAT DO YOU WANT TO DO? \n ${commands.toString()}\n`)
    if (userInput.trim().toUpperCase() === "UP"){
        console.log("YOU CANNOT GO THAT WAY \n"," \n","YOU ARE ON FLOOR 1, ROOM 2 \n","YOU SEE: \n"," * Thanos")
        console.log('')
    } else if (userInput.trim().toUpperCase() === "RIGHT"){
        console.log("DON'T LEAVE! SAVE THE EARTH!! \n"," \n","YOU ARE ON FLOOR 1, ROOM 2 \n","YOU SEE: \n"," * Thanos")
        console.log('')
    } else if (userInput.trim().toUpperCase() === "LEFT"){
        console.log(" YOU DON'T WANT TO GO BACK TO WHERE YOU CAME FROM DO YOU? \n"," \n","YOU ARE ON FLOOR 1, ROOM 2 \n","YOU SEE: \n"," * Thanos")
        console.log('')
    }else if (userInput.trim().toUpperCase() === "GRAB"){
        console.log("NOTHING TO GRAB! \n"," \n","YOU ARE ON FLOOR 1, ROOM 2 \n","YOU SEE: \n"," * Thanos")
        console.log("")
    }else if (userInput.trim().toUpperCase() === "DOWN"){
        console.log("YOU CANNOT GO THAT WAY\n"," \n","YOU ARE ON FLOOR 1, ROOM 2 \n","YOU SEE: \n"," * Thanos")
    }else if (userInput.trim().toUpperCase() === "FIGHT"){
        if (hasGauntlet == true){
            console.log('')
            console.log('')
            console.log('YOU HAVE DEFEATED THANOS AND SAVED THE EARTH FROM OBLITERATION!')
            console.log("****************** GAME OVER ****************** ")
            madeRightChoiceSeven = false
        } else {
            hasGauntlet == false
            console.log('')
            console.log('')
            console.log("THANOS HAS DEFEATED YOU!")
            console.log("****************** GAME OVER ****************** ")
            madeRightChoiceSeven = false
        }}else if (!commands.includes(userInput.trim().toUpperCase())){
            console.log("INVALID COMMAND")
        }else{
            madeRightChoiceThree = false
    }
}