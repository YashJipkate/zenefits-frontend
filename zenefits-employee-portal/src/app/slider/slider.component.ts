import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../services/departments.service';

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
  constructor(private departmentService: DepartmentsService) {
    this.departmentQueryUrl = '/core/departments';
  }

  ngOnInit() {
    this.getCompleteListOfDepartments(this.departmentQueryUrl);
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
        console.log(this.departmentsData);
      }
    });
  }
}
