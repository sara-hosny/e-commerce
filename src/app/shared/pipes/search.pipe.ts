import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../../core/interface/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: product[], searchterm:string): product[] {
    return products.filter((product)=>product.title.toLowerCase().includes(searchterm))
  }

}
