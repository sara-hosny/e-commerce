import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
isLoading: any;

errorMsg:string='';
  constructor(private auth:AuthService , private router:Router){}
logInform:FormGroup= new FormGroup({
  email:new FormControl(null , [Validators.required , Validators.email]),
  password:new FormControl(null,[Validators.required, Validators.minLength(6)]),
})
Submit(){
  console.log(this.logInform);
 if (this.logInform.valid) {
  this.isLoading = true
  this.auth.login(this.logInform.value).subscribe({
    next:(res)=>{
      console.log(res);
      this.isLoading=false
      this.router.navigate(['/home'])
      localStorage.setItem('userToken',res.token)
      this.auth.decodeToken()
      console.log(this.auth.userData);
    },error:(err)=>{
        console.log(err);
        this.isLoading=false
        this.errorMsg = err.error.message
    }
  })
 }else{
  this.logInform.markAllAsTouched()
 }
  
}


}
