import { user } from './../../../user';
import { userService } from './../../../services/user.service';
import { getLocaleCurrencySymbol,} from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit{
  user!:user[]

  userName:string = ''
  password: string = ''




  constructor(private userService: userService) {}

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

  onSubmit(): void {
    this.getUserdatas();



    }



  }








