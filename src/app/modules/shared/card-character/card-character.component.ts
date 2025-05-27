import { Component, Input } from '@angular/core';
import { ICharacter } from '../../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-character',
  imports: [CommonModule],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss'
})
export class CardCharacterComponent {
  @Input() character!: ICharacter;
}
