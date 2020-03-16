import { Component, OnInit } from '@angular/core';
import { GoogleInstanceService } from '../services/google-instance.service';
import { DataService } from '../services/data.service';

let that: any;

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

  employeesData: any[];
  employeeQueryUrl: string;
  isChartLoaded: boolean;

  // Chart data
  chartData = [];
  gLib: any;
  chartConfig: any;
  constructor(
    private dataService: DataService, private gInstanceService: GoogleInstanceService) {
    this.employeeQueryUrl = 'https://zenefits-backend.herokuapp.com/people';
    this.isChartLoaded = false;
    this.employeesData = [];
  }

  ngOnInit() {
    that = this;
    this.gLib = this.gInstanceService.getGoogle();
    this.getCompleteListOfEmployees(this.employeeQueryUrl);
  }

  getCompleteListOfEmployees(url: string) {
    this.dataService.getData(url).subscribe((data: any) => {
      this.employeesData.push(data.data.data);
      if (data.data.next_url) {
        this.getCompleteListOfEmployees(
          data.data.next_url.replace('https://api.zenefits.com/core', 'https://zenefits-backend.herokuapp.com'));
      } else {
        this.isChartLoaded = true;
        this.buildDataForChart(this.employeesData.flat());
      }
    }, (error) => { console.log(error); });
  }

  buildDataForChart = (employeesData: any[]) => {
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
    console.log(document.getElementById('chart_div'));
    const chart = new that.gLib.visualization.OrgChart(document.getElementById('chartDiv'));
    chart.draw(that.chartConfig, {allowHtml: true, size: 'large', allowCollapse: true, nodeClass: 'nodeStyle'});
  }
}
