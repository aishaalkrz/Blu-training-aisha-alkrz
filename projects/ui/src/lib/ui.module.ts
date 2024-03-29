import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../pipes/src/lib/filter.pipe';






@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [UiComponent,TableComponent,FilterPipe ],
  declarations: [UiComponent,TableComponent,FilterPipe ],
})
export class UiModule { }
