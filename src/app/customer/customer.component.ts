import { Component } from '@angular/core';
import { customer } from '../Models/Customer.model';
import { CustomerService } from '../Services/customer.service';
import { Router } from '@angular/router';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
 customers:customer[]=[];
 constructor(private srv:CustomerService,private router:Router){

 }
 ngOnInit():void
 {
  this.getlistofCustomer();
 }

 getlistofCustomer(){
  this.srv.getAllcustomer().subscribe(
    {
      next:(response)=>{
          this.customers=response;

      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
      }
    });
 }
 deletecustomer(id:string){
  this.srv.deletecustomerbyId(id).subscribe({
     next:(res)=>{
      //alert("Employee Delete Successfully..")
      this.router.navigate(['/customer']);
     }
  });
 }
}
