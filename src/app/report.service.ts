import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ireport } from './ireport';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private _url = 'http://localhost:8000/report/';

  constructor(private _http: HttpClient) { }

  getTimeCards(): Observable<Ireport[]> {
    return this._http.get<Ireport[]>(this._url);
  }
}
