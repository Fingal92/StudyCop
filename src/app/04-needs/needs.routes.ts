import {Routes, RouterModule} from '@angular/router';
import {NeedsComponent} from './needs.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: NeedsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []

})
export class NeedsRoutingModule {}
