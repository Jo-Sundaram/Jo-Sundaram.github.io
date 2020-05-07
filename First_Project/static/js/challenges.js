/* Challenge 1: Age in days */

// click-me button functionality
function ageInDays(){

    var birthyear = prompt("What year were you born in?")

    var days = (2020 - birthyear)*365

    console.log(days)

    // create h1 element to append to the page
    var h1 = document.createElement("h1")
    //creates a TextNode that can be appended to h1
    var textAnswer = document.createTextNode("You are " + days+" days old.") 

    h1.setAttribute("id",'ageInDays') 
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1) // appened h1 element to result box

}

// reset button functionality
function reset(){
    document.getElementById('ageInDays').remove() // remove element from page

}


/* Challenge 2: Cat Generator */


// generate cat button functionality
function generateCat(){
    var image = document.createElement('img')  // create image element
    var div = document.getElementById('flex-cat-gen') // get ID of the div where images are placed

    image.setAttribute('id','imageID') 
    image.src="https://i.pinimg.com/236x/7a/af/0f/7aaf0f1d48f57b7779c0fbcf103c2d0f--munchkin-kitten-baby-kitty.jpg"  // set source of image


    div.appendChild(image)

}


// remove cat button functionality
function resetCat(){
    var div = document.getElementById('flex-cat-gen')
    var img = document.getElementById('imageID')
    
    if(div.hasChildNodes){
        console.log("has child")
        div.removeChild(img)
    }
}


/* Challenge 3: Rock Paper Scissors */

function computer(){
    var choice = Math.floor(Math.random()*3)
    var s;
    switch(choice == 0){
        case choice == 1:
            // console.log("Computer chose: Paper")
            s = "paper"
            break;

        case choice == 2:
            // console.log("Computer chose: Scissors")
            s = "scissors"
            break;
        
        default:
            // console.log("Computer chose: Rock")
            s = "rock"
        

    }

    return s;

}


/* function decideWinner(yourChoice, computerChoice){
    var results;
    if(yourChoice=="rock"){
        switch(yourChoice=="rock"){
            case computerChoice == "paper":
                results = "You lost"
                break;
            case computerChoice == "scissors":
                results = "You won"
                break;
            default:
                results = "It's a tie"

        } 
    }else if(yourChoice=="paper"){
        switch(yourChoice=="paper"){
            case computerChoice == "scissors":
                results = "You lost"
                break;
            case computerChoice == "rock":
                results = "You won"
                break;
            default:
                results = "It's a tie"

        }
    } else{
        switch(yourChoice=="scissors"){
            case computerChoice == "rock":
                results = "You lost"
                break;
            case computerChoice == "paper":
                results = "You won"
                break;
            default:
                results = "It's a tie"
    
        }
    }


    return results;
} */



function decideWinner1(yourChoice,computerChoice){
    var finalMessage = ""
    // object within object
    var rpsEval = {
        "rock": {"rock":0.5, "paper":0, "scissors":1},
        "paper": {"rock":1, "paper":0.5, "scissors":0},
        "scissors": {"rock":0, "paper":1, "scissors":0.5}

    }



    var yourScore = rpsEval[yourChoice][computerChoice] 
    var computerScore = rpsEval[computerChoice][yourChoice]
    // console.log(yourScore)
    
    switch(yourScore>=0){
        case yourScore == 0.5:
            console.log("It's a Tie")
            finalMessage = "It's a Tie"
            break;
        case yourScore == 0:
            console.log("You Lost")
            finalMessage = "You Lost"
            break;
        default:
            console.log("You win")
            finalMessage = "You win"
    } 

    console.log("Your Score: " + yourScore + "\nComputer Score: " + computerScore)
    return finalMessage


}


function rpsFrontEnd(yourImg,computerImg, finalMessage){

    var imgDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src

    }


    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()


    var yourDiv = document.createElement('div')
    var computerDiv = document.createElement('div')
    var message = document.createElement('div')

    yourDiv.innerHTML = "<img src = '" + imgDatabase[yourImg] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(200,200,0,7);'>"
    computerDiv.innerHTML = "<img src = '" + imgDatabase[computerImg] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(200,200,0,7);'>"
    message.innerHTML = "<h1 style = 'red; font-size: 60px; padding: 30px'>"+ finalMessage + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(yourDiv)
    document.getElementById('flex-box-rps-div').appendChild(message)
    document.getElementById('flex-box-rps-div').appendChild(computerDiv)
   



}

function reset(){

    document.getElementById('flex-box-rps-div').getElementsByTagName('img').innerHTML = ""
    
    document.getElementById('flex-box-rps-div').appendChild(document.getElementById('rock').src)
    document.getElementById('flex-box-rps-div').appendChild(document.getElementById('paper').src)
    document.getElementById('flex-box-rps-div').appendChild(document.getElementById('scissors').src)
  
}


function rpsGame(yourChoice){

    var computerChoice = computer()
    console.log("Your choice: " + yourChoice)
    console.log("Computer choice: " + computerChoice)

    var s = decideWinner1(yourChoice,computerChoice)

    rpsFrontEnd(yourChoice,computerChoice,s)

    
}










