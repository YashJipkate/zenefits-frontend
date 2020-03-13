import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

  employeesData: any[] = [];
  employeeQueryUrl: string;
  flag = false;
  constructor(private employeeService: EmployeeService) {
    this.employeeQueryUrl = '/core/people';
  }

  ngOnInit() {
    this.getCompleteListOfEmployees();
  }

  getCompleteListOfEmployees(url = this.employeeQueryUrl) {
    this.employeeService.getAllEmployees(url).subscribe((data: any) => {
      this.employeesData.push(data.data.data);
      if (data.data.next_url) {
        this.getCompleteListOfEmployees(data.data.next_url);
      } else { this.callback(this.employeesData.flat()); }
    }, (error) => { console.log(error); });
  }

  callback(employeesData) {
    console.log(employeesData);
  }
}
