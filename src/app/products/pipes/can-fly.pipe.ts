import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
    {
        name: 'canfly'
    }
)

//canfly ==> true|false => Vuela || No vuela
export class CanFly implements PipeTransform{
    transform(value: boolean): string {
    
        return  value? 
                'Vuela':
                'No vuela';
    }
}