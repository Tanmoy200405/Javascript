function sayMyName(){
   console.log("T");
   console.log("A");
   console.log("N");
   console.log("M");
   console.log("O");
   console.log("Y");

}

// sayMyName();

// function add(number1, number2){
//     console.log(number1 + number2);

// 
function add(number1, number2){
    // let sum = number1 + number2;
    // console.log("Sum:", sum);
    // return sum;

}
const result=add(2,3);
// console.log("Result:", result);


function loginUserMessage(username = "Tanmoy"){
    if(username === undefined){
        console.log("Please enter a username")

    }
    return `welcome ${username}`;
    
}
// loginUserMessage();





function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,300,400))


const user = {
    name: "Tanmoy",
    price: 199
}
function handleUser(anyObj){
    console.log(`username is ${anyObj.name} and price is ${anyObj.price}`);

}

handleUser(user);