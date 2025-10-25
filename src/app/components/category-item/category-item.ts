import { Component, input } from '@angular/core';

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.html',
  styleUrl: './category-item.css'
})
export class CategoryItem {
  itemName = input.required<string>();
  itemImg = input("recipe1.jpg");
}
