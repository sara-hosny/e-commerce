import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviorment';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) {}
   baseUrl:string = enviroment.baseUrl
   getCat():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/categories`)
   }
   getspecficCat(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/categories/${id}`)
   }


   
}
