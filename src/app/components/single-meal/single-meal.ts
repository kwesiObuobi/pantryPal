import { Component, inject, signal } from '@angular/core';
import { TheMealDb } from '../../services/the-meal-db';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-meal',
  imports: [],
  templateUrl: './single-meal.html',
  styleUrl: './single-meal.css'
})
export class SingleMeal {
  private mealDbService = inject(TheMealDb);
  private activedRoute = inject(ActivatedRoute)

  currentMeal = signal<any>({});
  loading = signal<boolean>(true);
  currentMealId = signal('');
  ingredientMeasuresList = signal<any[]>([]);

  constructor(private location: Location) {
    this.activedRoute.params.subscribe((params) => {
      this.currentMealId.set(params['mealId']);
    });
  }

  onBackButton() {
    this.location.back();
  }

  constructIngredientMeasuresList() {
    let i = 1;
    let tempIngredient = `strIngredient${i}`;
    let tempMeasure = `strMeasure${i}`;
    let ingredientMeasures = [];

    while (this.currentMeal()[tempIngredient]) {
      ingredientMeasures.push({"ingredient": this.currentMeal()[tempIngredient], "measure": this.currentMeal()[tempMeasure]});
      i += 1;
      tempIngredient = `strIngredient${i}`;
      tempMeasure = `strMeasure${i}`;
    }

    this.ingredientMeasuresList.set(ingredientMeasures)
  }
  
  async ngOnInit() {
    this.currentMeal.set(await this.mealDbService.getSingleMeal(this.currentMealId()))
    this.loading.set(false);

    this.constructIngredientMeasuresList();
  }

  formattedText(text: string) {
    // Replace all newline patterns with <br> for HTML rendering
    return text.replace(/(?:\r\n|\r|\n)/g, '<br><br>');
  }
}
