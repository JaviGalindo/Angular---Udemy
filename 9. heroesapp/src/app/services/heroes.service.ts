import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Heroe } from "./../interfaces/heroe.interface";
import "rxjs/Rx";

@Injectable()
export class HeroesService {

  heroesUrl:string = "https://heroesapp-cb028.firebaseio.com/heroes.json";
  heroeUrl:string = "https://heroesapp-cb028.firebaseio.com/heroes/";


  constructor(private http:Http) { }

  create(heroe:Heroe){
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      "Content-Type": "application/json"
    });

    return this.http.post(this.heroesUrl, body, {headers}).map(res => {
      console.log(res.json());
      return res.json();      
    })
  }

  update(heroe:Heroe, key$:string){
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    const url = `${this.heroeUrl}/${key$}.json`
    return this.http.put(url, body, {headers}).map(res => {
      console.log(res.json());
      return res.json();      
    })
  }

  getHero(key$:string){
    const url = `${this.heroeUrl}/${key$}.json`;
    return this.http.get(url).map(res => res.json());
  }
  getHeroes(){
    return this.http.get(this.heroesUrl).map(res => res.json());
  }

  delete(key$:string){
    const url = `${this.heroeUrl}/${key$}.json`;
    return this.http.delete(url).map(res => res.json());
  }
}
