import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  dapartments: any[];
  constructor(private http: HttpClient) { }

  getAllDepartments(url: string) {
    return this.http.get(
      url, {
        headers: new HttpHeaders({
          Authorization: 'Bearer elZxQlHDSUallvL3OnnH'})});
  }
}
