import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { PlansRoutingModule } from './plans.routes';
import { CardsModule } from '../00-shared/cards/cards.module';
import {TabMenuModule, ScheduleModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    PlansRoutingModule,
    TabMenuModule,
    ScheduleModule,
    CardsModule
  ],
  declarations: [PlansComponent]
})
export class PlansModule { }
