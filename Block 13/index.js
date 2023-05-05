var input = "I am a string"

if (input)
{
    console.log("true")
}else if(input===false){
    console.log("The boolean value false is falsy")
}else if(input===null){
    console.log("The null value is falsy")
}
else if(input===undefined){
    console.log("undefined is falsy")
}
else if(input===0){
    console.log("The number 0 is falsy(the onlt falsy number)")
}
else if(input===""){
    console.log("The empty string is falsy)the only falsy string)")
}


var num1 = 50
var num2 = 51

var sum = num1+num2

if (sum > 100){
    console.log(sum + " is greater than 100")
}
else if (sum > 0){
    console.log(sum + " is larger than 0")
}
else if (sum === 0){
    console.log(sum + " is equal to 0")
}
else if (sum < -1000){
    console.log(sum + " is less than -1000")
}
else if (sum < 0){
    console.log(sum + " is a negative number")
}

var num1 = 5
var num2 = 6

if (num1 && num2 >= 5){
    console.log("true")
}
else{
    console.log("false")
}

var param1A = "cake"
var param1B = "cake"
var param2A = "pie"
var param2B = "pie"

if (param1A === param1B || param2A === param2B){
    console.log("true")
}
else{
    console.log("false")
}