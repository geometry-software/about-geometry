import { Component } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss',
  animations: [fadeInOnEnterAnimation()]
})
export class AngularComponent {

}
