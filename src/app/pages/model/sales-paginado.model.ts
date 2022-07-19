import { SalesList } from './sales.list.model';
export class SalesPaginado {
    constructor(
        public totalReg: number,
        public pagActual: number,
        public regXPag: number,
        public data: SalesList[],
    ) { }
}
