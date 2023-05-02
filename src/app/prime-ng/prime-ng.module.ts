import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar'
import { PanelModule } from 'primeng/panel'
import { FieldsetModule } from 'primeng/fieldset'

@NgModule({
  exports: [
    MenubarModule,
    CardModule,
    ButtonModule,
    FieldsetModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
