const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.querySelector("#pass1")
let passTwo = document.querySelector("#pass2")

function generatePass() {
    
    passOne.textContent = ""
    passTwo.textContent = ""
    
    for (i=0; i < 16; i++) {
        let randomChar1 = Math.floor(Math.random() * characters.length)
        let randomChar2 = Math.floor(Math.random() * characters.length)
        passOne.textContent += characters[randomChar1]
        passTwo.textContent += characters[randomChar2]
    } 
}