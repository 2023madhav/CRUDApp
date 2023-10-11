import { Component, OnInit } from '@angular/core';
import { customer } from '../Models/Customer.model';
import { CustomerService } from '../Services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
 addcustomerrequest:customer={

  id: '',
  salutation: '',
  initials: '',
  firstname: '',
 firstname_ascii: '',
  gender: '',
  firstname_country_rank: '',
  firstname_country_frequency: '',
  lastname: '',
 lastname_ascii: '',
  lastname_country_rank: '',
  lastname_country_frequency: '',
  email: '',
  password: '',
  country_code: '',
  country_code_alpha: '',
  country_name: '',
 primary_language_code: '',
  primary_language: '',
  balance:0 ,
  phone_Number: '',
  currency: '',
 }
 constructor(private srv:CustomerService,private router:Router){

 }
 ngOnInit(){

 }
 addcustomer(){
 //console.log( this.addcustomerrequest);
 this.addcustomerrequest.id="00000000-0000-0000-0000-000000000000";
 this.srv.addCustomer(this.addcustomerrequest).subscribe({
  next:(response)=>{
    //console.log(response);
    this.router.navigate(['/customer'])
  },
  error:(error)=>{
    console.log(error);
  },
  complete:()=>{}
 });

//this.srv.addCustomer1(this.addcustomerrequest);
 }
}
