import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee = new Employee();
  employee: Employee[];
  readonly baseURL= "http://127.0.0.1:5000"
  constructor(private http: HttpClient) { }
  
  postemp(emp : Employee){
    return this.http.post(this.baseURL, emp);
  }
  getEmp(){
    return this.http.get(this.baseURL);

  }
  putemp(emp: Employee){
    return this.http.put( this.baseURL + `/${emp._id}`,emp);

  }
  delemp(_id:string){
    return this.http.delete( this.baseURL + `/${_id}`);

  }
}
