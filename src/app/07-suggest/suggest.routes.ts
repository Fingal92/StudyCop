import {Routes, RouterModule} from '@angular/router';
import {SuggestComponent} from './suggest.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SuggestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []

})
export class SuggestRoutingModule {}
