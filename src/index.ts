import promptSync from 'prompt-sync';
const prompt = promptSync();


// 1.

/*
function checkEmptyString(str: string): boolean {
    return str.trim().length === 0;
}

// ----------------------------------------

let name: string = prompt("Your name: ");
if (checkEmptyString(name)) {
    console.log("Ain't entered your name");
    process.exit();
}

let lastName: string = prompt("Your family name: ");
if (checkEmptyString(lastName)) {
    console.log("Ain't entered your family name");
    process.exit();
}

const user = {
    fullName: name + " " + lastName,
}
console.log(user.fullName);
*/

// 2.

/*
function compareConstWithInput(constant: string, userInput: string): boolean {
    return userInput === constant;
}

// ----------------------------------------

let login = prompt("Login: ");

let password = prompt("Password: ");

if (compareConstWithInput("admin", login) && compareConstWithInput("12345", password)) {
    console.log("Successfully logged in");
} else {
    console.log("Access denied");
}
*/


// 3.

/*
function checkStringSuitability(str: string): boolean {
    return str.trim().length > 5;
}

function checkPriceSuitability(num: number): boolean {
    return num > 0;
}

// ----------------------------------------

let productName: string = prompt("Product name: ");
if (!checkStringSuitability(productName)) {
    console.log("Ain't appropriate product name");
    process.exit();
}

let productDescription: string = prompt("Product description: ");
if (!checkStringSuitability(productDescription)) {
    console.log("Ain't appropriate product description");
    process.exit();
}

let productPrice: number = Number(prompt("Product price: "));
if (!checkPriceSuitability(productPrice)) {
    console.log("Ain't appropriate product price");
    process.exit();
}

const product = {
    name: productName,
    description: productDescription,
    price: productPrice,
}

console.log(`${product.name}: ${product.description}.\nPrice: ${product.price}`);
*/

// 4.

/*
function checkHeightSuitability(height: number): boolean {
    return height > 60 && height < 280; // зріст найменшої і найвищої людей з похибкою
}
function checkWeightSuitability(weight: number): boolean {
    return weight > 0 && weight < 730; // вага найлегшої і найващої людей з похибкою
}
function analyseBodyMassIndexAppropriability(bmi: number): void {
    if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Norm");
    } else {
        bmi < 18.5 ? console.log("Insufficient weight") : console.log("Excessive weight");
    }
}

// ----------------------------------------

let height: number = Number(prompt("Your height in centimeters: "))
if (!checkHeightSuitability(height)) {
    console.log("Ain't appropriate height");
    process.exit();
}

let weight: number = Number(prompt("Your weight in kilograms: "))
if (!checkHeightSuitability(height)) {
    console.log("Ain't appropriate height");
    process.exit();
}

let bmi: number = Math.round(weight / Math.pow((height/100), 2))

analyseBodyMassIndexAppropriability(bmi)
*/

// 5.

/*

interface User {
    email: string;
    password: string;
    birthday: string;
}

// ----------------------------------------

function checkEmailSuitability(email: string): boolean {
    return email.trim().length > 8 && email.includes('@') && email.includes('.');
}
function checkPasswordSuitability(password: string): boolean {
    let repeatedChars: number = 0;
    for (let char of password) {
        if (char === password[0]) {
            repeatedChars++;
        }
    }

    return password.trim().length > 8 && password.trim().length < 16 && (password.trim().length != repeatedChars);
}
function checkAgeSuitability(birthDate: string): boolean {
    let birthday: Date = new Date(
        Number(birthDate.slice(6)),
        Number(birthDate.slice(3, 5)),
        Number(birthDate.slice(0, 2)));

    let age: number = new Date().getFullYear() - birthday.getFullYear();
    return age >= 18 && age < 100;
}

// ----------------------------------------

let email: string = prompt("Your email: ");
if (!checkEmailSuitability(email)) {
    console.log("Ain't appropriate email");
    process.exit();
}

let password: string = prompt("Your password: ");
if (!checkPasswordSuitability(password)) {
    console.log("Ain't appropriate password");
    process.exit();
}

let birthday: string = prompt("Birthday(dd.mm.yyyy): ");
if (!checkAgeSuitability(birthday)) {
    console.log("Ain't adult");
    process.exit();
}

let currentUser: User = {
    email: email,
    password: password,
    birthday: birthday
}

console.log(`\nRegistered user:\nEmail: ${currentUser.email}\nPassword: ${currentUser.password}\nBirthday: ${currentUser.birthday}`);
*/

// 7.

/*
interface Temperature {
    temperatureValue: number;
    unit: string;
}

// ----------------------------------------

function convertTemperature(temperature: number, unit: string): Temperature {
    if (unit === "C") {
        return {
            temperatureValue: (temperature * 9 / 5) + 32,
            unit: "F"
        }
    } else if (unit === "F") {
        return {
            temperatureValue: (temperature - 32) / 5 * 9,
            unit: "C"
        }
    } else {
        console.log("Invalid temperature value or temperature unit of measurement.");
        process.exit();
    }


}

function analyzeConvertTemperature(temperature: string): void {
    let temperatureValue: number = Number(temperature.slice(0, temperature.length-2));
    let unit: string = temperature[temperature.length-1];

    let convertedTemperature: Temperature = convertTemperature(temperatureValue, unit);

    console.log(`Temperature in ${convertedTemperature.unit}: ${convertedTemperature.temperatureValue}`);
}

// ----------------------------------------

let temperature: string = prompt("Temperature(e.g. 100 C, 32 F): ").trim()

analyzeConvertTemperature(temperature);
*/
