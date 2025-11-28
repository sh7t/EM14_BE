import promptSync from 'prompt-sync';
const prompt = promptSync();

// 1.--------------------------------------------------

/*
let userNumber: number = Number(prompt("Choose your number: "));

if (userNumber >= 10 && userNumber <= 50 ) {
    console.log(`Your number (${userNumber}) is in range!`);
} else {
    console.log(`Your number (${userNumber}) is out of range!`);
}
*/

// 2.--------------------------------------------------

/*
let cost: number = Number(prompt("How much does your meal cost: "));
if (cost <= 0) {
    console.log("You're lying about cost.");
    process.exit();
}

let tips: number = Number(prompt("How much you want to tip(%): "));
if (tips < 0) {
    console.log("Wrong percentage, I guess.");
    process.exit();
}

console.log(`So, amount of tips you wanna left according to your percentage is: ${(cost*tips)/100}`);
*/

// 3.--------------------------------------------------

/*
let age: number = Number(prompt("Enter your age: "));

if (age <= 0 || age >= 100) {
    console.log("Error...");
    process.exit();
} else if (age <= 6 || age >= 65) {
    console.log("You're the luckiest person ever: free4U!");
} else if (age <= 12) {
    console.log("Children ticket: 50 for you!");
} else if (age <= 17) {
    console.log("Teenage ticket: 80 for you!");
} else {
    console.log("Adult ticket: 120 for you!");
}
*/

// 4.--------------------------------------------------

/*
function isPossibleTriangle(firstSide: number, secondSide: number, thirdSide: number): boolean {
    if ((firstSide + secondSide > thirdSide) && (firstSide + thirdSide > secondSide) && (thirdSide + secondSide > firstSide)) {
        return true;
    } else {
        return false;
    }
}

let firstSide: number = Number(prompt("First side of triangle: "));
if (firstSide <= 0) {
    console.log("Error...");
    process.exit();
}

let secondSide: number = Number(prompt("Second side of triangle: "));
if (secondSide <= 0) {
    console.log("Error...");
    process.exit();
}

let thirdSide: number = Number(prompt("Third side of triangle: "))
if (thirdSide <= 0) {
    console.log("Error...");
    process.exit();
}

if (isPossibleTriangle(firstSide, secondSide, thirdSide)) {
    if (firstSide == secondSide == thirdSide) {
        console.log("Your triangle is equilateral.");
    } else if (firstSide == thirdSide || firstSide == secondSide || secondSide == thirdSide) {
        console.log("Your triangle is isosceles.");
    } else {
        console.log("Your triangle is scalene.");
    }
} else {
    console.log("It's impossible to get a triangle with a sides you've been chosen.");
}
*/

// 5.--------------------------------------------------

/*
let angle: number = Number(prompt("Choose an angle: "));

if (angle <= 0 || angle > 180) {
    console.log("Unsupported angle value, error...");
    process.exit();
}

if (angle < 90) {
    console.log("Your angle is acute.");
} else if (angle == 90) {
    console.log("Your angle is right.");
} else if (angle < 180) {
    console.log("Your angle is obtuse.");
} else {
    console.log("Your angle is straight.");
}
*/
