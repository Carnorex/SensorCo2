import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlueprintsService {

  constructor() {}
}

//error messages
var errors = [
  'SVG parent element not set',
  'SVG parent element does not exist',
  'Options not set',
  'Start position is not set',
  'Size property is not set',
  'X position not set',
  'Y position not set',
  'Width property not set',
  'Height property nos set',
  'Path property (d) not set'
];

export function divSize(svgParent, width){
  document.getElementById(svgParent).style.height = ""+(((50*width)/27)+11)+"";
  console.log("Div "+svgParent+" size changed to width: "+width+", height: "+(50*width/27));
}

export class Door{
  //Variables
  static divId = "";

  //DrawDoor
  static draw(svgParent, options){
      console.log("Drawing door "+options.id);
      console.log(options);

      //Div
      this.divId = svgParent;
      var div = document.getElementById(svgParent);

      //Div size
      var divWidth = options.platform.width;

      //Calculate pixels/meter
      var pixelsmeter = divWidth/27;
      var sizepx = (options.length*pixelsmeter);
      var x = (options.position.x*pixelsmeter);
      var y = (options.position.y*pixelsmeter);
      
      //Define rotation
      if (options.orientation.facing !== "undefined"){
          var angle = this.getRotation(options.orientation.facing);
      }

      //Define swing direction
      if (options.orientation.swing == "counterclockwise")
          var instructions = [
              "M" + x + "," + y,
              "L" + (x + sizepx) + "," + y,
              "L" + (x + sizepx) + "," + (y + 3),
              "L" + (x) + "," + (y + 3),
              "M" + (x + sizepx) + "," + y,
              "A" + sizepx + "," + sizepx + " 0 " + "0" + " 1 " + x + "," + (y + sizepx),
              "L" + x + "," + (y + sizepx - 1),
              "A" + sizepx + "," + sizepx + " 0 " + "0" + " 0 " + (x + sizepx - 1) + "," + (y)
          ];
      else
          var instructions = [
              "M" + x + "," + (y + sizepx), 
              "L" + (x + sizepx) + "," + (y + sizepx),
              "L" + (x + sizepx) + "," + (y + sizepx - 3),
              "L" + (x) + "," + (y + sizepx - 3),
              "M" + (x + sizepx) + "," + (y + sizepx),
              "A" + sizepx + "," + sizepx + " 1 " + "0" + " 0 " + x + "," + y,
              "L" + x + "," + (y + 1),
              "A" + sizepx + "," + sizepx + " 1 " + "0" + " 1 " + (x + sizepx - 1) + "," + (y + sizepx)
          ];

      //Draw door
      SVG.drawPath(svgParent, {
          id: options.id,
          d: instructions,
          style: {
              fill: options.style.color
          },
          transform: "rotate ("+angle+" "+x+" "+y+")"
      })

      //Draw over wall
      SVG.drawPath(svgParent, {
          d: [
              "M" + (x - 5) + "," + (y),
              "L" + (x + 5) + "," + y,
              "L" + (x + 5) + "," + (y + sizepx),
              "L" + (x - 5) + "," + (y + sizepx)
          ],
          style: {
              fill: options.style.backgroundColor
          },
          transform: "rotate ("+angle+" "+x+" "+y+")"
      })
  }

  static getRotation(cardinalDirection){
      var angle = "0";
      switch (cardinalDirection){
          case "north":
              console.log("Door is facing north");
              angle = "270"; 
              break;
          case "south":
              console.log("Door is facing south");
              angle = "90";
              break;
          case "east":
              console.log("Door is facing east");
              angle = "0";
              break;
          case "west":
              console.log("Door is facing west");
              angle = "180";
              break;
      }
      return angle;
  }
}

export class Walls{
  //Variables
  static divId = "";

