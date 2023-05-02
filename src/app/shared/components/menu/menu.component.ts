import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrimeIcons,MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  menuItems: MenuItem[] = [];
  ngOnInit() {
    this.menuItems = [
        {
            label: 'Pipes de angular',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-calendar',
                    routerLink:  '/'
                },
                {
                    label: 'Numbers',
                    icon: 'pi pi-dollar',
                    routerLink: 'numbers'
                },
                {
                    label: 'Uncommon',
                    icon: 'pi pi-search',
                    routerLink: 'uncommon'
                }
            ]
        },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog',
          items:[
            {
              label: 'Otro elemento',
              icon: 'pi pi-pencil'
            }
          ]
        }
        
    ];
  }
}
