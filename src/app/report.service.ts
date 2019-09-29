import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ireport } from './ireport';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private _url = 'http://localhost:8000/report/';


  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    
  });


  constructor(private _http: HttpClient,private cookieService:CookieService) { }

  getTimeCards(): Observable<Ireport[]> {
    return this._http.get<Ireport[]>(this._url,{headers: this.getAuthHeaders()});
  }

  getAuthHeaders(){
    const token = this.cookieService.get('e-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });


}

}
