import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  token:string=localStorage.getItem('userToken') as string

  onlinePayment(cartId:string,formData:any):Observable<any>{
    return this.http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:61461`,
      {
        "shippingAddress":formData
    },{
      headers:{
      token:this.token
      }
    }
    )
  }
}
