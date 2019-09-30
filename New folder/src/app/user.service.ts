import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ILocation } from './location'
import { IDoctor } from './doctor';


@Injectable({
  providedIn: 'root'
})



export class UserService {
  baseUrl = 'http://127.0.0.1:8000/';
  baseLocationUrl= 'http://127.0.0.1:8000/locations/';
  apiUrl='http://127.0.0.1:8000/';
  doctorUrl='http://127.0.0.1:8000/doctors/';
  
  token = this.cookieService.get('e-token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    
  });
  value: any;

  constructor(private http: HttpClient, private cookieService:CookieService) { }

  getLocations(): Observable<ILocation[]>{
    return this.http.get<ILocation[]>(this.baseLocationUrl,{headers: this.getAuthHeaders()}
      );
  }

  getLocation(id: number): Observable<ILocation>{
    const url = `${this.baseLocationUrl}${id}`;
    return this.http.get<ILocation>(url,{headers: this.getAuthHeaders()});
  }

  getDoctor(id: number): Observable<IDoctor>{
    const url = `${this.doctorUrl}${id}`;
    return this.http.get<IDoctor>(this.doctorUrl,{headers: this.getAuthHeaders()}
    );
  
   }


  deleteLocation(id:number): Observable<any>{
    const url = `${this.baseLocationUrl}${id}/`;
    return this.http.delete<ILocation>(url,{headers: this.getAuthHeaders()});
  }


  createLocation(location, sector): Observable<any>{
    const body = JSON.stringify({location,sector})
    return this.http.post(this.baseLocationUrl,body,{headers: this.getAuthHeaders()});
  }


  createDoctor(first_Name, last_Name, pay_roll): Observable<any>{
    const body = JSON.stringify({first_Name,last_Name,pay_roll})
    return this.http.post(this.doctorUrl,body,{headers: this.getAuthHeaders()});
  }

  deleteDoctor(id:number): Observable<any>{
    const url = `${this.doctorUrl}${id}/`;
    return this.http.delete<IDoctor>(url,{headers: this.getAuthHeaders()});
  }

  
 loginUser(userData): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/auth/',userData)
 }

 getDoctors(): Observable<IDoctor[]>{
  return this.http.get<IDoctor[]>(this.doctorUrl,{headers: this.getAuthHeaders()}
  );

 }


getAuthHeaders(){
  const token = this.cookieService.get('e-token');
  return new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`
  });

 }

  
  


}