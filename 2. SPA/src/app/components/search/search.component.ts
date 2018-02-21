import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  heroes:Heroe[];
  text:string;
  constructor( private activatedRoute: ActivatedRoute,
               private _heroeService: HeroesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.text = params['text'];
      this.heroes = this._heroeService.searchHeroes(params['text']);
  } );
  }

}
