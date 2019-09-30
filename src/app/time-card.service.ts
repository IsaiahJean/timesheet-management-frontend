import { Injectable } from '@angular/core';
import { ITimeCard } from './itime-card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TimeCardService {
  private _url = 'http://localhost:8000/timecards/';
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    
  });


  constructor(private _http: HttpClient, private cookieService:CookieService) { }

  setTimeCard(timeCard: ITimeCard): Observable<ITimeCard> {
    return this._http.post<ITimeCard>(this._url, timeCard, {headers: this.getAuthHeaders()});
  }

  getTimeCards(): Observable<ITimeCard[]> {
    return this._http.get<ITimeCard[]>(this._url, {headers: this.getAuthHeaders()});
  }

  putTimeCard(id: number, tc: ITimeCard): Observable<ITimeCard> {
    const url = `${this._url}${id}/`;
    return this._http.put<ITimeCard>(url, tc, {headers: this.getAuthHeaders()});
  } 

  deleteTimeCard(id: number): any {
    const url = `${this._url}${id}/`;
    return this._http.delete(url, {headers: this.getAuthHeaders()});
  }

  getAuthHeaders(){
    const token = this.cookieService.get('e-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
  }
}
