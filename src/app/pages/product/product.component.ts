import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { product } from '../../core/interface/product';
import { CategoriesService } from '../../core/services/categories.service';
import { SearchPipe } from '../../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product',
  imports: [FormsModule,SearchPipe,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
productList:product[]=[]
searchTerm:string=''

constructor(private product:ProductsService , private cart:CartService){}
ngOnInit():void{
  this.getProduct()
}

getProduct(){
  this.product.getProduct().subscribe({
    next:(res)=>{
      this.productList = res.data;
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
