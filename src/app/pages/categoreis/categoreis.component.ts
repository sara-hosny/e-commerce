import { Component } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Observable } from 'rxjs';
import { Cat } from '../../core/interface/cat';

@Component({
  selector: 'app-categoreis',
  imports: [],
  templateUrl: './categoreis.component.html',
  styleUrl: './categoreis.component.scss'
})
export class CategoreisComponent {
constructor(private cat:CategoriesService){}
catList:Cat[]=[]
ngOnInit() {
  this.getCategories();
}
getCategories(){
  this.cat.getCat().subscribe({
    next:(res)=>{
      console.log(res);
      this.catList=res.data
    },error:(err)=>{
      console.log(err);
      
    }
  })
}
}
