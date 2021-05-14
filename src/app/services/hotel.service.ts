import { Injectable } from '@angular/core';
import {IHotel} from '../hotel-list/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  public hotels : IHotel[] = [{
    hotelId:1,
    hotelName:'Marrakech',
    description: 'hotel au bord du desert',
    price: 45000,
    imageUrl: 'assets/img/aya.jpg'
  }, {
    hotelId:2,
    hotelName:'Limbé',
    description: 'hotel au bord de la mer',
    price: 55000,
    imageUrl: 'assets/img/dadju.png'
  } , {
    hotelId:3,
    hotelName:'Kribi',
    description: 'hotel au bord de la mer et cool',
    price: 66000,
    imageUrl: 'assets/img/damso.jpg'
  } , {
    hotelId:4,
    hotelName:'Douala',
    description: 'hotel au bord de la chaleur',
    price: 1500,
    imageUrl: 'assets/img/niska.jpg'
  }];


  addHostel(name: string, description: string, price: number, imageUrl: string){
    const hotelObject= {
      hotelId : 0,
      hotelName: '',
      description: '',
      price: 0,
      imageUrl: '',
    }
    hotelObject.hotelName= name;
    hotelObject.description= description;
    hotelObject.price= price;
    hotelObject.imageUrl= imageUrl;
    hotelObject.hotelId= this.hotels[this.hotels.length-1].hotelId + 1;
    //hotelObject.id= this.appareils[this.appareils.length-1].id + 1;
    //this.appareils.push(appareilObject);
    this.hotels.push(hotelObject);
  }

}
