import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routes';
import {GalleriaModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    GalleriaModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
