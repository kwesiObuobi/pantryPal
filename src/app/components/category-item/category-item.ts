import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.html',
  styleUrl: './category-item.css'
})
export class CategoryItem {
  itemName = input.required<string>();
  itemImg = input("recipe1.jpg");

  private router = inject(Router);

  navigateToMealItem() {
    this.router.navigate(['/category', this.itemName()])
  }
}
