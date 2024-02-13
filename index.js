//detect button press
var numOfDrum = document.querySelectorAll(".drum").length

for (var i = 0; i < numOfDrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
var buttonInnerHtml = this.innerHTML

makeSound(buttonInnerHtml)

        
    })
}

//detect key press
document.addEventListener("keydown", function(event){
   makeSound(event.key)
})

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()
            break;

        case "j":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play()
            break;

        case "k":
            var bass = new Audio("./sounds/kick-bass.mp3")
            bass.play()
            break;
        
        case "l":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play()
            break;

    
        default:
            console.log()
            break;
    }
}

// var audio = new Audio("./sounds/tom-1.mp3")
// audio.play()









// function add(num1, num2){
//         return num1 + num2
//     }
// function multiply(num1,num2){
//     return num1 * num2
// }
// function subtract(num1,num2){
//     return num1 - num2
// }
// function divide(num1,num2){
//     return num1 / num2
// }

// function calculator(num1,num2, operator){
//     return operator(num1,num2)
// }

// var houseKeeper1 = {
//     name: "ham",
//     age: 22,
//     duties: ["toilets", "pillows", "toothbrush"],
//     languages: ["spanglish" ],

// }

// function BellBoy (name, age, workPermit, languages){
//     this.name = name;
//     this.age = age;
//     this.workPermit = workPermit;
//     this.languages = languages;
// }

// var bellBoy1 = new BellBoy("Ham", 34, true, ["french","gangsigns"])

// function HouseKeeper(name, age , duties, languages){
//     this.name = name;
//     this.age = age;
//     this.duties = duties;
//     this.languages = languages;
//     this.clean = function(){
//         alert("I clean now");
    
//     }
        
    
// }

// var houseKeeper2 = new HouseKeeper("kam", 45, ["to clean","more cleaning"], ["cleaning lady","english"])