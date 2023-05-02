import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public upperName: string = 'LAUTARO ALVAREZ'
  public LowerName: string = 'lautaro alvarez'
  public fullName: string = 'LauTAro alVAreZ'

  public customDate: Date = new Date();
}
