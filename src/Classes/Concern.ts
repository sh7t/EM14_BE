import {Warehouse} from "./Warehouse";
import {Production} from "./Productions";

export class Concern {
    // fields
    private _warehouse: Warehouse = null;
    private _productions: Production[] = [];

    // init
    constructor(warehouse: Warehouse, ...productions: Production[]) {
        this.warehouse = warehouse;
        this.productions = productions;
    }

    // get-n-set
    get warehouse() {
        return this._warehouse;
    }

    protected set warehouse(warehouse: Warehouse) {
        this._warehouse = warehouse;
    }

    get productions() {
        return this._productions;
    }

    protected set productions(productions: Production[]) {
        this._productions = productions;
    }

    // functions
    imitateTime(time: number = 365) { // days
        for (let i = 0; i < time; i++) {
            this.productions.forEach(production => {
                production.produce(this.warehouse);
            })
        }
    }
}
