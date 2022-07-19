import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { SalesListComponent } from './sales/sales-list/sales-list.component';
import { SalesCreateComponent } from './sales/sales-create/sales-create.component';
import { SalesEditComponent } from './sales/sales-edit/sales-edit.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,

    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,

    SalesListComponent,
    SalesCreateComponent,
    SalesEditComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports:[
    FormsModule, 
    ReactiveFormsModule,
    
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,

    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,

    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,

    SalesListComponent,
    SalesCreateComponent,
    SalesEditComponent
  ],
  providers:[DatePipe]
})
export class PagesModule { }
