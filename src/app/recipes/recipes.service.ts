import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 1)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say ?',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Big_Mac_hamburger.jpg/220px-Big_Mac_hamburger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];


  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
