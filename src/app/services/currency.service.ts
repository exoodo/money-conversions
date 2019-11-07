import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Currency } from '../models/currency.model';
import { CurrencyConversion } from '../models/currency-conversion.model';
@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }

  findCurrencyTo(): Promise<Currency> {
    return new Promise((resolve, reject) => {
        this.http.get<Currency>(environment.rest + '/currency/default/to')
          .subscribe(response => {
            resolve(response);
          }, error => {
            reject(error);
          });
    });
  }

  findCurrencyFrom(): Promise<Currency> {
    return new Promise((resolve, reject) => {
        this.http.get<Currency>(environment.rest + '/currency/default/from')
          .subscribe(response => {
            resolve(response);
          }, error => {
            reject(error);
          });
    });
  }

  createCurrencyConversion(amount: number): Promise<CurrencyConversion> {
    return new Promise((resolve, reject) => {
      this.http.get<Currency>(environment.rest + '/money/conversion?amount=' + amount)
        .subscribe(response => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

}
