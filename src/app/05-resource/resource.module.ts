import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource.component';
import { ResourceRoutingModule } from './resource.routes';
import { CardsModule } from '../00-shared/cards/cards.module';

@NgModule({
  imports: [
    CommonModule,
    ResourceRoutingModule,
    CardsModule
  ],
  declarations: [ResourceComponent]
})
export class ResourceModule { }
