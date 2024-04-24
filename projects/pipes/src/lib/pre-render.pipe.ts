import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preRender'
})
export class PreRenderPipe implements PipeTransform {

  transform(text: string, option?: string): string {
    const numText = Number(text); 
    if (!text) {
      return text;
    }
    if (option) {
      switch (option.toLowerCase()) {
        case 'uppercase':
          return text.toUpperCase();
        case 'lowercase':
          return text.toLowerCase();
        case 'camelcase':
          return this.toCamelCase(text);
        case 'yes':
          return numText === 1 ? 'Yes' : text;
        case 'no':
          return numText === 0 ? 'No' : text;
        case 'currency':
          return numText+ '$';
      default:
          return text;
      }
    }

    return text;
  }

  private toCamelCase(text: string): string {
    return text.replace(/[-_][^-_]/g, (match) => {
      return  match.charAt(1).toUpperCase() ;
      
    });
  }
  
  
}
