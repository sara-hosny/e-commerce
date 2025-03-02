import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../core/services/products.service';
import { product } from '../../core/interface/product';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-details',
  imports: [],
templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  id:string=''
  productData:product = {} as product
  constructor(private activatedRoute:ActivatedRoute , private products:ProductsService ,private cart:CartService){} //بستخدم من جواها ميثود معينه عشان اعمل subscribe على اللينك 
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe({
    next:(p)=>{
      console.log(p);
      this.id=p.get('id')as string
      console.log(this.id);
      this.getProducDetails()
    }
  })
}

getProducDetails(){
  this.products.getSpecificProduct(this.id).subscribe({
    next:(res)=>{
     console.log(res);
     this.productData=res.data
     
    },error:(err)=>{
        console.log(err);
        
    }
  })
}


addTocart(id:string){
  this.cart.addProduct(id).subscribe({
    next:(res)=>{
      console.log(res);
      
    },error:(err)=>{
      console.log(err);
      
    }
  })
  }
}
