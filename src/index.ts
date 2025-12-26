// import promptSync from 'prompt-sync';
import { names } from './names';

function roundCurrency(value: number): number {
    return Math.round(value * 100) / 100;
}

class Random {
    static randomInteger(min: number, max: number): number {
        if (min > max) { throw new Error("Minimum value can't be greater than maximum!"); }
        return Math.floor(Math.random() * (max-min)) + min;
    }
}
class ValidationHelper {
    static isPositive(value: number): boolean { return value > 0; }
    static isNegative(value: number): boolean { return value < 0; }
    static isNonPositive(value: number): boolean { return value <= 0; }
    static isNonNegative(value: number): boolean { return value >= 0; }
}

// 1.
abstract class Person {
    // fields
    protected readonly _defaultHours: number = 160;
    protected _totalHours: number = 0;
    protected _hours: number = 0;
    protected _name: string = "";
    protected _balance: number = 0;
    protected _salaryPerHour: number = 30;
    protected _coefficient: number = 1;
    protected _overtimeCoefficient: number = 1;

    // init
    protected constructor(name: string) {
        this.name = name;
    }


    // get-n-set
    get totalHours(): number {
        return this._totalHours;
    }
    protected set totalHours(value: number) {
        if (ValidationHelper.isNonPositive(value)) {
            throw new Error("Total hours must be greater than zero.");
        }
        this._totalHours = value;
    }
    get hours(): number {
        return this._hours;
    }
    protected set hours(value: number) {
        if (ValidationHelper.isNegative(value)) {
            throw new Error("Hours must be greater than zero.");
        }
        this._hours = value;
    }

    get name(): string {
        return this._name;
    }
    protected set name(value: string) {
        if (value.trim().length < 2) {
            throw new Error("Name must be at least 2 characters.");
        }
        this._name = value.trim();
    }

    get balance(): number {
        return this._balance;
    }
    protected set balance(value: number) {
        if (ValidationHelper.isNegative(value)) {
            throw new Error("Balance must be a positive number.");
        }
        this._balance = value;
    }

    get salaryPerHour(): number {
        return this._salaryPerHour;
    }
    protected set salaryPerHour(value: number) {
        if (ValidationHelper.isNonPositive(value)) {
            throw new Error("Salary per hour must be greater than zero.");
        }
        this._salaryPerHour = value;
    }

    get coefficient() {
        return this._coefficient;
    }

    get overtimeCoefficient() {
        return this._overtimeCoefficient;
    }

    protected get defaultHours() {
        return this._defaultHours;
    }

    // functions
    abstract calculateSalary(hours: number): number;

    receiveSalary(salary: number): void {
        if (ValidationHelper.isNonPositive(salary)) { throw new Error("Salary must be greater than zero."); }
        this.balance += salary;
    };

    addHours(hours: number) {
        if (ValidationHelper.isNonPositive(hours)) { throw new Error("Accruing hours must be greater than zero."); }
        this.hours += hours;
    }

    resetHours(): void {
        this.totalHours += this.hours;
        this.hours = 0;
    }
}
class Professor extends Person {
    private static autoInc: number = 1;
    public readonly id: number;
    private allowance: number = 2000;
    protected _coefficient: number = 3;
    protected _overtimeCoefficient: number = 5;

    constructor(name: string) {
        super(name);
        this.id = Professor.autoInc++;
    }

    calculateSalary(hours: number = this.hours) {
        if ( ValidationHelper.isNonPositive(hours) ) { throw new Error("Professor's hours must be greater than zero."); }
        if (hours <= this._defaultHours) { return roundCurrency((this.salaryPerHour * this.coefficient * hours) + this.allowance); }
        return roundCurrency((this.salaryPerHour * this.coefficient * this.defaultHours) + (this.salaryPerHour * this._overtimeCoefficient * (hours - this.defaultHours)) + this.allowance);
    }
}
class Student extends Person {
    private static autoInc: number = 1;
    public readonly id: number;
    protected _coefficient: number = 0.5;

    constructor(name: string) {
        super(name);
        this.id = Student.autoInc++;
    }

    calculateSalary(hours: number = this.hours) {
        if ( ValidationHelper.isNonPositive(hours) ) { throw new Error("Student's hours must be greater than zero."); }
        const randomExpense: number = Random.randomInteger(-700, 700);
        if (hours <= this._defaultHours) { return roundCurrency((this.salaryPerHour * this.coefficient * hours) + randomExpense); }
        return roundCurrency((this.salaryPerHour * this.coefficient * this.defaultHours) + (this.salaryPerHour * this._overtimeCoefficient * (hours - this.defaultHours)) + randomExpense);
    }
}
class Staff extends Person {
    private static autoInc: number = 1;
    public readonly id: number;
    protected _coefficient: number = 1.2;
    protected _overtimeCoefficient: number = 2;

    constructor(name: string) {
        super(name);
        this.id = Staff.autoInc++;
    }

