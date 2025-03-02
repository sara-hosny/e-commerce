import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../core/services/orders.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit{
  cartId:string=''

  checkOutform:FormGroup = new FormGroup({
    details:new FormControl(null, [Validators.required]),
    phone:new FormControl(null,[Validators.required]),
    city : new FormControl(null,[Validators.required])
  })
constructor(private ActivatedRoute:ActivatedRoute , private order:OrdersService){}

ngOnInit(): void {
  this.ActivatedRoute.paramMap.subscribe((p)=>{
this.cartId=p.get('id') as string
  })

  console.log(this.cartId);
  
}

SubmitForm(){
console.log(this.checkOutform.value);
this.order.onlinePayment(this.cartId,this.checkOutform.value).subscribe({
  next:(res)=>{
    window.open(res.session.url,'_self')
    console.log(res);
    
  },error:(err)=>{
    console.log(err);
    
  }
})
}
}
