import { Component } from '@angular/core';
import { Person } from '../table.component';

@Component({
  selector: 'lib-table-baby-green',
  templateUrl: './table-baby-green.component.html',
  styleUrl: './table-baby-green.component.css'
})
export class TableBabyGreenComponent {
  person: Person[] = [
    { fisrt_name: 'John', last_name: 'Doe', email: 'john@example.com' },
    { fisrt_name: 'Mary', last_name: 'Moe', email: 'mary@example.com' },
    { fisrt_name: 'July', last_name: 'Dooley', email: 'july@example.com' }
  ];
}
