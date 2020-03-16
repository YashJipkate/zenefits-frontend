import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any[];
  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http.get(
      url, {
        headers: new HttpHeaders({
          Authorization: 'Bearer elZxQlHDSUallvL3OnnH'}),
        });
  }
}
