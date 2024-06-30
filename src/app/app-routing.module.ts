import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AngularComponent } from './components/angular/angular.component';
import { DesignComponent } from './components/design/design.component';
import { StateComponent } from './components/state/state.component';
import { RestComponent } from './components/rest/rest.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'angular-framework',
    component: AngularComponent,
  },
  {
    path: 'design-systems',
    component: DesignComponent,
  },
  {
    path: 'state-management',
    component: StateComponent,
  },
  {
    path: 'restful-api',
    component: RestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