    calculateSalary(hours: number = this.hours): number {
        if ( ValidationHelper.isNonPositive(hours) ) { throw new Error("Staff's hours must be greater than zero."); }
        if (hours <= this._defaultHours) { return roundCurrency((this.salaryPerHour * this.coefficient * hours)); }
        return roundCurrency((this.salaryPerHour * this.coefficient * this.defaultHours) + (this.salaryPerHour * this._overtimeCoefficient * (hours - this.defaultHours)));
    }
}
class LifeImitator {
    generateProfessor(): Professor { return new Professor(names[Random.randomInteger(0, names.length)]); }
    generateProfessors(arrayLength: number): Professor[] {
        if (ValidationHelper.isNonPositive(arrayLength)) { throw new Error("Amount of professors must be greater than zero."); }
        let professors: Professor[] = [];
        for (let i = 0; i < arrayLength; i++) {
            professors.push(this.generateProfessor());
        }
        return professors;
    }
    generateStudent(): Student { return new Student(names[Random.randomInteger(0, names.length)]); }
    generateStudents(arrayLength: number): Student[] {
        if (ValidationHelper.isNonPositive(arrayLength)) { throw new Error("Amount of students must be greater than zero."); }
        let students: Student[] = [];
        for (let i = 0; i < arrayLength; i++) {
            students.push(this.generateStudent());
        }
        return students;
    }
    generateStaff(): Staff { return new Staff(names[Random.randomInteger(0, names.length)]); }
    generateStaffs(arrayLength: number) {
        if (ValidationHelper.isNonPositive(arrayLength)) { throw new Error("Amount of staffs must be greater than zero."); }
        let staffs: Staff[] = [];
        for (let i = 0; i < arrayLength; i++) {
            staffs.push(this.generateStaff());
        }
        return staffs;
    }
    imitateYearCycle(workers: Person[]) {
        const workingDay: number = 8;
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 31; j++) {
                workers.forEach((worker) => {
                    worker.addHours(workingDay + Random.randomInteger(-1, 3));
                });
            }
            workers.forEach((worker) => {
                worker.receiveSalary(worker.calculateSalary(worker.hours));
                worker.resetHours();
            });
        }
    }
}
// -==main==-
try {
    const imitator = new LifeImitator();
    imitator.imitateYearCycle([...imitator.generateProfessors(3), ...imitator.generateStudents(10), ...imitator.generateStaffs(3)]);
} catch (error) {
    console.log("Error: " + error.message);
}

// 2.
class BreakdownError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "BreakdownError";
    }
}

abstract class Vehicle {
    // fields
    public readonly _brand: string = "";
    public readonly _model: string = "";
    protected _maxCapacity: number = 0;
    protected _fuelEfficiency: number = 0;
    protected _reliability: number = 0;
    protected _tariff: number = 0;

    // init
    constructor(brand: string, model: string) {
        this._brand = brand;
        this._model = model;
        this.reliability = 100;
    }
    // get-n-set
    get brand(): string {
        return this._brand;
    }
    get model(): string {
        return this._model;
    }
    get maxCapacity(): number {
        return this._maxCapacity;
    }
    get fuelEfficiency(): number {
        return this._fuelEfficiency;
    }
    set fuelEfficiency(value: number) {
        if (ValidationHelper.isNonPositive(value)) { throw new Error("Fuel efficiency must be greater than zero."); }
        if (this._fuelEfficiency > value) { throw new Error("Fuel efficiency can't decrease."); }
        this._fuelEfficiency = value;
    }
    get reliability(): number {
        return this._reliability;
    }
    set reliability(value: number) {
        if (ValidationHelper.isNonPositive(value)) { throw new Error("Reliability must be greater than zero."); }
        if (value > 100) { throw new Error("Reliability percentage can't be greater than hundred."); }
        this._reliability = value;
    }
    get tariff() {
        return this._tariff;
    }
    set tariff(value: number) {
        if (ValidationHelper.isNonPositive(value)) { throw new Error("Tariff must be greater than zero."); }
        this._tariff = value;
    }

    // functions
    abstract calculateDeliveryCost(distance: number, cargoWeight: number): number

    loadCargo(weight: number): void {
        if (ValidationHelper.isNegative(weight)) { throw new Error("Cargo's weight can't be negative."); }
        if (this.maxCapacity < weight) { throw new Error("Can't load more than capacity."); }
    }

    calculateFuelConsumption(distance: number): number {
        if (ValidationHelper.isNonPositive(distance)) { throw new Error("Distance must be greater than zero."); }
        if (Random.randomInteger(0, 100) > this.reliability) { throw new BreakdownError("Unreliable truck details failed critically."); }
        return this.fuelEfficiency * distance;
    }
}
class Truck extends Vehicle {
    // fields
    private static autoInc: number = 1;
    public readonly id: number = 0;
    protected _maxCapacity: number = 36000;
    protected _fuelEfficiency: number = 0.1; // per km
    protected _tariff: number = 5;
    protected _additional: number = 0.1;

    // init
    constructor(brand: string, model: string) {
        super(brand, model);
        this.id = Truck.autoInc++;
    }

