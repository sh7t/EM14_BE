import promptSync from 'prompt-sync';
const prompt = promptSync();

// 1.

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

// 2.

/*
function ShowKeyValueStructure(key: string, value: any): void {
    console.log(key + ": " + value);
}

function checkNameSuitability(name: string): void {
    if (!(name.length >= 2 && name.length <= 50)) {
        throw new Error('Invalid name. Expected a name from 2 to 50 characters long!');
    }
}

function checkPhoneNumberSuitability(phoneNumber: string): void {
    let isAllNumbers: boolean = true;

    for (let i: number = 1; i < phoneNumber.length; i++) {
        if (isNaN(Number(phoneNumber[i]))) {
            isAllNumbers = false;
            break;
        }
    }

    if (!isAllNumbers || !(phoneNumber.length >= 10 && phoneNumber.length <= 13) || phoneNumber[0] !== '+') {
        throw new Error("Invalid phone number. Expected a real phone number.");
    }
}

function checkPostalIndexSuitability(postalIndex: number): void {
    if (postalIndex.toString().length !== 5 || isNaN(postalIndex)) {
        throw new Error("Invalid postal index. Expected a postal index 5 digits long!");
    }
}

function checkPaymentMethodSuitability(paymentMethod: string): void {
    if (paymentMethod !== "cash" && paymentMethod !== "card" && paymentMethod !== "paypal") {
        throw new Error("Invalid payment method. Expected one of the proposed payment methods.");
    }
}

// ----------------------------------------

interface Order {
    name: string,
    phoneNumber: string,
    postalIndex: number,
    paymentMethod: string
}

// ----------------------------------------

try {
    let name: string = prompt("Your name: ").trim();
    checkNameSuitability(name);

    let phoneNumber: string = prompt("Your full phone number(with country code): ").trim();
    checkPhoneNumberSuitability(phoneNumber);

    let postalIndex: number = Number(prompt("Your postal index: ").trim());
    checkPostalIndexSuitability(postalIndex);

    let paymentMethod: string = prompt("Your payment method(cash, card or paypal): ").trim();
    checkPaymentMethodSuitability(paymentMethod);

    const userOrder: Order = {
        name: name,
        phoneNumber: phoneNumber,
        postalIndex: postalIndex,
        paymentMethod: paymentMethod
    };

    console.log("\nYour order:");
    ShowKeyValueStructure("Name", userOrder.name);
    ShowKeyValueStructure("Phone number", userOrder.phoneNumber);
    ShowKeyValueStructure("Postal index", userOrder.postalIndex);
    ShowKeyValueStructure("Payment method", "by " + userOrder.paymentMethod);
    console.log("~~~We hope everything right, but we don't really care~~~");
} catch (Error) {
    console.error("Error occurred: " + Error.message);
}
*/

// 3.

/*
function ShowKeyValueStructure(key: string, value: any): void {
    console.log(key + ": " + value);
}

function checkNameSuitability(name: string): void {
    if (!(name.length >= 2 && name.length <= 50)) {
        throw new Error("Invalid name. Expected a name from 2 to 50 characters long!");
    }
}

function checkEmailSuitability(email: string): void {
    if (!(email.length > 8 && email.includes('@') && email.includes('.'))) {
        throw new Error("Invalid email. Expected a valid email address!");
    }
}

function checkEvaluationSuitability(grade: number): void {
    if (!(grade >= 1 && grade <= 5)) {
        throw new Error("Invalid grade. Expected a valid evaluation value!");
    }
}

function checkReviewTextSuitability(text: string): void {
    if (text.length === 0 || text.length > 300) {
        throw new Error("Invalid review text! Expected a review from 1 to 300 characters long!");
    }
}

// ----------------------------------------

interface Review {
    name: string,
    email: string,
    grade: number,
    text: string
}

// ----------------------------------------

try {
    let name: string = prompt("Your name: ").trim();
    checkNameSuitability(name);

    let email: string = prompt("Your email: ").trim();
    checkEmailSuitability(email);

    let grade: number = Number(prompt("How do You evaluate product/place/service(1-5): ").trim());
    checkEvaluationSuitability(grade);

    let text: string = prompt("Describe Your evaluation(up to 300 characters): ").trim();
    checkReviewTextSuitability(text);

    const userReview: Review = {
        name: name,
        email: email,
        grade: grade,
        text: text
    };

    console.log("\nYour review:");
    ShowKeyValueStructure("Name", userReview.name);
    ShowKeyValueStructure("Email", userReview.email);
    ShowKeyValueStructure("Evaluated grade", userReview.grade);
    ShowKeyValueStructure("Description", userReview.text);
    console.log("~~~We hope everything right, but we don't really care~~~");
} catch (Error) {
    console.error("Error occurred: " + Error.message);
}
*/

// 4.

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
