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


}
