import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EnumRouteLv0 } from './models';

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
      navigateTo: EnumRouteLv0.HOUSES
    },
    {
      title: 'Characters',
      navigateTo: EnumRouteLv0.CHARACTERS
    },
    {
      title: 'Books',
      navigateTo: EnumRouteLv0.BOOKS
    }]
  enumRouteLv0 = EnumRouteLv0;
  constructor() { }


}
