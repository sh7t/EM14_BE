import {Resource} from "./Resources";

export class Warehouse {
    // fields
    private static autoInc: number = 1;
    public readonly id: number;
    private _resources: Map<string, number> = new Map<string, number>();

    // init
    constructor() {
        this.id = Warehouse.autoInc++;
    }

    // get-n-set
    get resources(): Map<string, number> {
        return this._resources;
    }

    // functions
    addResources(resources: Resource[], efficiency = 100): void {
        resources.forEach(resource => {
            const key: string = resource.constructor.name;
            const currentValue: number = this.resources.get(key) ?? 0;
            this.resources.set(key, currentValue + efficiency / 100);
        });
    }

    checkResources(resources: Map<string, number>): boolean {
        for (let resource of resources) {
            if ((this.resources.get(resource[0]) ?? 0) < resource[1]) {
                return false;
            }
        }
        return true;
    }

    takeResources(resources: Map<string, number>): boolean {
        if (this.checkResources(resources)) {
            for (let resource of resources) {
                this.resources.set(resource[0], (this.resources.get(resource[0]) ?? 0) - resource[1]);
            }
            return true;
        }
        return false;
    }
}
