export class CurrencyHelper {
    static roundCurrency(value: number): number {
        return Math.round(value * 100) / 100;
    }
}
