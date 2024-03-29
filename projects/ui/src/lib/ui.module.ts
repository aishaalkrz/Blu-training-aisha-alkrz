import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { UiComponent } from './ui.component';



@NgModule({
  
  imports: [
    CommonModule
  ],
  exports: [TableComponent,UiComponent,],
  declarations: [TableComponent,UiComponent],
})
export class UiModule { }
