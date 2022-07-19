import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SalesService } from 'src/app/services/sales.service';
import { Sales } from '../../model/sales.model';
import { SalesList } from '../../model/sales.list.model';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  salesList: SalesList[] = [];
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

    this.listSales();
  }

  constructor(
    private salesService: SalesService,
    private router: Router
  ) { }

  ngOnInit(): void {   
    this.listSales();
    
  }

  listSales() {
    this.salesService.list(this.nroPag, this.regXPag).subscribe(res => {
      this.salesList = res.data,
        this.totalReg = res.totalReg,
        this.nroPag = res.pagActual,
        this.regXPag = res.regXPag
        console.log(this.salesList);
      if (this.totalReg % this.regXPag > 0)
        this.totalPag = Math.round(this.totalReg / this.regXPag) + 1;
      else this.totalPag = Math.round(this.totalReg / this.regXPag);

    });
  }

  deleteSales(id:number){
    this.salesService.delete(id).subscribe(res=>{
      console.log(id);
      this.nroPag = 1;
      this.listSales();
      
    });
  }
}
