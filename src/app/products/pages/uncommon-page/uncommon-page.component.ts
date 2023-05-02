import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  public name: string = 'Lautaro David';
  public gender: 'male' | 'female' = 'male';
  
  // i18nSelect
  public changeState = {
    male: 'invitarlo',
    female: 'invitarla'
  }
  changeText(){
    this.name = 'Marina'
    this.gender = 'female'
  }
  // i18nPlural
  public cantGente: string[] = ['Tomi', 'Andi', 'Agustin', 'Marta', 'Mari', 'Alejo', 'Juanjo', 'Roman']
  public genteMap = {
    '=0': 'no hay nadie',
    '=1': 'hay una persona',
    '=2': 'hay dos personas',
    'other': 'hay # personas'
  }
  borrarGente(){
    this.cantGente.pop()
  }
  // KeyValue Json
  public person = {
    name: 'Lautaro David',
    age: '23',
    gender: 'male'
  }

  // Async
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap: ' + value) )
  )

  public miPromiseValue: Promise<string> = new Promise( ( resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos la promesa!!');
      console.log('Tenemos la promesa!');
      this.person.name = 'nombre cambiado por promesa'
    },3000)
  })
} 


