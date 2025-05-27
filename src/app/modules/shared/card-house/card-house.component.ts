import { Component, Input } from '@angular/core';
import { IHouse } from '../../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-house',
  imports: [CommonModule],
  templateUrl: './card-house.component.html',
  styleUrl: './card-house.component.scss'
})
export class CardHouseComponent {
  @Input() house!: IHouse;

}
