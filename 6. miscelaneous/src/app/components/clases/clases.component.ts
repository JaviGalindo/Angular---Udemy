import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {
  alerta:string = "alert-danger";
  loading:boolean = false;
  properties:Object = {
    danger: false
  }; 
  constructor() { }

  ngOnInit() {
  }

  execute () {
    this.loading = true;

    setTimeout(()=> this.loading = false, 3000);

  }

}
