import { RouterLink, RouterModule } from '@angular/router';
import { user } from './../../../user';
import { userService } from './../../../services/user.service';
import { getLocaleCurrencySymbol,} from '@angular/common';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Token } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit{
  user!:user[]
  userName:string = ''
  password: string = ''




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

  verifyUser(){
    this.userService.verifyUser(this.userName, this.password)
    .subscribe({
      next: (response) => {
        response && (this.verifyUser = response);
        console.log(this.verifyUser);




      },
      error: (error) => alert(error),






})
  }













  onSubmit(): void {
    this.verifyUser();





    }



  }








