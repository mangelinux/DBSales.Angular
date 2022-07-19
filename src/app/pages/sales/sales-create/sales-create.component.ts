import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { SalesService } from 'src/app/services/sales.service';
import { Customer } from '../../model/customer.model';
import { Sales } from '../../model/sales.model';
import { EmployeeService } from '../../../services/employee.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../model/product.model';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-sales-create',
  templateUrl: './sales-create.component.html',
  styleUrls: ['./sales-create.component.css']
})
export class SalesCreateComponent implements OnInit {

  customers: Customer[] = [];
  employees: Employee[] = [];
  products: Product[] = [];

  form!: FormGroup;
  submited: boolean = false;

  constructor(
    private salesService: SalesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private productService: ProductService
  ) {
    this.form = formBuilder.group({
      id: [{ value: "0", disabled: true }, Validators.required],
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
  }

  addSales() {
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
    this.salesService.add(sales).subscribe(res => this.router.navigate(['/pages/saleslist']));
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
