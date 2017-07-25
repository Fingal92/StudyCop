import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardsModule } from '../00-shared/cards/cards.module';
import { HomeRoutingModule } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
