import {Routes, RouterModule} from '@angular/router';
import {ResourceComponent} from './resource.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ResourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []

})
export class ResourceRoutingModule {}
