import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../model/customer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  form!: FormGroup;
  submited: boolean = false;
  customer!: Customer;
  id!: number;
  name!: string;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {

    this.form = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.customerService.getById(id).subscribe(res => {
        this.form.setValue({
          id: res.id,
          name: res.name
        });
      });

    });
  }

  updateCustomer() {
    this.submited = true;
    const customer: Customer = {
      id: this.form.value.id,
      name: this.form.value.name
    }

    this.customerService.update(customer).subscribe((res) => this.router.navigate(['/pages/customerlist']));

  }

}
