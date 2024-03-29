import { Component, Input } from '@angular/core';

// export interface Person{
//    column : string[];
//    data : any[];
// }

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() columns: string[] | undefined;
  @Input() rows: any[] | undefined;
  
  // people: Person[] = [
  //   { firstname: 'John', lastname: 'Doe', email: 'john@example.com' },
  //   { firstname: 'Mary', lastname: 'Moe', email: 'mary@example.com' },
  //   { firstname: 'July', lastname: 'Dooley', email: 'july@example.com' }
  // ];

  // ngOnInit(): void {
  //   this.getData();
  // }
  //   personData : any =[
  //     {FirstName : 'John', LastName : 'Doe', Email : 'john@example.com'},
  //     {FirstName : 'Nary',LastName : 'Moe',Email : 'mary@example.com'},
  //     {FirstName : 'July',LastName : 'Dooley',Email : 'july@example.com'},
  //   ];
  
  //   columns_name:any =[];
  //   rows_value :any = []; 
  //   getData(){
  //   this.personData.forEach((element:any) =>{
  //     this.columns_name = Object.keys(element);
  //     this.rows_value.push(Object.values(element))
  //     });
  //     console.log(this.rows_value)
  //    }
}
