import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedsComponent } from './needs.component';
import { NeedsRoutingModule } from './needs.routes';
import { CardsModule } from '../00-shared/cards/cards.module';

@NgModule({
  imports: [
    CommonModule,
    NeedsRoutingModule,
    CardsModule
  ],
  declarations: [NeedsComponent]
})
export class NeedsModule { }
