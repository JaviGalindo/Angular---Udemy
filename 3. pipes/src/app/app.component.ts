import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Pipe cases";
  nombre2:string = "PiPe creAteD teSt";
  arr = [1,2,3,4,5,6,7,8];
  pi = Math.PI;
  a:number = 0.234;
  ncurrency = 1234.5;
  jsonObj = {
    nombre: 'Name',
    clave: 'key',
    edad: 89,
    direccion:{
      address:'oakdjf'
    }
  }
  valuePromise = new Promise((resolve, reject) =>{
    setTimeout(()=>resolve('INFOOOOOO'), 2500);
  });
  date = new Date();
  video = "P8BtVISDdt8";
  activar:boolean = true;
}
