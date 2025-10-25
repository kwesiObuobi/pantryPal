import { Component, inject, signal } from '@angular/core';
import { CategoryItem } from "../category-item/category-item";
import { TheMealDb } from '../../services/the-meal-db';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  imports: [CategoryItem],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css'
})
export class CategoriesPage {
  private mealDbService = inject(TheMealDb);
  private activedRoute = inject(ActivatedRoute)

  mealsForThisCategory = signal<any[]>([]);
  loading = signal<boolean>(true);
  currentCategory = signal('');

  constructor() {
    this.activedRoute.params.subscribe((params) => {
      this.currentCategory.set(params['category']);
    });
  }
  
  async ngOnInit() {
    this.mealsForThisCategory.set(await this.mealDbService.getMealsForOneCategory(this.currentCategory()))
    this.loading.set(false);
  }
}
