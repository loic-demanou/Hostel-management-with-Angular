import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import {AddHotelComponent} from './add-hotel/add-hotel.component';

const routes: Routes = [
  { path: '', component: HotelListComponent },
  { path: 'addHotel', component: AddHotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
