import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  person$: Person[] = [
    new Person('George', 25, 'Playing the guitar'),
    new Person('Marie', 35, 'Knitting'),
    new Person('Bob', 32, 'Listening to Reggae'),
    new Person('Peter', 52, 'Watching football plays'),
    new Person('Sandra', 15, 'Drawing')
  ];

  deleteCard() {

  }
}

export class Person {
  constructor(public name: string, public age: number, public hobby: string){}
}