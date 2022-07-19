import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../model/customer.model';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  nroPag: number = 1;
  regXPag: number = 5;
  totalReg!: number;
  totalPag!: number;

  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageEvent!: PageEvent;

  handlePages(e: PageEvent) {
    this.totalPag = e.length;
    this.regXPag = e.pageSize;
    this.nroPag = e.pageIndex + 1;

    this.listCustomers();
  }

  constructor(
    private customerService: CustomerService,
    private router:Router
    ) { }

  ngOnInit(): void {
    console.log("nroPag:"+this.nroPag +", regXPag"+this.regXPag + ", totalPag" + this.totalPag);
    this.listCustomers();
  }

  listCustomers() {
    this.customerService.list(this.nroPag, this.regXPag).subscribe(res => {
      this.customers = res.data;
      this.nroPag = res.pagActual;
      this.regXPag = res.regXPag;
      this.totalReg = res.totalReg;
      
      if (this.totalReg % this.regXPag > 0)
        this.totalPag = Math.round(this.totalReg / this.regXPag) + 1;
      else this.totalPag = Math.round(this.totalReg / this.regXPag);

    });
  }

  deleteCustomer(id:number){

    this.customerService.delete(id).subscribe(res=>{
      this.listCustomers();
    });

  }

}
