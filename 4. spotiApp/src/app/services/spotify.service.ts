import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class SpotifyService {
  artistas:any[] = [];
  constructor(public http: HttpClient) {
    console.log("Service Spotify is ready!");
  }

  getArtistas(termino: string) {
    const url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=20`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQAYxzmDeqoyIdT3KPxqaWVaycVxJm7Jc4aDplZDjyCdnl-FcLIS0rCJmPTcsgaVJfUu3sjBH0mGbK2Jnd8'
    });
    return this.http.get(url, {headers}).map( (response:any) => {
      this.artistas = response.artists.items;
      return this.artistas;
    })       
  }

}
