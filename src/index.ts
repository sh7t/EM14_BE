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
                console.log(`${worker.name} balance for now - ${worker.balance}`);

            });
            console.log("-======================-");
        }
    }

}
// -==main==-
const imitator = new LifeImitator();
imitator.imitateYearCycle([...imitator.generateProfessors(3), ...imitator.generateStudents(10), ...imitator.generateStaffs(3)]);



