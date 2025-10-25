import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { HeroSection } from "./components/hero-section/hero-section";
import { Categories } from "./components/categories/categories";
import { Favorites } from "./components/favorites/favorites";
import { Footer } from "./components/footer/footer";
import { CategoriesPage } from "./components/categories-page/categories-page";
import { SingleMeal } from "./components/single-meal/single-meal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, HeroSection, Categories, Favorites, Footer, CategoriesPage, SingleMeal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pantryPal');
}
