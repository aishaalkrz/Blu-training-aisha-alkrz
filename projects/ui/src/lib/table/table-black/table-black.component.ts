import { Component } from '@angular/core';
import { Person } from '../table.component';

@Component({
  selector: 'lib-table-black',
  templateUrl: './table-black.component.html',
  styleUrl: './table-black.component.css'
})
export class TableBlackComponent {
  person: Person[] = [
    { fisrt_name: 'John', last_name: 'Doe', email: 'john@example.com' },
    { fisrt_name: 'Mary', last_name: 'Moe', email: 'mary@example.com' },
    { fisrt_name: 'July', last_name: 'Dooley', email: 'july@example.com' }
  ];
}
