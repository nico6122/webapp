import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders, HttpParams }  from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http: HttpClient, private authService: AuthService) { }
  
  headers: HttpHeaders = new HttpHeaders({
      "token": this.authService.getToken(),
      'App': 'APP_BCK',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  });

  headers2: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
});


  getAllBook():Observable<any[]>{
    this.headers = this.headers.set('adminemail', `${this.authService.getCurrentUser().email}`); 
    const url_api = "https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true";
    return this.Http.get<any[]>(url_api,{headers: this.headers});
  }


  getTime(varHora: string, uct: string):Observable<any[]>{
    let body = new HttpParams()
    //this.headers = this.headers.set('adminemail', `${this.authService.getCurrentUser().email}`); 
    const url_api = "http://localhost:8085/ServicioWeb/rest/java/vo";
    return this.Http.post<any[]>(`${url_api}?hora=${varHora}&timezone=${uct}`,body,{headers: this.headers2});
  }




}
