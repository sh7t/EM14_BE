import {Resource} from "./Resources";

export class Recipe {
    // fields
    private static autoInc: number = 1;
    public readonly id: number;
    public readonly name: string;
    public readonly in: Map<string, number>;
    public readonly out: Resource[];

    // init
    constructor(name: string, input: Map<string, number>, ...output: Resource[]) {
        this.id = Recipe.autoInc++;
        this.name = name.trim().length > 2 ? name.trim() : "Unknown recipe";
        this.in = input;
        this.out = output;
    }
}
