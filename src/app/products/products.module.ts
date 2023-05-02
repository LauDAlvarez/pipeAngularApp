import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    UncommonPageComponent,
    NumbersPageComponent,
    BasicsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
