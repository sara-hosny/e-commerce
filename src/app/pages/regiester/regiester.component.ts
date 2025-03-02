import { Component } from '@angular/core';
import {AbstractControl,FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-regiester',
  imports: [ReactiveFormsModule],
  templateUrl: './regiester.component.html',
  styleUrl: './regiester.component.scss'
})
export class RegiesterComponent {
isLoading: any;
errorMsg:string='';
  constructor(private auth:AuthService , private router:Router){}
registerForm:FormGroup= new FormGroup({
  name:new FormControl(null , [Validators.required ,Validators.minLength(3),Validators.maxLength(10)]),
  email:new FormControl(null , [Validators.required , Validators.email]),
  password:new FormControl(null,[Validators.required, Validators.minLength(6)]),
  rePassword:new FormControl(null),
  phone:new FormControl(null ,[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)])
},this.confirmPassword)
Submit(){
  console.log(this.registerForm);
 if (this.registerForm.valid) {
  this.isLoading = true
  this.auth.register(this.registerForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      this.isLoading=false
      this.router.navigate(['/login'])
      
    },error:(err)=>{
        console.log(err);
        this.isLoading=false
        this.errorMsg = err.error.message
    }
  })
 }else{
  this.registerForm.markAllAsTouched()
 }
  
}

confirmPassword(form:AbstractControl){
let password = form.get('password')?.value
let repassword = form.get('rePassword')?.value
if (password==repassword) {
  return null
}else{
  return{misMatch:true}
}
}

}



