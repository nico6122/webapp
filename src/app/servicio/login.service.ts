import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  readonly ROOT_URL = 'https://dev.tuten.cl:443/TutenREST/rest/user/testapis%40tuten.cl/';
 
  constructor(private http: HttpClient){}

  getLogin (email: string, pass: string) {
    
    const headers = new HttpHeaders(
      {
        'Password' : '1234',
        'App' : 'APP_BCK',
        'Accept' : 'application/json'
      }
    );

  //return this.http.put<any[]>(this.ROOT_URL, {headers: headers})

  return this.http.put<any[]>(this.ROOT_URL, {headers: headers}).pipe(map(data => {
    if (data) {
      localStorage.setItem('gTdhs%HJ324SDgd', JSON.stringify(data));
    }
    return data;
  })
);

   
  }
}
