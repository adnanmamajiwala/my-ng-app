import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private _ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {
  }

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  getIngredient(index: number) {
    return this._ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients);
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this._ingredients[index] = ingredient;
    this.ingredientChanged.next(this.ingredients);
  }

  deleteIngredient(index: number) {
    this._ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients);
  }
}
