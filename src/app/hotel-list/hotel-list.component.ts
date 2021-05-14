import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotel';
import {HotelService} from '../services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  constructor(public hotelService: HotelService) {
  }

  public title = "Liste des hôtels de la ville";


  public showBadge:boolean=false;

  private _hotelFilter= "mot";

  public filteredHotels: IHotel[]=[];

  public toogleNew(){
    this.showBadge=!this.showBadge;
  }


  ngOnInit() {
    this.filteredHotels=this.hotelService.hotels;
    this._hotelFilter="mot";

  }

  public get hotelFilter() : string {
    return this._hotelFilter;
  }

  public set hotelfilter(filter : string) {
    this._hotelFilter = filter;
    this.filteredHotels=this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotelService.hotels;

  }

  private filterHotels(criteria:string): IHotel[] {
    criteria=criteria.toLocaleLowerCase();
    const res = this.hotelService.hotels.filter(
      (hotel:IHotel) =>hotel.hotelName.toLocaleLowerCase().indexOf(criteria)!== -1
    );
    return res;
  }

}
