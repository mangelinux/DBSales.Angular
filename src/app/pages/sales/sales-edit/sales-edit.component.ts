import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProductService } from 'src/app/services/product.service';
import { SalesService } from 'src/app/services/sales.service';
import { Customer } from '../../model/customer.model';
import { Employee } from '../../model/employee.model';
import { Product } from '../../model/product.model';
import { Sales } from '../../model/sales.model';
import { SalesList } from '../../model/sales.list.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-sales-edit',
  templateUrl: './sales-edit.component.html',
  styleUrls: ['./sales-edit.component.css']
})
export class SalesEditComponent implements OnInit {

  salesList!:SalesList;
  customers: Customer[] = [];
  employees: Employee[] = [];
  products: Product[] = [];
  
  form!: FormGroup;
  submited:boolean = false;
  
  constructor(
    private salesService: SalesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private productService: ProductService,
    public datepipe: DatePipe
  ) { 
    this.form = formBuilder.group({
      id: ['', Validators.required],
      date: ['', Validators.required],
      unitPrice: ['', Validators.required],
      quantity: ['', Validators.required],
      totalPrice: ['', Validators.required],
      customer_Id: ['', Validators.required],
      employee_Id: ['', Validators.required],
      product_Id: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.listCustomers();
    this.listEmployees();
    this.listProducts();

    this.activatedRoute.params.subscribe(res=>{
      let id = res["id"];
      this.salesService.getById(id).subscribe(res=>{
        this.salesList = res;

        this.form.setValue({
           id: res.id,
           date: this.datepipe.transform(res.date,"yyyy-MM-dd"), 
           unitPrice: res.unitPrice,
           quantity: res.quantity,
           totalPrice: res.totalPrice,
           customer_Id: res.customerDTO.id,
           employee_Id: res.employeeDTO.id,
           product_Id: res.productDTO.id,
        });

      });

    });
  }

  updateSales() {
    this.submited = true;
    
    const sales: Sales = {
      id: this.form.value.id,
      date: this.form.value.date,
      unitPrice: this.form.value.unitPrice,
      quantity: this.form.value.quantity,
      totalPrice: this.form.value.totalPrice,
      customer_Id: this.form.value.customer_Id,
      employee_Id: this.form.value.employee_Id,
      product_Id: this.form.value.product_Id,
    }
    console.log(sales);
    this.salesService.update(sales).subscribe(res => this.router.navigate(['/pages/saleslist']));
  }

  listCustomers() {
    this.customerService.listSimple().subscribe(res => {
      this.customers = res
    });
  }

  listEmployees() {
    this.employeeService.listSimple().subscribe(res => {
      this.employees = res
    });
  }

  listProducts() {
    this.productService.listSimple().subscribe(res => {
      this.products = res
    });
  }
  
}
