import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { PipesComponent } from './pipes.component';

@NgModule({
  declarations: [FilterPipe,PipesComponent],
  imports: [CommonModule],
  exports: [FilterPipe,PipesComponent]
})
export class PipesModule {}
