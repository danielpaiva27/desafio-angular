import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { }

  getUserDatas(): Observable<any> {

    return this.http.get(
      `https://fakestoreapi.com/users`,
      {}
    );
  }

  verifyUser(userName:string, passWord:string): Observable<any> {
    return this.http.post(
      `https://fakestoreapi.com/auth/login`,
      { username: userName,
        password: passWord}
    )
  }

  addNewUser(userName:string, passWord:string, Email:string, lastName: string, firstName:string, city:string, street:string, number:number, zipcode:string, long:string, lat:string, phone:string ): Observable<any> {
    return this.http.post(
      `https://fakestoreapi.com/users`,
      {
        username: userName,
        password: passWord,
        email: Email,
        name:{
          firstname:firstName,
          lastname:lastName
        },
        address:{
          city:city,
          street:street,
          number:number,
          zipcode:zipcode,
          geolocation:{
            lat:lat,
            long:long
          }

        },
        phone:phone



      }
    )
  }


}
