import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
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

    this.listEmployees();
  }

  constructor(
    private employeeService: EmployeeService,
    private router:Router
    ) { }

  ngOnInit(): void {
    console.log("nroPag:"+this.nroPag +", regXPag"+this.regXPag + ", totalPag" + this.totalPag);
    this.listEmployees();
  }

  listEmployees() {
    this.employeeService.list(this.nroPag, this.regXPag).subscribe(res => {
      this.employees = res.data;
      this.nroPag = res.pagActual;
      this.regXPag = res.regXPag;
      this.totalReg = res.totalReg;
      
      if (this.totalReg % this.regXPag > 0)
        this.totalPag = Math.round(this.totalReg / this.regXPag) + 1;
      else this.totalPag = Math.round(this.totalReg / this.regXPag);

    });
  }

  deleteEmployee(id:number){

    this.employeeService.delete(id).subscribe(res=>{
      this.listEmployees();
    });

  }


}
