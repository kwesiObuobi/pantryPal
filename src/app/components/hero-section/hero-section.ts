import { Component, inject, signal } from '@angular/core';
import { TheMealDb } from '../../services/the-meal-db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {
  private mealDbService = inject(TheMealDb);
  private router = inject(Router)
  itemId = signal('');

  async handleButtonClick() {
    const meal = await this.mealDbService.getRandomMeal();
    this.itemId.set(meal['idMeal'])
    this.router.navigate(['/meal', this.itemId()])
  }
}
