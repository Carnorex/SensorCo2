import { Component, OnInit } from '@angular/core';
import { divSize } from './toolsCris/blueprints.service';
import { DrawService } from './toolsCris/draw.service';
import { Platform } from '@ionic/angular';
import { BackroomService } from './backroom.service';

@Component({
  selector: 'app-backroom',
  templateUrl: './backroom.page.html',
  styleUrls: ['./backroom.page.scss'],
})
export class BackroomPage implements OnInit {

  sensors: any = []

  constructor(private Platform: Platform, public backroom: BackroomService) { }

  ngOnInit() {


  }

  ionViewWillEnter()
  {
    var salon = 1;
    var color;

    this.backroom.getPostsById(salon).subscribe(
      (res) => {
        this.sensors = res
        console.log(this.sensors);

        var Nivel_gas = this.sensors.map(function(elem){
          return elem.Nivel_gas});

          console.log(Nivel_gas);

          if(Nivel_gas > 100)
          color = 'red';
          else if (Nivel_gas > 60 && Nivel_gas < 99)
          color = 'yellow';
          else
          color = 'green';

          const width = this.Platform.width();

          divSize("svg", width);
      
          DrawService.backroom01(width, color, salon);
      },
      (err) => 
        console.log(err)
      );
      
/*---------------------------------------------------------*/
      var salon2 = 3258;
      var color;
  
      this.backroom.getPostsById(salon2).subscribe(
        (res) => {
          this.sensors = res
          console.log(this.sensors);
  
          var Nivel_gas2 = this.sensors.map(function(elem){
            return elem.Nivel_gas});
  
            console.log(Nivel_gas2);
  
            if(Nivel_gas2 > 100)
            color = 'red';
            else if (Nivel_gas2 > 60 && Nivel_gas2 < 99)
            color = 'yellow';
            else
            color = 'green';
  
            const width = this.Platform.width();
  
            divSize("svg", width);
        
            DrawService.backroom02(width, color, salon2);
        },
        (err) => 
          console.log(err)
        );

/*-----------------------------------------------------------*/
        const width = this.Platform.width();
  
        divSize("svg", width);
    
        DrawService.backrooms(width, color, salon);


  }

  





}
