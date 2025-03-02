import { Component } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Brand } from '../../core/interface/brand';

@Component({
  selector: 'app-brand',
  imports: [],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent {
  brandList:Brand[]=[]
constructor(private brand:BrandsService){}
ngOnInit(){
this.getBrand()
}
getBrand(){
  this.brand.getBrands().subscribe({
    next:(res)=>{
      console.log(res);
      this.brandList = res.data
    },error:(err)=>{
   console.log(err);

    }
  })
}
}
