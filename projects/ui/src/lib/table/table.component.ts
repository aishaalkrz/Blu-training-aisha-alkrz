import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent implements OnInit {
  @Input() columns! : string[] ;
  @Input() rows: any[] | undefined;
  searchText : string = '' ;
  //searchText: any = { firstName: '', lastName: '', email: '' };
  ngOnInit(): void {}    

  number = '1';
  currency  = '107';
  text = "some-formatted-text";
}
