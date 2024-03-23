import { Component } from '@angular/core';
export interface Person{
  fisrt_name : string
  last_name : string
  email : string
}
@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

}
