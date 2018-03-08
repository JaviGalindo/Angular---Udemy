import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Heroe } from "./../../interfaces/heroe.interface";
import { HeroesService } from "./../../services/heroes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  private heroe: Heroe = {
    name: "",
    bio: "",
    marca: ""
  }

  new: boolean = false;
  id: string;
  constructor(
    private heroeService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== "new") {
        this.heroeService.getHero(this.id)
          .subscribe(heroe => this.heroe = heroe);
      }
    });
  }

  ngOnInit() {
  }

  save() {
    if (this.id === "new") {
      console.log(this.heroe);
      this.heroeService.create(this.heroe).subscribe(data => {
        this.router.navigate(['/heroe', data.name]);
      },
        error => console.error(error))
    } else {
      this.heroeService.update(this.heroe, this.id).subscribe(data => {
        console.log(data);
      },
        error => console.error(error))
    }

  }

  addNew(form: NgForm) {
    this.router.navigate(['/heroe', 'new']);
    form.reset();
  }

}
