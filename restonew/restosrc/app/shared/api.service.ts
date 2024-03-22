import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { RestaurentData } from '../restaurent-dash/restaurent.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService 
{
  [x: string]: any;
  


  constructor(private _http: HttpClient) { }

  //POST request
  postRestaurent(data:any ) 
  {
    return this._http.post<any>("http://localhost:5555/post", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //GET request
  getRestaurent() 
  {
    return this._http.get<any>("http://localhost:5555/post").pipe(map((res:any)=>{
      return res;
    }));
  }

  //delete request
  deleteRestaurant(id:any) 
  {
    return this._http.delete<any>("http://localhost:5555/delete/"+id).pipe(map((res:any)=>{
      return res;
    }));
  }

  //update request
  updateRestaurant(id:any,data: any) 
  {
    return this._http.put<any>("http://localhost:5555/update/"+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }

  //add request
  AddRestaurent(restaurentModelObj: RestaurentData) 
  {
    return this._http.post<RestaurentData>("http://localhost:5555/addresto", restaurentModelObj).pipe(map((res:any)=>{
      return res;
    }))
  }
}
