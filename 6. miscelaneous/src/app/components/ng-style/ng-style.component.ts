import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <button class="btn btn-primary" (click)= "size = size + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)= "size = size - 5">
      <i class="fa fa-minus"></i>
    </button>
    <p [style.fontSize.px]="size">
      Hello word... this is a text
    </p>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  size:number = 20;

  constructor() { }

  ngOnInit() {
  }

}
