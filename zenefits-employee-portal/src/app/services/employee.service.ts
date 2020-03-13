import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesData: any[];
  constructor(private http: HttpClient) { }

  getAllEmployees(url: string) {
    return this.http.get(
      url, {
        headers: new HttpHeaders({
          Authorization: 'Bearer elZxQlHDSUallvL3OnnH'})});
  }
}
