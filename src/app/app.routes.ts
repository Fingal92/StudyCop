import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {AppComponent} from './app.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/01-home/home.module.ts#HomeModule'},
  {path: 'profile', loadChildren: 'app/02-profile/profile.module.ts#ProfileModule'},
  {path: 'plans', loadChildren: 'app/03-plans/plans.module.ts#PlansModule'},
  {path: 'needs', loadChildren: 'app/04-needs/needs.module.ts#NeedsModule'},
  {path: 'resource', loadChildren: 'app/05-resource/resource.module.ts#ResourceModule'},
  {path: 'about', loadChildren: 'app/06-about/about.module.ts#AboutModule'},
  {path: 'suggest', loadChildren: 'app/07-suggest/suggest.module.ts#SuggestModule'},
  {path: '**', loadChildren: 'app/01-home/home.module.ts#HomeModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouteModule {
}
