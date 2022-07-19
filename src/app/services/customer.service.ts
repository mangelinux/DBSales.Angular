import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../pages/model/customer.model';
import { CustomerPaginado } from '../pages/model/customer-paginado.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  urlAPI: string = environment.urlAPI;

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Customer> {
    const url: string = `${this.urlAPI}customer/get`;
    const httpParams = new HttpParams({
      fromObject: {
        id: id
      }
    });

    return this.http.get<Customer>(url, { params: httpParams })
  }

  list(nroPag: number, regXPag: number): Observable<CustomerPaginado> {
    const url = `${this.urlAPI}customer/list`;
    const httpParams = new HttpParams({
      fromObject: {
        nroPag: nroPag,
        regXPag: regXPag
      }
    });

    return this.http.get<CustomerPaginado>(url, { params: httpParams });
  }

  listSimple(): Observable<Customer[]> {
    const url = `${this.urlAPI}customer/listsimple`;
    return this.http.get<Customer[]>(url);
  }

  add(Customer: Customer): Observable<Customer> {
    const url: string = `${this.urlAPI}customer/add`;
    
    return this.http.post<Customer>(url, Customer)
  }

  update(customer: Customer): Observable<Customer> {
    const url = `${this.urlAPI}customer/update`;

    return this.http.put<Customer>(url, customer)
  }

  delete(id: number): Observable<Customer> {
    const url: string = `${this.urlAPI}customer/delete`;
    const httpParams = new HttpParams({
      fromObject: {
        id: id
      }
    });

    return this.http.delete<Customer>(url, { params: httpParams })
  }

}
