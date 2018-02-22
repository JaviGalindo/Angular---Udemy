import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class SpotifyService {
  artistas:any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  country: string = 'ES';
  token:string ="BQCaREFqImbXa8sb7U-URWHjtzVUK05rH_gzX5E6Gjmk3Zv_ZNBzWNdVbAKjLstVrLcdOHoxuKCUM7Kdr58"; 
  constructor(public http: HttpClient) {
    console.log("Service Spotify is ready!");
    /*this.getToken().subscribe(token =>{
      this.token = token;
    });*/
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
    return headers;
  }
 /* private getToken():any{
    const grant_type = "grant_type=client_credentials&client_id=352d6e5995734125b035660159ee6463&client_secret=7b9a749e206e46eaabe8d4141650bec4"
    const url = "https://accounts.spotify.com/api/token";
    return this.http.post(url, grant_type,).map( (response:any) => {
        return response.access_token;
    })  
  }*/

  getArtistas(termino: string) {
    const url = `${this.urlSpotify}search?query=${termino}&type=artist&offset=0&limit=20`;
    const headers = this.getHeaders();
    return this.http.get(url, {headers}).map( (response:any) => {
      this.artistas = response.artists.items;
      return this.artistas;
    })       
  }

  getArtista(id: string) {
    const url = `${this.urlSpotify}artists/${id}`;
    const headers = this.getHeaders();
    return this.http.get(url, {headers});
  } 

  getTopTracksArtista(id: string) {
    const url = `${this.urlSpotify}artists/${id}/top-tracks?country=${this.country}`;
    const headers = this.getHeaders();
    return this.http.get(url, {headers});
  }

}
