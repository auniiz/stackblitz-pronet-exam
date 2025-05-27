import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IBook } from '../../../models';

@Component({
  selector: 'app-card-book',
  imports: [CommonModule],
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.scss'
})
export class CardBookComponent {
  @Input() book!: IBook
}
