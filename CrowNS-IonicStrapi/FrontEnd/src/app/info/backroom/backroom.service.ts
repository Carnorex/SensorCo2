import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackroomService {

  constructor(
    private http: HttpClient
  ) { }

  getPostsById(salon){
    return this.http.get(`http://localhost:1337/sensors/?Numero_salon=${salon}&_limit=1`);
        //&_sort=hora:desc
  }

}
