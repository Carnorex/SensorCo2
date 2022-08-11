import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

//import { SensorsService } from './sensors.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.page.html',
  styleUrls: ['./graphic.page.scss'],
})

export class GraphicPage implements OnInit {

  constructor() {}
  ngOnInit():void {
    this.generarLine();
    //this.generarDoughnut();
    //this.generarBar();
    //this.generarPolarArea();
    //setInterval("location.reload()",5000);
    }

  /*ionViewWillEnter(){
    this.generarLine();
    this.generarDoughnut();
    this.generarBar();
    this.generarPolarArea();  
  }*/
  
   generarLine(){
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:1337/sensors?_limit=10";
            //&_sort=hora:desc

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data);

        //nivel_gas
        var Nivel_gas = data.map(function(elem){
        return elem.Nivel_gas});
        //Humedad
        var Humedad = data.map(function(elem){
          return elem.Humedad});
        //Indice_calor
        var Indice_calor = data.map(function(elem){
          return elem.Indice_calor});
        //Temperatura
        var Temperatura = data.map(function(elem){
          return elem.Temperatura});
        //published_at
        var published_at = data.map(function(elem){
          return elem.hora});
          
      }//if
      //console.log(infoSensors);
    //grafico
          var canvas2 = document.getElementById('myChart');
          var ctx = (canvas2 as HTMLCanvasElement).getContext('2d');
          var chartExist = Chart.getChart("myChart"); // <canvas> id

          if (chartExist != undefined)  
            chartExist.destroy(); 

           var myChart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: Temperatura,
                  datasets: [{
                      label: 'Co2',
                      data: Nivel_gas,
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1.5,
                      tension: 0.5
                  },{
                    label: 'Humedad',
                    data: Humedad,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1.5,
                    tension: 0.5
                  },{
                    label: 'Indice de Calor',
                    data: Indice_calor,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1.5,
                    tension: 0.5
                  },{
                    label: 'Temperatura',
                    data: Temperatura,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1.5,
                    tension: 0.5
                  }]
              },
              options: {
                  scales: {
                      y: {
                          beginAtZero: true
                      }
                  }
              }
          });
     }//xmlhttp
  }//generarLine

  generarDoughnut(){
    var xmlhttp = new XMLHttpRequest();
    var url = 'http://localhost:1337/sensors?_start=0&_limit=10';

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data);

       //nivel_gas
        var Nivel_gas = data.map(function(elem){
        return elem.Nivel_gas});
        Nivel_gas = Nivel_gas[0];
        //Humedad
        var Humedad = data.map(function(elem){
          return elem.Humedad});
          Humedad = Humedad[0];
        //Indice_calor
        var Indice_calor = data.map(function(elem){
          return elem.Indice_calor});
          Indice_calor = Indice_calor[0];
        //Temperatura
        var Temperatura = data.map(function(elem){
          return elem.Temperatura});
          Temperatura = Temperatura[0];
        //published_at
        var published_at = data.map(function(elem){
          return elem.hora.substr(14,5)});

      }
      //console.log(infoSensors);
    //grafico
          var canvas2 = document.getElementById('myChart02');
          var ctx = (canvas2 as HTMLCanvasElement).getContext('2d');

          var chartExist = Chart.getChart("myChart02"); // <canvas> id
          if (chartExist != undefined)  
            chartExist.destroy(); 
      

           var myChart02 = new Chart(ctx, {
              type: 'doughnut',
              data: {
                  labels: ['Co2','Temperatura','Humedad','Indice de Calor'],
                  datasets: [{
                      label: 'Sensors',
                      data: [Nivel_gas, Temperatura, Humedad, Indice_calor],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      hoverOffset: 4
                  }]
              },
          });
     }//xmlhttp
  }//generarDoughnut

  generarBar(){
    var xmlhttp = new XMLHttpRequest();
    var url = 'http://localhost:1337/sensors?_start=0&_limit=10';

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data);

       //nivel_gas
       var Nivel_gas = data.map(function(elem){
        return elem.Nivel_gas});
        Nivel_gas = Nivel_gas[0];
        //Humedad
        var Humedad = data.map(function(elem){
          return elem.Humedad});
          Humedad = Humedad[0];
        //Indice_calor
        var Indice_calor = data.map(function(elem){
          return elem.Indice_calor});
          Indice_calor = Indice_calor[0];
        //Temperatura
        var Temperatura = data.map(function(elem){
          return elem.Temperatura});
          Temperatura = Temperatura[0];
        //published_at
        var published_at = data.map(function(elem){
          return elem.hora.substr(14,5)});
        
        var graficas = ['Co2','Temperatura','Humedad','Indice de Calor']

      }
      //console.log(infoSensors);
    //grafico
          var canvas2 = document.getElementById('myChart03');
          var ctx = (canvas2 as HTMLCanvasElement).getContext('2d');

          var chartExist = Chart.getChart("myChart03"); // <canvas> id
          if (chartExist != undefined)  
            chartExist.destroy(); 
      

           var myChart03 = new Chart(ctx, {
              type: 'bar',
              data: {
                  labels: graficas,
                  datasets: [{
                      label: 'Sensores',
                      data: [Nivel_gas, Temperatura, Humedad, Indice_calor],
                      backgroundColor: [
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(54, 162, 235, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1.5,
                  }]
              },
          });
     }//xmlhttp
  }//generarLine

  generarPolarArea(){
    var xmlhttp = new XMLHttpRequest();
    var url = 'http://localhost:1337/sensors?';

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data);

          //nivel_gas
          var Nivel_gas = data.map(function(elem){
          return elem.Nivel_gas});
          Nivel_gas = Nivel_gas[0];
          //Humedad
          var Humedad = data.map(function(elem){
            return elem.Humedad});
            Humedad = Humedad[0];
          //Indice_calor
          var Indice_calor = data.map(function(elem){
            return elem.Indice_calor});
            Indice_calor = Indice_calor[0];
          //Temperatura
          var Temperatura = data.map(function(elem){
            return elem.Temperatura});
            Temperatura = Temperatura[0];
          //published_at
          /*var published_at = data.map(function(elem){
            return elem.published_at.substr(14,5)});*/
          
          var graficas = ['Co2','Temperatura','Humedad','Indice de Calor']

      }
      //console.log(infoSensors);
    //grafico
          var canvas2 = document.getElementById('myChart04');
          var ctx = (canvas2 as HTMLCanvasElement).getContext('2d');

          var chartExist = Chart.getChart("myChart04"); // <canvas> id
          if (chartExist != undefined)  
            chartExist.destroy(); 
      

           var myChart04 = new Chart(ctx, {
              type: 'polarArea',
              data: {
                  labels: graficas,
                  datasets: [{
                      label: 'Co2',
                      data: [Nivel_gas, Temperatura, Humedad, Indice_calor],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1.5,
                  }]
              },
              options: {
                  scales: {
                      y: {
                          //beginAtZero: true
                          min: 50
                      }
                  }
              }
          });
     }//xmlhttp
  }//generarLine

}//class

