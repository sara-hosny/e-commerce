import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviorment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http:HttpClient) { }
  baseUrl:string = enviroment.baseUrl
  getBrands():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/brands`)
  }
}
