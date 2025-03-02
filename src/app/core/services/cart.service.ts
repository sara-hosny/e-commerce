import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
userToken=localStorage.getItem('userToken') as string
  constructor(private http:HttpClient) { }

  addProduct(id:string):Observable<any>{
  return this.http.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
      "productId": id
  },{
    headers:{
      token:this.userToken
    }
  }
  )

 
  }


  getCart():Observable<any>{
    return this.http.get('https://ecommerce.routemisr.com/api/v1/cart',{
     headers:{
      token:this.userToken
     }
    })
  }

  removeCaerItem(productId:string):Observable<any>{
    return this.http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers:{
      token:this.userToken
    }})
  }

  updateQuntity(id:string,count:number):Observable<any>{
    return this.http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        "count": count
    }
    
    ,{headers:{
      token:this.userToken
    }})
  }

  clearCart():Observable<any>{
    return this.http.delete('https://ecommerce.routemisr.com/api/v1/cart',{
      headers:{
        token:this.userToken
      }
    })
  }
}
