import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UserInterface } from '../models/user-interface';
import { headersToString } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  
headers: HttpHeaders = new HttpHeaders({
      'Password':'',
      'App' : 'APP_BCK',
      'Content-Type': 'application/json',
      'Accept': 'application/json'

});


loginuser(email: string, password: string): Observable<any> {
  let body = new HttpParams();
  const url_api = "https://dev.tuten.cl:443/TutenREST/rest/user";
  this.headers = this.headers.set('Password', `${password}`);
  return this.http.put<UserInterface>(`${url_api}/${email}`,body.toString(),{headers: this.headers})
  .pipe(map(data => data));
}


setUser(user:UserInterface): void{
  let user_string = JSON.stringify(user);
  localStorage.setItem("currentUser", user_string);

}

setToken(token): void{
  localStorage.setItem("accessToken", token);
}

getToken(){
  return localStorage.getItem('accessToken');
}

getCurrentUser():UserInterface{
  let user_string = localStorage.getItem('currentUser');
  if(!isNullOrUndefined(user_string)){
    let user:UserInterface = JSON.parse(user_string);
    return user;
  }else{
    return null;
  }
}

logoutUser(){
  let accessToken = localStorage.getItem('accessToken');
  const url_api = `url logout = ${accessToken}`;
  localStorage.removeItem('accessToken');
  localStorage.removeItem('currentUser');
  return this.http.post<UserInterface>(url_api,{headers: this.headers});
}






}
