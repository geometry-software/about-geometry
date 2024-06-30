import { Component } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrl: './rest.component.scss',
  animations: [fadeInOnEnterAnimation()]
})
export class RestComponent {

}
