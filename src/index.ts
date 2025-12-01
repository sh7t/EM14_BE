import promptSync from 'prompt-sync';
const prompt = promptSync();

// 1.

/*
function checkEmailSuitability(email: string): void {
    if (!(email.length > 8 && email.includes('@') && email.includes('.'))) {
        throw new Error("Invalid email. Expected real email address.");
    }
}
function checkPasswordSuitability(password: string): void {
    let repeatedChars: number = 0;
    for (let char of password) {
        if (char === password[0]) {
            repeatedChars++;
        }
    }
    if (!(password.length > 8 && password.length < 16 && (password.length != repeatedChars))) {
        throw new Error("Expected password has to be from 8 up to 16 characters and unrepeatable.");
    }
}
function checkAgeSuitability(birthDate: string): void {
    let birthday: Date = new Date(
        Number(birthDate.slice(6)),
        Number(birthDate.slice(3, 5)),
        Number(birthDate.slice(0, 2)));

    let age: number = new Date().getFullYear() - birthday.getFullYear();

    if (age < 18 && age >= 100) {
        throw new Error("Inappropriate age.");
    }
}

// ----------------------------------------

interface User {
    email: string;
    password: string;
    birthday: string;
    showUser: () => void
}

// ----------------------------------------

try {
    let email: string = prompt("Your email: ").trim();
    checkEmailSuitability(email)

    let password: string = prompt("Your password: ").trim();
    checkPasswordSuitability(password)

    let birthday: string = prompt("Birthday(dd.mm.yyyy): ").trim();
    checkAgeSuitability(birthday)

    let currentUser: User = {
        email: email,
        password: password,
        birthday: birthday,
        showUser: function(): void {
            console.log(`\nRegistered user:\nEmail: ${this.email}\nPassword: ${this.password}\nBirthday: ${this.birthday}`);
        }
    }
    currentUser.showUser();
} catch (Error) {
    console.error("Error occurred: " + Error.message);
}
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
        throw new Error("Invalid temperature unit \"" + unit + "\" of measurement.");
    }


}
function analyzeConvertTemperature(temperature: string): void {
    let temperatureValue: number = Number(temperature.slice(0, temperature.length-2));
    if (isNaN(temperatureValue) || temperatureValue === 0) {
        throw new Error("Invalid temperature value");
    }
    let unit: string = temperature[temperature.length-1];

    let convertedTemperature: Temperature = convertTemperature(temperatureValue, unit);

    console.log(`Temperature in ${convertedTemperature.unit}: ${convertedTemperature.temperatureValue}`);
}

// ----------------------------------------

interface Temperature {
    temperatureValue: number;
    unit: string;
}

// ----------------------------------------

try {
    let temperature: string = prompt("Temperature(e.g. 100 C, 32 F): ").trim()
    analyzeConvertTemperature(temperature);
} catch (Error) {
    console.error("Error occurred: " + Error.message);
}
*/
