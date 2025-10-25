import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.html',
  styleUrl: './category-item.css'
})
export class CategoryItem {
  itemName = input.required<string>();
  itemImg = input("recipe1.jpg");
  itemId = input.required<string>();

  private router = inject(Router);

  navigateToMealItem() {
    if (this.router.url === '/') {
      this.router.navigate(['/category', this.itemName()])
    } else {
      this.router.navigate(['/meal', this.itemId()])
      console.log('nothing to do, ', this.itemName())
    }
  }
}
