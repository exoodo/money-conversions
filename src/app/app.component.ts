import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './services/currency.service';
import { Currency } from './models/currency.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Money Conversions App';
  amount: number = 0;
  totalConvertedAmount: number = 0;
  currencyTo: Currency = {

  };
  currencyFrom: Currency = {

  };

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.findCurrencyTo().then(currencyTo => {
      this.currencyTo = currencyTo;
    });
    this.currencyService.findCurrencyFrom().then(currencyFrom => {
      this.currencyFrom = currencyFrom;
    });
  }

  createCurrencyConversion() {
    this.currencyService.createCurrencyConversion(this.amount).then(currencyConversion => {
      this.totalConvertedAmount = currencyConversion.totalTo;
    });
  }
}
