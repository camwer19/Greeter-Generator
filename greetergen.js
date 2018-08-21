//Create array of adjectives or whatever idk
var adjectiveArray = ["Hello", "Bonjour", "Olá", "xin chào", "aloha", "你好"];
//ask the person for name
var nameMe = prompt("Enter your name");
//generate random number
var number = Math.floor(Math.random() * adjectiveArray.length);
//let the user know what kind of person they are
//ex: username followed or preceeded by the array item
window.alert(adjectiveArray[number] + ", " + nameMe);