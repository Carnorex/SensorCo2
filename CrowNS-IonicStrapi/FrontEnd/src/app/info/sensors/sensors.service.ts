import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(
    private http: HttpClient
  ) { }



  getPosts(){
    return this.http.get("http://localhost:1337/sensors?_limit=5");
    //?_sort=fecha:desc
  }

  getPostsUsers(){
    return this.http.get("http://localhost:1337/users");
  }

  createPost(username: string, firstName: string, lastName: string, email: String, password:string ,PasswordAPP: string){
    return this.http.post("http://localhost:1337/users",{
      username, firstName, lastName, email, password, PasswordAPP
    })
  }

  getPostsUsersById(email: string){
    return this.http.get(`http://localhost:1337/users/?email=${email}`);
  }

  updatePostById(id: string, firstName: string, lastName: string){
    return this.http.put(`http://localhost:1337/users/${id}`,{
      "firstName": firstName, "lastName": lastName
    });

  }


}