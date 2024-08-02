import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {HttpClientModule} from  '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component/first-component.component';
import { FormsModule } from '@angular/forms';
import { SiginComponentComponent } from './sigin-component/sigin-component/sigin-component.component';
import { StoreComponentComponent } from './store-component/store-component/store-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SiginComponentComponent,
    StoreComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