  //drawWalls
  static draw(svgParent, options){
      console.log("Drawing "+options.id+" walls");
      //console.log(options);

      //Div
      this.divId = svgParent;
      var div = document.getElementById(svgParent);

      //Div size
      var divWidth = options.platform.width;

      //Calculate pixels/meter
      var pixelsmeter = divWidth/27;
      var length = (options.size.length*pixelsmeter);
      var width = (options.size.width*pixelsmeter);
      var x = (options.position.x*pixelsmeter);
      var y = (options.position.y*pixelsmeter);

      //Draw walls
      SVG.drawPath(svgParent, {
        id: options.id,
        d: [
            "M" + x + "," + y,
            "L" + (x + width) + "," + y,
            "L" + (x + width) + "," + (y + length),
            "L" + x + "," + (y + length),
            "Z"
        ],
        style: {
            fill: options.style.color
        }
        })

        //Draw over center
        SVG.drawPath(svgParent, {
            id: options.id,
            d: [
                "M" + (x + 3) + "," + (y + 3),
                "L" + (x + width - 3) + "," + (y + 3),
                "L" + (x + width - 3) + "," + (y + length - 3),
                "L" + (x + 3) + "," + (y + length - 3),
                "Z"
            ],
            style: {
                fill: options.style.backgroundColor
            }
        })

  }
}

//SVG class
class SVG {
  //draw svg element
  static createSVG(parentDiv){
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      //id
      svg.id = "svg-" + parentDiv;
      //size
      svg.style.width = "100%";
      svg.style.height = "100%";
      //add parent to div
      document.getElementById(parentDiv).appendChild(svg);
  }

  //draw rectangle
  static drawRectangle(svgParent, options) {
      //create element
      var r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      //check options
      if (typeof options !== 'undefined') {
          //id
          if (typeof options.id !== 'undefined') r.id = options.id;
          //start position
          if (typeof options.start !== 'undefined') {
              if (typeof options.start.x !== 'undefined') r.setAttribute('x', options.start.x); else console.error(errors[5]);
              if (typeof options.start.y !== 'undefined') r.setAttribute('y', options.start.y); else console.error(errors[6]);
          }
          else
              console.error(errors[3]);
          //size
          if (typeof options.size !== 'undefined') {
              if (typeof options.size.width !== 'undefined') r.setAttribute('width', options.size.width); else console.error(errors[7]);
              if (typeof options.size.height !== 'undefined') r.setAttribute('height', options.size.height); else console.error(errors[8]);
          }
          else
              console.error(errors[4]);
          //CSS class
          if (typeof options.cssClass !== 'undefined') r.setAttribute('class', options.cssClass);
          //set style
          if (typeof options.style !== 'undefined') {
              if (typeof options.style.fill !== 'undefined') r.style.fill =  options.style.fill;
              if (typeof options.style.stroke !== 'undefined') r.style.stroke =  options.style.stroke;
              if (typeof options.style.strokeWidth !== 'undefined') r.style.strokeWidth =  options.style.strokeWidth;
              if (typeof options.style.strokeDashArray !== 'undefined') r.style.strokeDasharray =  options.style.strokeDashArray;
          }
          //events
          if (typeof options.events !== 'undefined') {
              if (typeof options.events.onClick !== 'undefined') {
                  r.setAttribute('onclick', options.events.onClick);
                  r.style.cursor = 'pointer';
              }
          }
          //add to svg parent element
          if (typeof svgParent !== 'undefined') {
              var parent = document.getElementById(svgParent);
              if (parent != null) parent.appendChild(r); else console.error(errors[1]);
          } 
          else console.error(errors[0]);
      }
      else
          console.error(errors[2]);
  }

  //draw line
  static drawLine(svgParent, options) {
      //create element
      var l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      //check options
      if (typeof options !== 'undefined') {
          //id
          if (typeof options.id !== 'undefined') l.id = options.id;
          //start position
          if (typeof options.start !== 'undefined') {
              if (typeof options.start.x !== 'undefined') l.setAttribute('x1', options.start.x); else console.error(errors[5]);
              if (typeof options.start.y !== 'undefined') l.setAttribute('y1', options.start.y); else console.error(errors[6]);
          }
          else
              console.error(errors[3]);
          //end position
          if (typeof options.end !== 'undefined') {
              if (typeof options.end.x !== 'undefined') l.setAttribute('x2', options.end.x); else console.error(errors[5]);
              if (typeof options.end.y !== 'undefined') l.setAttribute('y2', options.end.y); else console.error(errors[6]);
          }
          else
              console.error(errors[4]);
          //CSS class
          if (typeof options.cssClass !== 'undefined') l.setAttribute('class', options.cssClass);
          //set style
          if (typeof options.style !== 'undefined') {
              if (typeof options.style.fill !== 'undefined') l.style.fill =  options.style.fill;
              if (typeof options.style.stroke !== 'undefined') l.style.stroke =  options.style.stroke;
              if (typeof options.style.strokeWidth !== 'undefined') l.style.strokeWidth =  options.style.strokeWidth;
              if (typeof options.style.strokeDashArray !== 'undefined') l.style.strokeDasharray =  options.style.strokeDashArray;
          }
          //add to svg parent element
          if (typeof svgParent !== 'undefined') {
              var parent = document.getElementById(svgParent);
              if (parent != null) parent.appendChild(l); else console.error(errors[1]);
          } 
          else console.error(errors[0]);
      }
      else
          console.error(errors[2]);
  }

