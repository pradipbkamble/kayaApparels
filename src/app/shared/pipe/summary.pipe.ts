import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'summarypipe'
})

export class SummaryPipe implements PipeTransform{
    transform(value: string) {
        console.log(value.split(" "));
        
       return value.split(" ").slice(0,9).join().toUpperCase()
    }
    
}