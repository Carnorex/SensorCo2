import { Injectable } from '@angular/core';
import { Walls } from './blueprints.service';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  constructor() { }

  static backroom01(width, color, salon) {

    //Draw walls 01
    Walls.draw("svg", {
      id: salon,
      position: {
          x: 0,
          y: 0
      },
      size: {
          width: 10,
          length: 10
      },
      style: {
          color: color,
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });
  }
  static backroom02(width, color, salon) {
  //Draw walls 02
  Walls.draw("svg", {
      id: salon,
      position: {
          x: 12.5,
          y: 0
      },
      size: {
          width: 10,
          length: 10
      },
      style: {
          color: color,
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });
  }

  static backrooms(width, color, salon) {
  //Draw walls 03
  Walls.draw("svg", {
      id: salon,
      position: {
          x: 0,
          y: 12.5
      },
      size: {
          width: 10,
          length: 10
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });

  //Draw walls 04
  Walls.draw("svg", {
      id: salon,
      position: {
          x: 12.5,
          y: 12.5
      },
      size: {
          width: 10,
          length: 10
      },
      style: {
          color: "black",
          backgroundColor: "white"
      },
      platform: {
        width: width
      }
  });
    
  }//background
}//class