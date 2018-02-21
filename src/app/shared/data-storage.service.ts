import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipesService} from '../recipes/recipes.service';
import 'rxjs/add/operator/map';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private authService: AuthService,
              private recipeService: RecipesService) {
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.http.get('https://my-ng-app-f1a4b.firebaseio.com/recipes.json?auth=' + token)
      .map((response: Response)=>{
        const recipes = <Array<Recipe>> response.json();
        return recipes.filter(recipe => !!recipe.ingredients)
      })
      .subscribe((recipes: Array<Recipe>) => {
        this.recipeService.setRecipes(recipes);
      });
  }

  storeRecipes() {
    const token = this.authService.getToken();
    this.http.put('https://my-ng-app-f1a4b.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
      .subscribe((data) => console.log(data));
  }

}
