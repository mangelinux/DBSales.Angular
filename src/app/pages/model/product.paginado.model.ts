import { Product } from './product.model';
export class ProductPaginado {
    constructor(
        public data: Product[],
        public totalReg: number,
        public pagActual: number,
        public regXPag: number
    ) {

    }
}