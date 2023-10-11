import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../Services/customer.service';
import { customer } from '../Models/Customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  addcustomerresponse:customer={

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
  constructor(private activatedr:ActivatedRoute,private srv:CustomerService,private router:Router){

  }
  ngOnInit(): void {
    this.activatedr.paramMap.subscribe({
      next:(param)=>{
      const ID=  param.get('id');
      alert(ID);
      if(ID)
      {
        this.srv.getcustomerbyId(ID).subscribe({
          next:(resp)=>{
            console.log(resp);
            this.addcustomerresponse=resp;
          },
          error:(erro)=>{

          },
          complete:()=>{

          }
        });
      }
      }
    });
  }

  updateCustomer(){
    this.srv.updatecustomer(this.addcustomerresponse.id,this.addcustomerresponse).subscribe({
      next:(res)=>{
        //console.log(res);
        this.router.navigate(['/customer'])
      },
      error:(erro)=>{
        console.log(erro);
      },
      complete:()=>{

      }
    });
  }

}
