import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheMealDb {
  async getAllCategories() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();
    return data.categories;
  }

  async getMealsForOneCategory(category: string) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await res.json();
    return data.meals;
  }
}
