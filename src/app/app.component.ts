import { Component, TemplateRef, ViewChild } from '@angular/core';


import { UiModule } from '../../projects/ui/src/public-api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('Button') ButtonTemplate!: TemplateRef<any>;

  columns_name: string[] = ['FirstName', 'LastName', 'Email'];
  rows_value: any[] = [
    { FirstName: 'John', LastName: 'Doe', Email: 'john@example.com' },
    { FirstName: 'Mary', LastName: 'Moe', Email: 'mary@example.com' },
    { FirstName: 'July', LastName: 'Dooley', Email: 'july@example.com' },
  ];
}
