import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{
 transform(data: any[], search: string): any[] {
    if (!data || !search) {
        return data; 
      }
    let searchLower = search.toLowerCase();
    return data.filter(item => {
        for (let key in item) {
          if (item[key].toLowerCase().includes(searchLower)) {
            return true;
          }
        }

        return false;
    });
   }
}
// transform(data: any[], key: string, value: string): any[] {
//     if (!data || !key || !value) {
//         return data; 
//       }
//       return data.filter(item => item[key].toLowerCase().includes(value.toLowerCase()));
//    }
// }