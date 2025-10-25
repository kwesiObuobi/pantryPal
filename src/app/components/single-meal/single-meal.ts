import { Component } from '@angular/core';

@Component({
  selector: 'app-single-meal',
  imports: [],
  templateUrl: './single-meal.html',
  styleUrl: './single-meal.css'
})
export class SingleMeal {
  formattedText(text: string) {
    // Replace all newline patterns with <br> for HTML rendering
    return text.replace(/(?:\r\n|\r|\n)/g, '<br><br>');
  }
}
