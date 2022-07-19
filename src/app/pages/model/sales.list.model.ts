import { Customer } from "./customer.model";
import { Employee } from './employee.model';
import { Product } from './product.model';

export class SalesList {
    constructor(
        public id: number,
        public date: Date,
        public unitPrice: number,
        public quantity: number,
        public totalPrice: number,
        public customerDTO: Customer,
        public employeeDTO: Employee,
        public productDTO: Product
    ) { }
}