import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService
{
  constructor() { }

  GetBatches()
  {
    return [
      {"Name" : "PPA", "Duration" : "3 Months", "Fees" : 19500},
      {"Name" : "Logic Building", "Duration" : "3.5 Months", "Fees" : 20500},
      {"Name" : "Python Machine Learning", "Duration" : "4 Months", "Fees" : 21000},
      {"Name" : "Angular with MEAN", "Duration" : "4.5 Months", "Fees" : 20700},
    ];
  }
}
