//Very Easy
function min(num1,num2){
    return num1-num2;
}

//Easy
var students=[["John", "Doe", 19],["Willy", "Wonka", 18],["Lebron", "James", 20]];
console.log(`Hello, my name is ${students[1][0]} ${students[1][1]} and I'm ${students[1][2]} years old`);

//Medium
var months=["invalid","January","February","March","April", "May","June","July","August","September","October","November","December"];
var choice = prompt("Enter a number 1-12");
choice = parseInt(choice);

if(choice>=1 && choice <= 12){
    console.log(months[choice]);
}else{
    alert("invalid choice");
}

//Hard
function bmiCalc(height, mass){
    return mass/(height*height);
}
var tHeight = 9;
var tMass = 8;
var jHeight = 10;
var jMass = 45;
var bool;
if(bmiCalc(tHeight,tMass) > bmiCalc(jHeight,jMass)){
    bool = true;
}else{
    bool = false;
}
console.log(`Is Toms BMI higher than Jerrys? ${bool}`);