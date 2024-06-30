import { Component } from '@angular/core';

interface Menu {
  title: string
  link: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  items: Array<Menu> = [
    { title: 'Design Systems', link: 'design-systems' },
    { title: 'Angular Framework', link: 'angular-framework' },
    { title: 'State Management', link: 'state-management' },
    { title: 'RESTful API', link: 'restful-api' },
  ]

}
