import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { from } from 'rxjs';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import {HotelService} from './services/hotel.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    AddHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HotelService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
