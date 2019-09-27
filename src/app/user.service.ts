import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ILocation } from './location'

@Injectable({
  providedIn: 'root'
})



export class UserService {
  baseUrl = 'http://127.0.0.1:8000/';
  baseLocationUrl= `${this.baseUrl}locations/`;
  apiUrl='http://127.0.0.1:8000/';
  token = this.cookieService.get('e-token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    
  });

  constructor(private http: HttpClient, private cookieService:CookieService) { }

  getLocations(): Observable<ILocation[]>{
    return this.http.get<ILocation[]>(`${this.baseLocationUrl}`,{headers: this.getAuthHeaders()}
      );
  }

  
 loginUser(userData): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/auth/',userData)
 }


getAuthHeaders(){
  const token = this.cookieService.get('e-token');
  return new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`
  });

 }

  
  


}