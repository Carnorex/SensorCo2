import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public MenuController: MenuController) {}
  

  onClick()
  {

      var emailStored = JSON.parse(localStorage.getItem('emailStored'));

      emailStored ={
        email: emailStored.email,
        name: emailStored.firstName + " " + emailStored.lastName,
        firstName: emailStored.firstName,
        lastName: emailStored.lastName,
        username: emailStored.username,
        id: emailStored.id,
        photo: Math.floor(Math.random() * 9)
      } 
      
      /*DATOS DEL MENU */
      var name1 = document.getElementById("Name02").textContent = "Bienvenido " + emailStored.name;
      var username1 = document.getElementById("Username02").textContent = emailStored.username; 
      var email1 = document.getElementById("Email02").textContent = emailStored.email;

  }

}
