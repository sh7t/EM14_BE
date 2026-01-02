export class Random {
    static randomInteger(min: number, max: number): number {
        if (min > max) { throw new Error("Minimum value can't be greater than maximum!"); }
        return Math.floor(Math.random() * (max-min)) + min;
    }
}
