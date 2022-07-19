import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../model/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  form!: FormGroup;
  submited:boolean = false;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private router:Router
  ) {
    this.form = formBuilder.group({
      id: [{ value: "0", disabled: true }, Validators.required],
      name: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  addCustomer() {
    this.submited = true;
    
    const customer: Customer = {
      id: this.form.value.id,
      name: this.form.value.name
    }
    this.customerService.add(customer).subscribe((res) => this.router.navigate(['/pages/customerlist']));
  }

}