    // get-n-set
    get additional() {
        return this._additional;
    }
    set additional(value: number) {
        if (ValidationHelper.isNegative(value)) { throw new Error("Additional cost can't be negative."); }
        this._additional = value;
    }

    // functions

    calculateDeliveryCost(distance: number, cargoWeight: number): number {
        if (ValidationHelper.isNonPositive(distance)) { throw new Error("Distance must be greater than zero."); }
        if (ValidationHelper.isNegative(cargoWeight)) { throw new Error("Cargo's weight can't be negative."); }
        return roundCurrency(this.tariff * distance + this.additional * cargoWeight);
    }
}
class Van extends Vehicle {
    // fields
    private static autoInc: number = 1;
    public readonly id: number = 0;
    protected _maxCapacity: number = 2000;
    protected _fuelEfficiency: number = 0.07; // per km
    protected _tariff: number = 3;
    protected _additional: number = 0.2;

    // init
    constructor(brand: string, model: string) {
        super(brand, model);
        this.id = Van.autoInc++;
    }

    // get-n-set
    get additional() {
        return this._additional;
    }
    set additional(value: number) {
        if (ValidationHelper.isNonPositive(value)) { throw new Error("Additional cost must be greater than zero."); }
        this._additional = value;
    }

    // functions
    calculateDeliveryCost(distance: number, cargoWeight: number): number {
        if (ValidationHelper.isNonPositive(distance)) { throw new Error("Distance must be greater than zero."); }
        if (ValidationHelper.isNegative(cargoWeight)) { throw new Error("Cargo's weight can't be negative."); }
        return roundCurrency(this.tariff * distance + this.additional * cargoWeight);
    }
}
class Drone extends Vehicle {
    // fields
    private static autoInc: number = 1;
    public readonly id: number = 0;
    protected _maxCapacity: number = 5;
    protected _fuelEfficiency: number = 0.04; // per km
    protected _tariff: number = 1;
    protected _distanceToDouble: number = 50;

    // init
    constructor(brand: string, model: string) {
        super(brand, model);
        this.id = Drone.autoInc++;
    }

    // get-n-set
    get distanceToDouble() {
        return this._distanceToDouble;
    }
    set distanceToDouble(value: number) {
        if (ValidationHelper.isNonPositive(value)) { throw new Error("Distance must be greater than zero."); }
        this._distanceToDouble = value;
    }

    // functions
    calculateDeliveryCost(distance: number, cargoWeight: number): number {
        if (ValidationHelper.isNonPositive(distance)) { throw new Error("Distance must be greater than zero."); }
        if (ValidationHelper.isNegative(cargoWeight)) { throw new Error("Cargo's weight must be greater than zero."); }
        if (cargoWeight > this.maxCapacity) { throw new Error(`Cargo's weight can't be greater than ${this.brand} ${this.model} max capacity.`); }
        if (distance < this.distanceToDouble) { return roundCurrency(this.tariff * distance); }
        return roundCurrency(this.tariff * distance * 2);
    }
}
class Company {
    // fields
    private static autoInc: number = 1;
    public readonly id: number = 0;
    private _name: string = "";
    private _couriers: Vehicle[] = [new Truck("Ford", "F150"), new Van("Mercedes-Benz", "Sprinter"),
                                   new Drone("Amazon", "Prime Air"), new Truck("Toyota", "Hilux"),
                                   new Van("Volkswagen", "Transporter"), new Drone("DJI", "FlyCart 30")
                                  ]
    private _balance: number = 2000;
    private _fuelPrice: number = 0.03; // per liter

    // init
    constructor(name: string) {
        this.id = Company.autoInc++;
        this.name = name;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (value.trim().length < 2) { throw new Error("Invalid name. Name has to be at least 2 characters!"); }
        this._name = value;
    }
    get couriers(): Vehicle[] {
        return this._couriers;
    }
    get balance() {
        return this._balance;
    }
    set balance(value: number) {
        if (ValidationHelper.isNegative(value)) { this._balance = 0; return; }
        this._balance = value;
    }
    get fuelPrice() {
        return this._fuelPrice;
    }
    set fuelPrice(value: number) {
        if (ValidationHelper.isNonPositive(value)) {
            throw new Error("Price must be greater than zero");
        }
        this._fuelPrice = value;
    }
}
// -==main==-
const rides = 100;
const company = new Company("Chevron");
for (let i= 0; i < rides; i++) {
    company.couriers.forEach((courier: Vehicle) => {
        try {
            const randomWeight = Random.randomInteger(1, courier.maxCapacity);
            const randomDistance = Random.randomInteger(1, 12345);

            courier.loadCargo(randomWeight);

            company.balance += courier.calculateDeliveryCost(randomDistance, randomWeight) - (courier.calculateFuelConsumption(randomDistance) * company.fuelPrice);
        } catch (error) {
            if (error.name === "BreakdownError") {
                console.log("Breakdown Error: ", error.message);
                company.balance -= Random.randomInteger(50, 2000);
            } else {
                console.error("Error: " + error.message);
            }
        }
    })
}
console.log(`${company.name} balance for now is ${roundCurrency(company.balance)}!`);

