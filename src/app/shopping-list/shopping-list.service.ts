import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  ingredientAdded = new Subject<Ingredient[]>();

  private _ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {
  }

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients);
  }
}
