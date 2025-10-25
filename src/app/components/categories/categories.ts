import { Component } from '@angular/core';
import { CategoryItem } from "../category-item/category-item";

@Component({
  selector: 'app-categories',
  imports: [CategoryItem],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {

}
