import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeaderTitleService {

  getTitle(name): string {
    return `Welcome to Angular Seed, ${name}!`;
  }

  constructor() { }
}
