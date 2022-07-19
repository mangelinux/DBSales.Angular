import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { SalesEditComponent } from './sales/sales-edit/sales-edit.component';
import { SalesListComponent } from './sales/sales-list/sales-list.component';
import { SalesCreateComponent } from './sales/sales-create/sales-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';

const routes: Routes = [
  {
    path: "pages",
    component: PagesComponent,
    children: [
      { path: "productlist", component: ProductListComponent },
      { path: "productcreate", component: ProductCreateComponent },
      { path: "productedit/:id", component: ProductEditComponent },
      
      { path: "customerlist", component: CustomerListComponent },
      { path: "customercreate", component: CustomerCreateComponent },
      { path: "customeredit/:id", component: CustomerEditComponent },

      { path: "employeelist", component: EmployeeListComponent },
      { path: "employeecreate", component: EmployeeCreateComponent },
      { path: "employeeedit/:id", component: EmployeeEditComponent },

      { path: "saleslist", component: SalesListComponent },
      { path: "salescreate", component: SalesCreateComponent },
      { path: "salesedit/:id", component: SalesEditComponent },


      { path: "", redirectTo: "productlist", pathMatch: 'full' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
