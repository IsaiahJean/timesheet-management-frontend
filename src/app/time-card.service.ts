import { Injectable } from '@angular/core';
import { ITimeCard } from './itime-card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeCardService {
  private _url = 'http://localhost:8000/timecards/';

  constructor(private _http: HttpClient) { }

  setTimeCard(timeCard: ITimeCard): Observable<ITimeCard> {
    return this._http.post<ITimeCard>(this._url, timeCard);
  }
}
