export abstract class Resource {
    // fields
    protected static autoInc: number = 1;
    public readonly id: number;
    protected _productionTime: number = 0;

    // init
    constructor() {
        this.id = Resource.autoInc++;
    }

    // get-n-set
    get productionTime() {
        return this._productionTime;
    }
}
