import { Component, OnInit } from '@angular/core';
import { SensorsService } from './sensors.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.page.html',
  styleUrls: ['./sensors.page.scss'],
})
export class SensorsPage implements OnInit {

  sensors: any = []

  constructor(
    private sensorsService: SensorsService
  ) { }

  ngOnInit() {
    //console.log("cargando");
    this.sensorsService.getPosts().subscribe(
      (res) => {
        this.sensors = res
        //console.log(this.sensors);
      },
      (err) => 
        console.log(err)
      );
  }

  ionViewWillEnter(){
    this.sensorsService.getPosts().subscribe(
      (res) => {
        this.sensors = res
        //console.log(this.sensors);
      },
      (err) => 
        console.log(err)
      );
  }

}