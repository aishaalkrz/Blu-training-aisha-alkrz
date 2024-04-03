import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preRender',
})
export class PreRenderPipe implements PipeTransform {
  transform(value: any, format?: string): any {
    if (value === undefined || value === null) {
      return value;
    }
      switch (format) {
        case 'yes':
          return value == 1 ? 'Yes' : value; 
        case 'no':
          return value == 0 ? 'No' : value; 
        case 'currency':
          return  value.toFixed(1) + ' $';
        default:
          return value; 
      
    }
  }

}
