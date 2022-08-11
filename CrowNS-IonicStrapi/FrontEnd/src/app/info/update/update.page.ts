import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../sensors/sensors.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  Users: any = []


  constructor(private sensorsService: SensorsService, public alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {

  }


  update(firstName, lastName){

    var emailStored = JSON.parse(localStorage.getItem('emailStored'));
    
    //console.log(emailStored);
    //console.log(emailStored.id, firstName.value, lastName.value, photo.value);

    this.sensorsService.updatePostById(emailStored.id, firstName.value, lastName.value).subscribe(
      (res) => {
        this.Users = res

        this.sensorsService.getPostsUsersById(emailStored.email).subscribe((res) => {
          this.Users = res
    
            //console.log(this.Users);
            var emailStored ={
              email: this.Users[0].email,
              name: this.Users[0].firstName + " " + this.Users[0].lastName,
              firstName: this.Users[0].firstName,
              lastName: this.Users[0].lastName,
              username: this.Users[0].username,
              id: this.Users[0].id,
              photo: Math.floor(Math.random() * 9)
            } 
            
            localStorage.setItem('emailStored',JSON.stringify(emailStored));

            this.navCtrl.navigateRoot('/profile');

     
        },
        (err) =>
        this.error() 
        );

      },
      (err) =>
      this.error() 
      );
  }

  async error(){

    const alert = await this.alertController.create({
      header: 'Error al ingresar los datos',
      message: 'Hubo un problema con los datos intentalo denuevo...',
      buttons: ['Reintentar']
    });

    await alert.present();
  }


}//class
