console.log("Hello world")
// in-line comment
var number = 5;
/*this is a multi
line comment*/

/* Data Types: 
undefined, null, boolean, string, symbol, number, and object
*/
let myName = "yooo";
myName = 5;
let ourName = "IzzyCodex";  // ✅ Changed comma to semicolon

const pi = 3.14;
var a;
var b = 2;

a = 7;
b = a;
console.log(a);
let c = 6;
a = a + 1;
b = b + 5;
c = c + 67;
console.log(c);
let izzyCodex;
let bestBro;
izzyCodex = 80;
// 
let sum = 52 + 48;
console.log(sum);
let diff = 60 * 30;
console.log(diff);
let quotient = 1800 / 5;
console.log(quotient);
let CSC = 100;
CSC++;
console.log(CSC);
CSC--;
console.log(CSC);
let yhh = 3 * 0.0006;
console.log(yhh);
let remain;
remain = 40 % 3;
console.log(remain);
a -= 50;
b *= 70;
console.log(a);
console.log(b);
let firstName = "tony";
let str = "My name is \"Israel\"";
console.log(str);
let myStr = `My name is "Israel" i am 'nice' 17\\7`;
console.log(myStr);

/***
 CODE   OUTPUT
 \'     single quote
 \"     double quote
 \\     backslash
 \n     newline
 \r     carriage return
 \t     tab
 \b     backspace
 \f     form feed
 ***/
let firm = "\b Firstline \n\t\\ Secondline\n Thirdline";
console.log(firm);

// ✅ Fixed - removed 'let' (just reassign)
myName = "Israel";
let myStr2 = "My name is " + myName + ", How Are You doing? ";  // Renamed to avoid conflict
console.log(myStr2);

let my = 0;
// ✅ Fixed - removed 'let' (just reassign)
izzyCodex = "Love❤️";
my = izzyCodex.length;
console.log(my);
console.log(izzyCodex);
my = izzyCodex[0];
console.log(my);
// my=izzyCodex[4]
console.log(my);
// ✅ Fixed - removed 'let' (just reassign)
izzyCodex = "Love❤️";
let me = izzyCodex[izzyCodex.length - 3];
console.log(me);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb
        + " " + "to the market" + " " + myAdverb + ".";
    return result;
}
console.log(wordBlanks("cat", "small", "crawled", "effortlessly"));
console.log(wordBlanks("precious", "tiny", "cried", "sluggishly"));

let array = ["izzy", 1];
let arr = [
    ["him", 1],
    ["her", 2]
];

function intro(name, age, stateOfOrigin, hobby) {
    let result = "";
    result = "My name is " + name + ", I am " + age + " years old and i'm from " + stateOfOrigin + " state . I love " + hobby + ".";
    return result;
}
console.log(intro("Precious", "12", "Ekiti", "Disturbing Nifemi"));
console.log(intro("Semilore", "9", "Ekiti", "Scattering the House"));
console.log(intro("Imole", "6", "Ekiti", "Disturbing Everybody"));
console.log(intro("Israel", "17", "Ekiti", "coding and playing games"));

let izzy = "israel";
izzy = "Lizzy";
console.log(izzy);
let myArray = [
    [50, 40, 70]
];
console.log(myArray);
let ourArray = [
    [56, 88, 99],
    [60, 79, 66],
    [78, 55, 77]
];
ourArray[1][2] = 4;
console.log(ourArray);
myArray.push([3, 34, 93]);
console.log(myArray);
myArray.shift([50, 40, 70]);

function myReusableFunction() {
    console.log("Yooo!, World");
}
myReusableFunction();

function hyy(a, b) {
    console.log(a - b);
}
hyy(8, 6);

/* Global Scope and functions
 Scope refers to the visibility of variables, variables defined outside of a function box are called global scope
 and global scope means it can be seen every where in your javascript code
*/

function timesTen(num) {
    return num * 10;
}
console.log(timesTen(3));
console.log(timesTen(809));

let changed = 0;

function change(num) {
    return (num * 2) / 3;
}
changed = change(30);
console.log(changed);

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(false));

function trueOrFalse2(isItTrue) {  // ✅ Renamed to avoid conflict
    if (isItTrue) {
        return "Yes, it is true";
    }
    return "No, it isn't true";
}
console.log(trueOrFalse2(true));

function testEqual(Feb) {
    if (Feb == 20) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual('20.0'));

