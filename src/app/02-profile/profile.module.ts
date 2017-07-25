import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routes';
import {FieldsetModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FieldsetModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
