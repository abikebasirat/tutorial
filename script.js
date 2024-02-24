// VARIABLE:Global and local scope variables

// Global Variable

// let is;
// for(i = 0; i < 5; i++){
//     let p = 10;
//     console.log(i+p)
// }
// console.log(i)

// OPERATORS AND EQUALITY
// Arithmetical operators

// +,-,*,/,%,==.===, increment

// minus (-);

// let costs = 15
// let profits;
// let salesprices = 20

// profits = salesprices - costs;

// console.log(profits)



// plus (+)

// let cost = 15, profit = 5, salesprice = cost + profit;
// console.log(salesprice);


let firsNames = "Olatunde", surnames = "Tobi ", fullName = surnames + firsNames;
console.log(fullName + " " + 'is a big boy')


let firsName = "Olatunde", surname = "Tobi ", fullNames = surname + firsName;
console.log(`${fullNames} is a big boy`)



// Back tick (``)
let food = 'Rice'
console.log(`what will i eat, if not ${food} ?`);

let A = 2;
A *= 4;
console.log(A)

    // AND OPRATOR
let result;
let age = 25 ;
if(age > 20 && age <30){
    result = age + 50;
}else{result = age};
console.log(result);

// OR OPRATOR

// let cost = 50;
// let selPrice;
// let profit = 10;

// if(cost >= 50 || cost === 55) {
//     selPrice = cost + profit;

// }else {
//     selPrice = cost;
// }
// console.log(selPrice)

// OR Operator

// let cost = 40;
// let selPrice;
// let profits = 10;

// if (cost >= 50 || cost === 55) {
//     selPrice = cost + profits;
// }
// else{
//     selPrice = cost;
// }

// console.log(selPrice);

//  NOT OPRATOR

// let name = "Hayzed";
// if(name !== "Hayzed"){
//     console.log("why are you lying?" );
// }else{
//     console.log("That is good");
// }

// let num = 5;
// let i = 0;
// while (i < num){
// i++;
// console.log(i);
// }

// for(let i = 0; i < num; i++) {
//  console.log(i)   
// }


//  Checking for  a leap year
//  CONDITIONS:
// The year divided by 4 should have a remainder of 0
// The year divided by 100 should have a non-zero remainder
// If year divided by 100 gives no remainder, then divided by 400 should give a remainder 


const year = prompt("Enter the year");

const checkLeap = (year) => {
    let result;
    if((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
        result = "Yes! it is a leap year";
    }
    else{
        result = "No! it is not a leap year"
    }

    return result;
}

const answer = checkLeap(2000)

alert(answer);
// console.log(answer);