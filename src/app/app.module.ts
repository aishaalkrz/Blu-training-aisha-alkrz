import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, UiModule } from '../../projects/ui/src/public-api';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../projects/pipes/src/public-api';





@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    
 ],


})
export class AppModule { }
