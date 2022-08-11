import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../sensors/sensors.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Users: any = []

  constructor(private sensorsService: SensorsService, public alertController: AlertController, private navCtrl: NavController, public MenuController: MenuController) { }

  ngOnInit() {
  }//init

  confirmar(Email, Password){

    //console.log("cargando");
    this.sensorsService.getPostsUsersById(Email.value).subscribe(
      (res) => {
        this.Users = res
        if(Email.value == this.Users[0].email && Password.value == this.Users[0].PasswordAPP)
        {
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
          
          this.navCtrl.navigateRoot('/home');
        }else
        {
          this.errorClave()
        }
      },
      (err) =>
      this.error() 
      );
  }

  ionViewWillEnter() {

    this.MenuController.enable(false);
  }
  
  ionViewDidLeave() {
  
    this.MenuController.enable(true);
  }

  async error(){

      const alert = await this.alertController.create({
        header: 'Error al ingresar los datos',
        message: 'Hubo un problema con los datos intentalo denuevo...',
        buttons: ['Reintentar']
      });
  
      await alert.present();
    }

  async errorClave(){

      const alert = await this.alertController.create({
        header: 'Error al ingresar la contraseña',
        message: 'Las contraseñas no coinciden...',
        buttons: ['Reintentar']
      });
  
      await alert.present();
    }

    onClick()
    {
      var emailStored ={
        email: 0,
        name: 0,
        firstName: 0,
        lastName: 0,
        username: 0,
        id: 0,
        photo: Math.floor(Math.random() * 9)
      } 

      localStorage.setItem('emailStored',JSON.stringify(emailStored));
    }



 

}//class
