import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
httpOptions: Object;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '6dc6b9f9damsh300645eec51db9fp14b50djsnce91bf8611bc'
    })
   }
}
getResults(searchTerm, apiIndex) {
return this.http.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}&index=${apiIndex}`, this.httpOptions);
}
}
