import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { UiComponent } from './ui.component';
import { TableBlackComponent } from './table/table-black/table-black.component';
import { TableBabyGreenComponent } from './table/table-baby-green/table-baby-green.component';



@NgModule({
  
  imports: [
    CommonModule
  ],
  exports: [TableComponent,UiComponent,TableBlackComponent,TableBabyGreenComponent],
  declarations: [TableComponent,UiComponent,TableBlackComponent,TableBabyGreenComponent],
})
export class UiModule { }
