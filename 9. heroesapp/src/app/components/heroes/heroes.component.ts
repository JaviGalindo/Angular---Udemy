import { Component, OnInit } from '@angular/core';
import { HeroesService } from "./../../services/heroes.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  loading:boolean = true;
  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  deleteHeroe(id$: string) {
    this.heroesService.delete(id$).subscribe(data => {
      if (data) {
        console.error(data);

      } else {
        delete this.heroes[id$];
      }
    });
  }

}
