import { Component, effect, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private router = inject(Router)

  navigateToHome() {
    this.router.navigate(['/'])
  }

  constructor() {
    effect(() => {
      console.log(this.router.url)
    });
  }
}
