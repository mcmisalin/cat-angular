import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  public baseUrl = 'https://bendingspoons.com/';

  constructor(private _httpClient : HttpClient) { }

  public getCats() : Observable<Cat[]> {
    return this._httpClient.get<Cat[]>(this.baseUrl).pipe(
      map((data: any[]) => data.map((item:any) =>
      this._createCatFromObject(item))),
    )
  }

  private _createCatFromObject(item:any){
      return new Cat (item.userId , item.title, item.body, item.id);
  }
}
