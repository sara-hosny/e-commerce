import { Component, OnInit } from '@angular/core';
import { AllorderService } from '../../core/services/allorder.service';
import { Orders } from '../../core/interface/orders';


@Component({
  selector: 'app-allorders',
  imports: [],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit {
Id:string=''
orderList:Orders[]=[]
constructor(private orders:AllorderService){}

ngOnInit(): void {
  this.display(this.Id)
}

display(id:string){
  this.orders.displayOrder(id).subscribe({
next:(res)=>{
  console.log(res);
  
  
},error:(err)=>{
  console.log(err);
  
}
  })
}
}
