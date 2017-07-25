import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestComponent } from './suggest.component';
import { SuggestRoutingModule } from './suggest.routes';
import { SuggestService } from './suggest.service';
import {PanelModule, DataListModule, SplitButtonModule, PaginatorModule} from 'primeng/primeng';
@NgModule({
  imports: [
    CommonModule,
    SuggestRoutingModule,
    DataListModule,
    PanelModule,
    SplitButtonModule,
    PaginatorModule
  ],
  declarations: [SuggestComponent],
  providers: [SuggestService]
})
export class SuggestModule { }
