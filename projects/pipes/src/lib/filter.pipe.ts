import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{
    transform(data: any[],key: string , value: any[]) {

        return data;
       }
    
    }

