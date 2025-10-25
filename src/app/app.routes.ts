import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { CategoriesPage } from './components/categories-page/categories-page';
import { SingleMeal } from './components/single-meal/single-meal';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
    pathMatch: 'full',
  },
  {
    path: 'category/:category',
    component: CategoriesPage,
    pathMatch: 'full'
  },
  {
    path: 'meal/:mealId',
    component: SingleMeal,
    pathMatch: 'full'
  }
];
