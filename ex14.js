//branches and conditionals
// let x = document.getElementById('input').value;
// let y = prompt("enter a number: ");
// console.log(x);
// console.log(y);
// console.log(typeof(x));
// console.log(typeof(y));

//if (x === 5){
   // console.log("x is 5"); else{
    //console.log("x is not 5");
//}

//console.log(show);

//Task1. Write a JavaScript code that will check a variable age. Prompt the age from the user. 
//If it’s greater than 18 output to the console “Old Enough”, otherwise output “Too Young!”. 
//Use console.log() for this question.

//let age = prompt("Enter your age: ");
//console.log(age);

//if(age>18){
    //console.log("old")
//}else{
   // console.log("young")
//}

//Task2. Write a JavaScript code that will check the variable temperature. 

// Temperature range    |	Text
// Temp < 32	        | Freezing weather
// Between 32 and 41	| Very Cold weather
// Between 42 and 51	| Cold weather
// Between 52 and 61	| Itâ€™s nice today!
// Above 61	            | Itâ€™s warm today!

let weather = document.getElementById("temp").value;

if(weather < 32){
 document.getElementById("weather").innerText = "Frezzing weather";

}else if( weather <= 41){
    document.getElementById("weather").innerText = "Very Cold weather";

}else if(weather >= 42 && weather <= 51){
    document.getElementById("weather").innerText = "Cold weather";

}
else if (weather >= 52 && weather <= 61){
    document.getElementById("weather").innerText = "It's Nice today";

}else {
    document.getElementById("weather").innerText = "It's Warm today";
}

console.log(weather);
document.getElementById("weather").innerText = "weather";