import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { EmployeePaginado } from '../pages/model/employee-paginado.model';
import { Employee } from '../pages/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  urlAPI: string = environment.urlAPI;

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Employee> {
    const url: string = `${this.urlAPI}employee/get`;
    const httpParams = new HttpParams({
      fromObject: {
        id: id
      }
    });

    return this.http.get<Employee>(url, { params: httpParams })
  }

  list(nroPag: number, regXPag: number): Observable<EmployeePaginado> {
    const url = `${this.urlAPI}employee/list`;
    const httpParams = new HttpParams({
      fromObject: {
        nroPag: nroPag,
        regXPag: regXPag
      }
    });

    return this.http.get<EmployeePaginado>(url, { params: httpParams });
  }

  listSimple(): Observable<Employee[]> {
    const url = `${this.urlAPI}employee/listsimple`;

    return this.http.get<Employee[]>(url);
  }

  add(employee: Employee): Observable<Employee> {
    const url: string = `${this.urlAPI}employee/add`;
    
    return this.http.post<Employee>(url, employee)
  }

  update(employee: Employee): Observable<Employee> {
    const url = `${this.urlAPI}employee/update`;

    return this.http.put<Employee>(url, employee)
  }

  delete(id: number): Observable<Employee> {
    const url: string = `${this.urlAPI}employee/delete`;
    const httpParams = new HttpParams({
      fromObject: {
        id: id
      }
    });

    return this.http.delete<Employee>(url, { params: httpParams })
  }
}
