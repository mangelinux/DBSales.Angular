import { Customer } from './customer.model';
export class CustomerPaginado{
    constructor(
        public totalReg: number,
        public pagActual: number,
        public regXPag : number,
        public data: Customer[],
    ){}
  }
  