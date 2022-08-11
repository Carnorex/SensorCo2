import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { SensorsService } from 'src/app/info/sensors/sensors.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit {

  Users: any = []

  constructor(private sensorsService: SensorsService, public alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit(){

 
    var emailStored = JSON.parse(localStorage.getItem('emailStored'));

    if(emailStored != undefined)
    {
      console.log('Login');
    }
    else
    {
      this.navCtrl.navigateRoot('/login');
    }
  }

  //onClick(){console.log('1')}

}//class
