import {ValidationHelper} from "../Utils";
import {Recipe} from "../Recipe"

export abstract class Production {
    // fields
    protected static autoInc: number = 1;
    public readonly id: number;
    protected _efficiency: number = 100;
    protected _recipes: Recipe[] = [];
    protected _activeRecipe: Recipe = null;

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
        if (ValidationHelper.isNonPositive(value) || value > 100) { throw new Error("Efficiency value must be in range from 1% to 100%."); }
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

    // functions
    addRecipe(recipe: Recipe): void {
        if (this.recipes.some((rcp => rcp.id === recipe.id))) { throw new Error("Recipe already exists!"); }
        this._recipes.push(recipe);
        if (this.recipes.length == 1) { this.activeRecipe = recipe; }
    }

    activateRecipe(id: number): void {
        const index: number = this.recipes.findIndex((recipe: Recipe) => recipe.id === id);
        if (index === -1) { throw new Error(`No recipe with such id(${id}).`); }
        this.activeRecipe = this.recipes[index];
    }
}




