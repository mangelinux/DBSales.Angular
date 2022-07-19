import { Customer } from './customer.model';
export class EmployeePaginado{
    constructor(
        public totalReg: number,
        public pagActual: number,
        public regXPag : number,
        public data: Customer[],
    ){}
  }
  