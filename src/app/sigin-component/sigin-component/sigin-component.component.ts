import { RouterLink, RouterModule } from '@angular/router';
import { user } from '../../user'
import { userService } from '../../services/user.service';
import { getLocaleCurrencySymbol,} from '@angular/common';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Token } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sigin-component',
  templateUrl: './sigin-component.component.html',
  styleUrls: ['./sigin-component.component.scss']
})
export class SiginComponentComponent implements OnInit {
  user!:user[];
  userName:string = '';
  passWord: string = '';
  Email:string = '';
  firstName: string = '';
  lastName:string = '';
  city: string = '';
  street:string = '';
  number!:number ;
  zipcode:string = '';
  lat: string = '';
  long:string = '';
  phone: string = '';




  constructor(private userService: userService, ) {}

  ngOnInit(): void{



  }
  getUserdatas(){
    this.userService.getUserDatas()
    .subscribe({
      next: (response) => {
        response && (this.user = response);
        console.log(this.user)
      }

    })

  }

  addNewUser(){
    this.userService.addNewUser(this.Email, this.city, this.firstName, this.passWord, this.userName, this.lastName, this.zipcode, this.number, this.street, this.phone, this.lat, this.long)
  .subscribe({
    next: (response) => {
      response && (this.addNewUser = response);
      console.log(this.addNewUser);
    },
    error: (error) => console.log(error),

  })
  }

  onSubmit(){
    this.addNewUser();



  }

teste(){
  this.getUserdatas();
}
}
