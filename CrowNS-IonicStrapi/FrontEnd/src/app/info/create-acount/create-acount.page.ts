import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../sensors/sensors.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.page.html',
  styleUrls: ['./create-acount.page.scss'],
})
export class CreateAcountPage implements OnInit {

  constructor(private sensorsService: SensorsService, public alertController: AlertController, private navCtrl: NavController, public MenuController: MenuController
    ) {
   }//constructor

  ngOnInit() {
 }

 ionViewWillEnter() {

  this.MenuController.enable(false);
}

ionViewDidLeave() {

  this.MenuController.enable(true);
}


  registrarse(Username, firstName, lastName, Email, Password, confirmPassword){
    
    if (Password.value == confirmPassword.value){

    console.log(Username.value, firstName.value, lastName.value, Email.value, Password.value);

    var PasswordAPP = Password.value;

    this.sensorsService.createPost(Username.value, firstName.value, lastName.value, Email.value, Password.value, PasswordAPP).subscribe(
      (res) => {this.navCtrl.back(), this.cache();},
      (err) =>{ this.error(), this.cache();}
      );

    }//if
    else
    this.errorClave();
    this.cache();
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

    cache(){
      var emailStored = JSON.parse(localStorage.getItem('emailStored'));
      localStorage.clear();
      localStorage.removeItem('emailStored')
      console.log('se borro el cache');
    }
  

}//class


