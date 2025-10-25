import { Component, inject, signal } from '@angular/core';
import { CategoryItem } from "../category-item/category-item";
import { TheMealDb } from '../../services/the-meal-db';

@Component({
  selector: 'app-categories',
  imports: [CategoryItem],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {
  categories = signal<any[]>([]);
  loading = signal<boolean>(true);
  private mealDbService = inject(TheMealDb);
  async ngOnInit() {
    this.categories.set(await this.mealDbService.getAllCategories())
    this.loading.set(false);
  }
}
