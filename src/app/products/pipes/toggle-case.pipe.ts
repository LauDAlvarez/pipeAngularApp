import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
    {
        name: 'toggleCase'
    }
)

//toggleCase ==> lautaro => LAUTARO || CHIROLA => chirola
export class ToggleCasePipe implements PipeTransform{
    transform(value: string, toUpper: boolean = false ): string {
    
        return  (toUpper)      ?   
            value.toLowerCase():
            value.toUpperCase();
    }
}