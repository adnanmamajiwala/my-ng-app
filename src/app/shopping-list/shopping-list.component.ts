import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;
    this.subscription = this.shoppingListService.ingredientAdded
      .subscribe(
        (ingredient: Ingredient[]) => {
          this.ingredients = ingredient;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
