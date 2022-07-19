import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../pages/model/product.model';
import { ProductPaginado } from '../pages/model/product.paginado.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlAPI: string = environment.urlAPI;

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Product> {
    const url: string = `${this.urlAPI}product/get`;
    const httpParams = new HttpParams({
      fromObject: {
        id: id
      }
    });

    return this.http.get<Product>(url, { params: httpParams });
  }

  list(nroPag: number, regXPag: number): Observable<ProductPaginado> {
    const url: string = `${this.urlAPI}product/list`;
    const httpParams = new HttpParams({
      fromObject: {
        nroPag: nroPag,
        regXPag: regXPag
      }
    });

    return this.http.get<ProductPaginado>(url, { params: httpParams });
  }

  listSimple(): Observable<Product[]> {
    const url: string = `${this.urlAPI}product/listsimple`;

    return this.http.get<Product[]>(url);
  }

  add(product: Product): Observable<Product> {
    const url: string = `${this.urlAPI}product/add`;

    return this.http.post<Product>(url, product);
  }

  update(product: Product): Observable<Product> {
    const url: string = `${this.urlAPI}product/update`;

    return this.http.put<Product>(url, product);
  }

  delete(id: number): Observable<Product> {
    const url: string = `${this.urlAPI}product/delete`;
    const httpParams = new HttpParams({
      fromObject: {
        id: id
      }
    });
    
    return this.http.delete<Product>(url, { params: httpParams });
  }


}
