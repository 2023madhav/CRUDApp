import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customer } from '../Models/Customer.model';
import { Observable, tap } from 'rxjs';
const API_BASEURL:string="https://getinvoices.azurewebsites.net/api/Customers";

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private httreq:HttpClient) { }
 baseurl:string="https://getinvoices.azurewebsites.net/api/Customer/";
  getAllcustomer():Observable<customer[]>{
     //return this.httreq.get<customer[]>(`${API_BASE_URL}GetAllCustomer`);
     return  this.httreq.get<customer[]>(`${API_BASEURL}`);

  }

  addCustomer(addcustomerrequest:customer):Observable<customer>{
      return this.httreq.post<customer>(this.baseurl,addcustomerrequest)

  }
  getcustomerbyId(id:string):Observable<customer>{
    return this.httreq.get<customer>(this.baseurl+id)
  }

  updatecustomer(id:string,updaterequest:customer):Observable<customer>{
    return this.httreq.post<customer>(this.baseurl+id,updaterequest);
  }

  deletecustomerbyId(id:string):Observable<customer>{
    return this.httreq.delete<customer>(this.baseurl+id)
  }
}
