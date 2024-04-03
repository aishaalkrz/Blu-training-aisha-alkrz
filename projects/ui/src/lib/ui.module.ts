import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../pipes/src/lib/filter.pipe';
import { PreRenderPipe } from '../../../pipes/src/lib/pre-render.pipe';






@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [UiComponent,TableComponent,FilterPipe,PreRenderPipe ],
  declarations: [UiComponent,TableComponent,FilterPipe,PreRenderPipe ],
})
export class UiModule { }
