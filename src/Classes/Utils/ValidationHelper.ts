export class ValidationHelper {
    static isPositive(value: number): boolean { return value > 0; }
    static isNegative(value: number): boolean { return value < 0; }
    static isNonPositive(value: number): boolean { return value <= 0; }
    static isNonNegative(value: number): boolean { return value >= 0; }
}
