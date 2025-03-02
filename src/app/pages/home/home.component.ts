import { Component } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { OnInit } from '@angular/core';
import { product } from '../../core/interface/product';
import { CategoriesService } from '../../core/services/categories.service';
import { Cat } from '../../core/interface/cat';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { SearchPipe } from '../../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  imports: [FormsModule,CarouselModule,RouterLink,SearchPipe,LowerCasePipe,SlicePipe,CurrencyPipe,DatePipe,JsonPipe,LowerCasePipe,TitleCasePipe],
templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
productList:product[]=[]
catList:Cat[]=[]
searchTerm:string=''
mainOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  nav: true,
  items:1,
}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

constructor(private product:ProductsService, private category:CategoriesService,private cart:CartService){}
ngOnInit():void{
  this.getProduct()
  this.getCats()
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

getCats(){
this.category.getCat().subscribe({
  next:(res)=>{
    console.log(res);
    this.catList = res.data;
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
