import { Component } from '@angular/core';
import { CategoryItem } from "../category-item/category-item";

@Component({
  selector: 'app-categories-page',
  imports: [CategoryItem],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css'
})
export class CategoriesPage {

}
