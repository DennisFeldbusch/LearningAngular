import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JSONBean } from '../models/JSONBean';



@Injectable({
  providedIn: 'root'
})



export class TableService {
  // base url
  url = 'https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=EUR&limit=60';

  constructor(private http: HttpClient) { }

  // make a GET request to the api
  getData() {
    return this.http.get<JSONBean>(this.url );
  }
}

