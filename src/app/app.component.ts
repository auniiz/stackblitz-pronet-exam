import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-app',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menus = [
    {
      title: 'Houses',
      navigateTo: 'houses'
    },
    {
      title: 'Characters',
      navigateTo: 'characters'
    },
    {
      title: 'Books',
      navigateTo: 'books'
    }]
  constructor(private router: Router) { }

}
