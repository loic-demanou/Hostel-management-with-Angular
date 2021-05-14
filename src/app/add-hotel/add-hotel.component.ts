import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {HotelService} from '../services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(public hotelService: HotelService,
              private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(f: NgForm) {
    const name= f.value['name'];
    const description= f.value['description'];
    const price= f.value['price'];
    const imageUrl= f.value['imageUrl'];
    this.hotelService.addHostel(name, description, price, imageUrl);
    this.router.navigate(['/']);
  }
}
