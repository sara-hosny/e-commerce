import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment/enviorment';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient , private router:Router) { }

  baseUrl:string = enviroment.baseUrl
  userData:any

  register(form:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/v1/auth/signup`,form)
  }
  login(form:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/v1/auth/signin`,form)
  }

logout(){
 localStorage.removeItem('userToken')
 this.router.navigate(['/login'])
 this.userData=null
  }

  decodeToken(){
    const token = localStorage.getItem('userToken')as string
    this.userData = jwtDecode(token);
  }

  forgetForm(data:any):Observable<any>{
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',data)
  }
  confirmCode(data:any):Observable<any>{
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',data)
  }
  resetPass(data:any):Observable<any>{
    return this.http.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data)
  }
}

