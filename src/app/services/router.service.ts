import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  async routeContains(text: string) {
    const router = inject(Router)
    return router.url.includes(text);
  }
}
