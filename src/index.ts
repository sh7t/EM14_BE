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
