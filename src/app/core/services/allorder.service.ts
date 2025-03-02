import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllorderService {

  constructor(private http:HttpClient) { }

  displayOrder(id: string):Observable<any>{
  return this.http.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  }
}
