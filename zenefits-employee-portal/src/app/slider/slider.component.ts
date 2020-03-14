import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../services/departments.service';
import { CompaniesService } from '../services/companies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliderData: any[] = [
    {heading: 'Welcome to Zenefits', name: 'Explore us'}
  ];
  departmentsData: any[] = [];
  departmentQueryUrl: string;
  companiesData: any[] = [];
  campaniesQueryUrl: string;
  constructor(
    private departmentService: DepartmentsService, private companiesService: CompaniesService) {
    this.departmentQueryUrl = '/core/departments';
    this.campaniesQueryUrl = '/core/companies';
  }

  ngOnInit() {
    this.getCompleteListOfDepartments(this.departmentQueryUrl);
    this.getCompleteListofCompanies(this.campaniesQueryUrl);
  }

  getCompleteListOfDepartments(url: string) {
    this.departmentService.getAllDepartments(url).subscribe((data: any) => {
      this.departmentsData.push(data.data.data);
      if (data.data.next_url) {
        this.getCompleteListOfDepartments(data.data.next_url);
      } else {
        this.departmentsData.flat().forEach((department) => {
          this.sliderData.push({
            heading: 'Explore your departments',
            name: department.name
          });
        });
      }
    });
  }

  getCompleteListofCompanies(url: string) {
    this.companiesService.getAllCompanies(url).subscribe((data: any) => {
      this.companiesData.push(data.data.data);
      if (data.data.next_url) {
        this.getCompleteListofCompanies(data.data.next_url);
      } else {
        this.companiesData.flat().forEach((company) => {
          this.sliderData.push({
            heading: 'Explore your companies',
            name: company.legal_name + ' (' + company.legal_city + ', ' + company.legal_state + ')'
          });
        });
      }
    });
  }
}