  //write text
  static writeText(svgParent, options) {
      //create element
      var t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      //check options
      if (typeof options !== 'undefined') {
          //id
          if (typeof options.id !== 'undefined') t.id = options.id;
          //start position
          if (typeof options.start !== 'undefined') {
              if (typeof options.start.x !== 'undefined') t.setAttribute('x', options.start.x); else console.error(errors[5]);
              if (typeof options.start.y !== 'undefined') t.setAttribute('y', options.start.y); else console.error(errors[6]);
          }
          else
              console.error(errors[3]);
          //text
          if (typeof options.text !== 'undefined') t.innerHTML = options.text;
          //font
          if (typeof options.font !== 'undefined') {
              if (typeof options.font.family !== 'undefined') t.style.fontFamily = options.font.family; 
              if (typeof options.font.size !== 'undefined') t.style.fontSize = options.font.size;
              if (typeof options.font.weight !== 'undefined') t.style.fontWeight = options.font.weight;
              if (typeof options.font.align !== 'undefined') t.style.textAnchor = options.font.align;   
          }
          //CSS class
          if (typeof options.cssClass !== 'undefined') t.setAttribute('class', options.cssClass);
          //set style
          if (typeof options.style !== 'undefined') {
              if (typeof options.style.fill !== 'undefined') t.style.fill =  options.style.fill;
              if (typeof options.style.stroke !== 'undefined') t.style.stroke =  options.style.stroke;
              if (typeof options.style.strokeWidth !== 'undefined') t.style.strokeWidth =  options.style.strokeWidth;
              if (typeof options.style.strokeDashArray !== 'undefined') t.style.strokeDasharray =  options.style.strokeDashArray;
          };
          //add to svg parent element
          if (typeof svgParent !== 'undefined') {
              var parent = document.getElementById(svgParent);
              if (parent != null) parent.appendChild(t); else console.error(errors[1]);
          } 
          else console.error(errors[0]);
      }
      else
          console.error(errors[2]);
  }

  //draw path
  static drawPath(svgParent, options) {
      //create element
      var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      //check options
      if (typeof options !== 'undefined') {
          //id
          if (typeof options.id !== 'undefined') p.id = options.id;
          //d
          if (typeof options.d !== 'undefined') {
              //build d
              var d = '';
              options.d.forEach(step => {
                  d += step + ' ';
              });
              d += 'Z'; //close path
              p.setAttribute('d', d);
          }
          else
              console.error(errors[9]);
          //transform
          if (typeof options.transform !== 'undefined') 
              p.setAttribute('transform', options.transform);
          //CSS class
          if (typeof options.cssClass !== 'undefined') p.setAttribute('class', options.cssClass);
          //set style
          if (typeof options.style !== 'undefined') {
              if (typeof options.style.fill !== 'undefined') p.style.fill =  options.style.fill;
              if (typeof options.style.stroke !== 'undefined') p.style.stroke =  options.style.stroke;
              if (typeof options.style.strokeWidth !== 'undefined') p.style.strokeWidth =  options.style.strokeWidth;
              if (typeof options.style.strokeDashArray !== 'undefined') p.style.strokeDasharray =  options.style.strokeDashArray;
          }
          //events
          if (typeof options.events !== 'undefined') {
              if (typeof options.events.onClick !== 'undefined') {
                  p.setAttribute('onclick', options.events.onClick);
                  p.style.cursor = 'pointer';
              }
          }
          //add to svg parent element
          if (typeof svgParent !== 'undefined') {
              var parent = document.getElementById(svgParent);
              if (parent != null) parent.appendChild(p); else console.error(errors[1]);
          } 
          else console.error(errors[0]);
      }
      else
          console.error(errors[2]);
  }

}