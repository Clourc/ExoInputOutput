import { Component, Input } from '@angular/core';
import { Person } from '../parent/parent.component';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {
  @Input() list: Person[] = [];

  deleteCard(card: Person){
    this.list.splice(this.list.indexOf(card), 1);
  }
}
