import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { GoogleInstanceService } from '../services/google-instance.service';

let that: any;

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

  employeesData: any[] = [];
  employeeQueryUrl: string;

  // Chart data
  chartData = [];
  gLib: any;
  chartConfig: any;
  constructor(private employeeService: EmployeeService, private gInstanceService: GoogleInstanceService) {
    this.employeeQueryUrl = '/core/people';
  }

  ngOnInit() {
    that = this;
    this.gLib = this.gInstanceService.getGoogle();
    this.getCompleteListOfEmployees();
  }

  getCompleteListOfEmployees(url = this.employeeQueryUrl) {
    this.employeeService.getAllEmployees(url).subscribe((data: any) => {
      this.employeesData.push(data.data.data);
      if (data.data.next_url) {
        this.getCompleteListOfEmployees(data.data.next_url);
      } else { this.buildDataForChart(this.employeesData.flat()); }
    }, (error) => { console.log(error); });
  }

  buildDataForChart = (employeesData) => {
    employeesData.filter(element => element.status === 'active').forEach(element => {
      this.chartData.push([{
        v: element.id,
        f: element.preferred_name +
           '<div style="color: #888">' + (element.work_email ? element.work_email + ' ' : '') + '</div>'},
        (element.manager.url ? element.manager.url.split('/').pop() : ''), '']);
    });
    this.gLib.charts.load('current', {packages: ['orgchart']});
    this.gLib.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart = () => {
    that.chartConfig = new that.gLib.visualization.DataTable();
    that.chartConfig.addColumn('string', 'Name');
    that.chartConfig.addColumn('string', 'Manager');
    that.chartConfig.addColumn('string', 'ToolTip');
    that.chartConfig.addRows(that.chartData);
    const chart = new that.gLib.visualization.OrgChart(document.getElementById('chart_div'));
    chart.draw(that.chartConfig, {allowHtml: true, size: 'large', allowCollapse: true, nodeClass: 'nodeStyle'});
  }
}
