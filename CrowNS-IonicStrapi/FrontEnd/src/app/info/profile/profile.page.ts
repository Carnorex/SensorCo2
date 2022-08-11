import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../sensors/sensors.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  Users: any = []

  constructor(private sensorsService: SensorsService, public alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {

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

          console.log(emailStored);
          //console.log(this.Users);
          var name = document.getElementById("Name01").textContent = emailStored.name;
          var username = document.getElementById("Username01").textContent = emailStored.username; 
          var email = document.getElementById("Email01").textContent = emailStored.email;
          //var photo = document.getElementById("photoImg").src = "../assets/photos/"+emailStored.photo+".jpg";

          switch(Math.floor(Math.random() * 9))
          {
             case 1:
              document.getElementById("background").style.background = "crimson"
             break;
             case 2:
              document.getElementById("background").style.background = "blue"
             break;
             case 3:
              document.getElementById("background").style.background = "blueviolet"
             break;
             case 4:
              document.getElementById("background").style.background = "aqua"
             break;
             case 5:
              document.getElementById("background").style.background = "azure"
             break;
             case 6:
              document.getElementById("background").style.background = "hotpink"
             break;
             case 7:
              document.getElementById("background").style.background = "cyan"
             break;
             case 8:
              document.getElementById("background").style.background = "indigo"
             break;
             default:
              document.getElementById("background").style.background = "black"
             break;
          }

          const image = document.getElementById('photoImg') as HTMLImageElement | null;
            if (image !== null) {
              image.src = "../assets/profilePhotos/"+emailStored.photo+".jpg";
            }

  }

  cache(){
    var emailStored = JSON.parse(localStorage.getItem('emailStored'));
    localStorage.clear();
    localStorage.removeItem('emailStored')
    console.log('se borro el cache');
  }


}
