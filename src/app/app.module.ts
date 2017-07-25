import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AppRouteModule} from './app.routes';
import {AppService} from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataListModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule,
    BrowserAnimationsModule,
    DataListModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
