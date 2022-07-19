import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  form!: FormGroup;
  submited:boolean = false;

  constructor(
    private employeeService: EmployeeService,
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

  addEmployee() {
    this.submited = true;
    
    const employee: Employee = {
      id: this.form.value.id,
      name: this.form.value.name
    }
    this.employeeService.add(employee).subscribe((res) => this.router.navigate(['/pages/employeelist']));
  }


}
