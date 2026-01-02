import {ValidationHelper} from "../Utils";
import {Recipe} from "../Recipe"
import {Warehouse} from "../Warehouse";

export abstract class Production {
    // fields
    protected static autoInc: number = 1;
    public readonly id: number;
    protected _efficiency: number = 100;
    protected _recipes: Recipe[] = [];
    protected _activeRecipe: Recipe = null;
    protected _progress: number = 0;

    // init
    constructor(recipe: Recipe) {
        this.id = Production.autoInc++;
        this.addRecipe(recipe);
    }

    // get-n-set
    get efficiency(): number {
        return this._efficiency;
    }

    set efficiency(value: number) {
        if (ValidationHelper.isNonPositive(value) || value > 100) {
            throw new Error("Efficiency value must be in range from 1% to 100%.");
        }
        this._efficiency = value;
    }

    get recipes(): Recipe[] {
        return this._recipes;
    }

    get activeRecipe(): Recipe {
        return this._activeRecipe;
    }

    protected set activeRecipe(value: Recipe) {
        this._activeRecipe = value;
    }

    get progress(): number {
        return this._progress;
    }

    protected set progress(value: number) {
        if (ValidationHelper.isNegative(value)) {
            throw new Error("Progress cant be negative.");
        }
        this._progress = value;
    }

    // functions
    addRecipe(recipe: Recipe): void {
        if (this.recipes.some((rcp => rcp.id === recipe.id))) {
            throw new Error("Recipe already exists!");
        }
        this._recipes.push(recipe);
        if (this.recipes.length == 1) {
            this.activeRecipe = recipe;
        }
    }

    showRecipes(): void {
        console.log("ID | Recipe");
        this.recipes.forEach(recipe => console.log(`${recipe.id} | ${recipe.name}`));
    }

    activateRecipe(id: number): void {
        const index: number = this.recipes.findIndex((recipe: Recipe) => recipe.id === id);
        if (index === -1) {
            throw new Error(`No recipe with such id(${id}).`);
        }
        this.activeRecipe = this.recipes[index];
    }

    produce(warehouse: Warehouse) {
        this.progress++;

        const productionTime: number = this.activeRecipe.out.reduce((max, resource) => Math.max(max, resource.productionTime), 0);

        if (this.progress >= productionTime) {
            if (warehouse.takeResources(this.activeRecipe.in)) {
                warehouse.addResources(this.activeRecipe.out, this.efficiency);
                this.progress = 0;
            } else {
                console.log("Downtime...");
            }
        }
    }
}
