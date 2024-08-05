import { getLocaleCurrencySymbol } from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit{

  userName:string = ''
  password: string = ''



  constructor() {}

  ngOnInit(): void{



  }
  onSubmit(): void {
    console.log(this.userName, this.password)



  }


  }




