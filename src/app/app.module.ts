import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../../projects/ui/src/public-api';
import { BrowserModule } from '@angular/platform-browser';
import { PipesModule } from '../../projects/pipes/src/lib/pipes.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    UiModule,
    PipesModule,
    
  ]
})
export class AppModule { }
