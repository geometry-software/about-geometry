import { Component } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrl: './design.component.scss',
  animations: [fadeInOnEnterAnimation()]
})
export class DesignComponent {

}
