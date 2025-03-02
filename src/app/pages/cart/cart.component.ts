import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { cart } from '../../core/interface/cart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartId:string=''
  cartData:cart={}as cart
constructor(private cart:CartService){}

ngOnInit(): void {
  this.getCart()
}

getCart(){
  this.cart.getCart().subscribe({
    next:(res)=>{
      console.log(res);
      //this.cartId = res.cartId
      this.cartData=res.data
    },error:(err)=>{
      console.log(err);
      
    }
  })
}


removeItem(id:string){
  this.cart.removeCaerItem(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.cartData=res.data
    },error:(err)=>{
      console.log(err);
      
    }
  })
}


updateProductQuntity(id:string,count:number){
  this.cart.updateQuntity(id,count).subscribe({
    next:(res)=>{
      console.log(res);
      this.cartData=res.data
    },error:(err)=>{
      console.log(err);
      
    }
  })
}

clearCart(){
  this.cart.clearCart().subscribe({
    next:(res)=>{
      console.log(res);
     this.cartData = {} as cart
    },error:(err)=>{
      console.log(err);
      
    }
  })
}

}
