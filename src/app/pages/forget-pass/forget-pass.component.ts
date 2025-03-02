import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-pass.component.html',
  styleUrl: './forget-pass.component.scss'
})
export class ForgetPassComponent {
  step:number=1
  constructor(private auth:AuthService , private router:Router){}
forgetForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
})

confirmCodeForm:FormGroup=new FormGroup({
  resetCode:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6}$/)])
})

resetPassForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),

  newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6}$/)])
})


forget(){
  this.auth.forgetForm(this.forgetForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      this.step=2
    },error:(err)=>{
      console.log(err);
      
    }
  })
}

confirm(){
  this.auth.confirmCode(this.confirmCodeForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      this.step=3
    },error:(err)=>{
      console.log(err);
      
    }
  })
}

reset(){
  this.auth.resetPass(this.resetPassForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      localStorage.setItem('userToken',res.token)
      this.router.navigate(['/home'])
    },error:(err)=>{
      console.log(err);
      
    }
  })
}
}