function test(Jan) {
    if (Jan === 40) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(test('40'));

function equality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(equality(20, '20'));

function tst(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log(tst(25));

// ✅ Fixed - renamed to avoid conflict with later declaration
let goalNames = ["Goal", "Brace", "Hat-trick"];

function soccerScore(goal) {
    if (goal == 1) {
        return goalNames[0];
    }
    if (goal == 2) {
        return goalNames[1];
    }
    if (goal == 3) {
        return goalNames[2];
    }
}
console.log(soccerScore(2));

function stateCapitalFinder(destination) {  // ✅ Renamed to avoid conflict
    let place = "";
    switch (destination) {
        case 1:
            place = "Lagos";
            break;
        case 2:
            place = "Ondo";
            break;
        case 3:
            place = "Abuja";
            break;
        default:
            place = "Invalid";
            break;
    }
    return place;
}
console.log(stateCapitalFinder(9));

console.log("Node is working");

function Intro2(name, age, stateOfOrigin, hobby) {  // ✅ Renamed to avoid conflict
    let results = "";
    results = "My name is " + name + " I am " + age + " years old, I am from " + stateOfOrigin + " state and I love " + hobby + ".";
    return results;
}
console.log(Intro2("Israel", "17", "Ekiti", "playing games"));

var a2;
var b2 = 10;
a2 = b2;
console.log(a2 + b2);

let name2 = "Israel";  // ✅ Renamed to avoid conflict
let age2 = 17;
let stateOfOrigin2 = "Ekiti";  // ✅ Renamed to avoid conflict
console.log("My name is " + name2 + " I am " + age2 + " years old and I am from " + stateOfOrigin2 + " state.");

// Grade Finder
function gradeFinder(score) {
    if (score >= 70) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else if (score >= 45) {
        return "D";
    } else if (score >= 40) {
        return "E";
    } else {
        return "F";
    }
}
console.log(gradeFinder(43));

// Logical operators
// ✅ Fixed - removed duplicate 'let' and used existing goalNames
function soccerScore2(goal) {  // ✅ Renamed
    if (goal == 1) {
        return goalNames[0];
    }
    if (goal == 2) {
        return goalNames[1];
    }
    if (goal == 3) {
        return goalNames[2];
    }
}
console.log(soccerScore2(3));

// Switch statement (Faculty finder)


// Functions
function greater(a, b) {
    return a > b;
}
console.log(greater(500, 300));

// Objects
var myCat = {
    "name": "Ruby",
    "legs": 4,
    "tails": 1,
    "his friends": "Everyone"
};

// Accessing objects properties with dot notation
var catName = myCat.name;
console.log(catName);
/* Accessing objects properties with bracket notation
 This can be used anytime but required for object properties 
 with spaces like "an apple" or "my side".......
*/
var hisFriends = myCat["his friends"];
console.log(hisFriends);
//using dot notation to update object properties
myCat.name = "Sparky";
console.log(myCat.name);
// adding properties to an object
myCat["sound"] = "Meow";
console.log(myCat.sound);
// deleting properties to an object
delete myCat.tails;

// checking if an object has a property
function stateAndCapital(val) {
    var result = "";
    var state = {
        "abia": "umahia",
        "adamawa": "yola",
        "akwa-ibom": "uyo",
        "anambra": "ukwa",
        "bayelsa": "yenegoa",
        "ondo": "akure",
        "lagos": "ikeja",
        "ekiti": "ado-ekiti"
    };
    result = state[val];
    return result;
}
console.log(stateAndCapital("lagos"));

var stateData = {  // ✅ Renamed to avoid conflict
    "abia": "umahia",
    "adamawa": "yola",
    "akwa-ibom": "uyo",
    "anambra": "ukwa",
    "bayelsa": "yenegoa",
    "ondo": "akure",
    "lagos": "ikeja",
    "ekiti": "ado-ekiti"
};

function checkState(checkProp) {
    if (stateData.hasOwnProperty(checkProp)) {
        return stateData[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkState("ekiti"));

// Nested objects
var mySelf = [{
    "name": "Adelusi Oluwanifemi",
    "title": "Mr",
    "DOB": 2009,
    "certificate": [
        "FSLC",
        "BECE",
        "SSCE",
        "JUPEB (A-level exam)",
    ]
}, {
    "name": "Adedayo Olufemi",
    "title": "Mr",
    "DOB": 1999,
    "certificate": [
        "FSLC",
        "NECO/BECE",
        "SSCE",
    ]
}];
var myArray2 = [];  // ✅ Renamed to avoid conflict

// while loop
var i = 0;
while (i < 5) {
    myArray2.push(i);
    i++;
}
console.log(myArray2);
for (var i = 1; i < 7; i++) {
    myArray2.push(i);
}
console.log(myArray2);
var ourArray2 = [];  // ✅ Renamed to avoid conflict
for (var i = 9; i > 0; i -= 2) {
    ourArray2.push(i);
}
console.log(ourArray2);

// var can be used to declare a variable more than once while 
//let only lets u declare a particular variable once
// const is used to declare a variable that cannot be reassigned a new value but can be mutated if it's an array or object

// Profile Lookup
let contacts = [{
    "firstName": "Khabby",
    "lastName": "Lame",
    "number": "38353953895",
    "likes": ["Dancing", "Reading", "Excersising"]
}, {
    "firstName": "Endurance",
    "lastName": "Favour",
    "number": "899328497",
    "likes": ["Cooking", "Gaming", "Knitting"]
}, {
    "firstName": "Gojo",
    "lastName": "Kakarot",
    "number": "839478493",
    "likes": ["Fighting", "Gisting"]
}, {
    "firstName": "Estheri",
    "lastName": "Ayaba",
    "number": "930049040",
    "likes": ["Reading stories", "Movies"]
}, {
    "firstName": "Akame",
    "lastName": "Yuta",
    "number": "3535335365",
    "likes": ["Watchihg Movies", "Comics"]
}];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}
var data = lookUpProfile("Akame", "lastName");
console.log(data);

function randomFraction() {
    return Math.floor(Math.random() * 20);
}
console.log(randomFraction());

function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("59"));

function convertToIntegerRadix(rad) {
    return parseInt(rad, 2);
}
console.log(convertToIntegerRadix("101010101"));

function checkGrade(sum) {
    if (sum < 0 || sum > 40) {
        return "Invalid score";
    } else if (sum >= 35) {
        return "Excellent";
    } else if (sum >= 30) {
        return "Good";
    } else if (sum >= 25) {
        return "Ok";
    } else if (sum >= 20) {
        return "Average";
    } else if (sum > 10) {
        return "Poor";
    } else {
        return "Fail";
    }
}
console.log(checkGrade(7));

// condition ? statement-if-true : statement-if-false; (ternary operator)



// ✅ Fixed - removed 'let' (just reassign)
myName = true;
console.log(typeof myName);

let message = "Hello, world!";
let greeting = message.slice();
console.log(greeting);

let sentence = "Learning JavaScript is fun!";
let extracted = sentence.slice(9, -5);
console.log(extracted);

let x = 5;
console.log(++x);
console.log(x);

const fortune1 = "Your cat will look very cuddly today";
const fortune2 = "You will find a new hobby soon.";
const fortune3 = "It would be wise to avoid the color red today.";
const fortune4 = "Be cautious of your new neighbors.";
const fortune5 = "The weather will be nice tomorrow.";

const randomNumber = Math.floor(Math.random() * 5) + 1;
let selectedFortune;

if (randomNumber === 1) {
    selectedFortune = fortune1;
} else if (randomNumber === 2) {
    selectedFortune = fortune2;
} else if (randomNumber === 3) {
    selectedFortune = fortune3;
} else if (randomNumber === 4) {
    selectedFortune = fortune4;
} else {
    selectedFortune = fortune5;
}
console.log(selectedFortune);

function dayFinder(dayOfWeek) {
    let answer = "";
    switch (dayOfWeek) {
        case 1:
            answer = "It's Monday! Time to start the week strong.";
            break;
        case 2:
            answer = "It's Tuesday! Keep the momentum going.";
            break;
        case 3:
            answer = "It's Wednesday! We're halfway there.";
            break;
        case 4:
            answer = "It's Thursday! Almost the weekend.";
            break;
        case 5:
            answer = "It's Friday! The weekend is near.";
            break;
        case 6:
            answer = "It's Saturday! Enjoy your weekend.";
            break;
        case 7:
            answer = "It's Sunday! Rest and recharge.";
            break;
        default:
            answer = "Invalid day! Please enter a number between 1 and 7.";
    }
    return answer;
}
console.log(dayFinder(5));

const e = 2;
if (1 == "1") {
  let u = 3;
  console.log(e + u);
}
console.log(e);

let vehicle = "car";

switch (vehicle) {
  case "bike":
    console.log("Bikes are two-wheelers.");
    break;
  case "car":
    console.log("Some cars are 4x4.");
  case "truck":
    console.log("Trucks can carry heavy loads.");
    break;
  default:
    console.log("Unknown vehicle.");
}
/* It logs "Some cars are 4x4." then falls through "Trucks can carry heavy loads." because there is no break statement after the "car" case,
so it falls through to the "truck" case. */

let day = "Saturday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend! 🎉");
    break;
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday.");
    break;
  default:
    console.log("Invalid day.");
}

function checkEqual(a, b) {
    return a === b ? true : false;
    console.log(checkEqual(a, b))
}
checkEqual(20, 20);

const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

console.log(calculateArea(9, 4));
// An example of an arrow function that calculates the area of a rectangle given its width and height.

function calculateArea2(width, height) {
    const area2 = width * height;
    return area2;
}
console.log(calculateArea2(30, 29));

let multiply = (a, b = 1) => a * b;

console.log(multiply(5));
console.log(multiply(5, 2));

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25))
console.log(calculateSquareRoot(100))

// loan eligibility validator
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);
console.log (duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);


// Leap year function
function isLeapYear (num){
  if (year % 400 === 0){
    return true; 
  }
  else if (year % 100 === 0){
    return false;
  }
  else if (year % 4 === 0){
    return true;
  }
  else {
    return false;
  }
}

const year = 2050;
console.log(isLeapYear(year)) 

// Truncating a string 

function truncateString (str, num){
  if (str.length > num){
    
    let cutText = str.slice(0, num);

    return cutText + "...";
  } else {
    return str;
  }
}

console.log (truncateString("Adelusi Oluwanifemi Israel",  20));