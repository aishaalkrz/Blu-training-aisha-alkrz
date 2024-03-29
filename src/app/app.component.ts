import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UiModule } from '../../projects/ui/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,UiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-angular';
  columns_name: string[] = ['FirstName', 'LastName', 'Email'];
  rows_value: any[] = [
    { FirstName: 'John', LastName: 'Doe', Email: 'john@example.com' },
    { FirstName: 'Mary', LastName: 'Moe', Email: 'mary@example.com' },
    { FirstName: 'July', LastName: 'Dooley', Email: 'july@example.com' }
  ];
}
