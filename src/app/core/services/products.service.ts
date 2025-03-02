import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviorment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  baseUrl:string = enviroment.baseUrl

  getProduct():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/products`)
  }

  getSpecificProduct(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/products/${id}`)
  }
}
