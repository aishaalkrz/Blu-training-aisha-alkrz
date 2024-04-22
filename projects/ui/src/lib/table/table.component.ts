import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() columns: string[] | undefined;
  @Input() rows: any[] | undefined;
  searchText: string = '';

  ngOnInit(): void {}

  @Input() customTemplate!: TemplateRef<any>;
}
