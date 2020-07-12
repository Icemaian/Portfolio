import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'node_modules/chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: 'white'
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: 'white',
          defaultFontSize: 16,
          beginAtZero: true,
          callback: function (value, index, values) {
            const yLabels = {0 : 'No Experience', 2 : 'Self Taught', 4 : 'Academic Use', 6 : 'Daily Profession Use'};
            return yLabels[value];
          },
        }
      }],
      yAxes: [{
        ticks: {
          defaultFontSize: 16,
          fontColor: 'white'
          },
          gridLines: {
            display: true ,
            color: "white"
          }
      }]
    },
    title: {
      fontSize: 24,
      display: true,
      text: 'Language Proficiency',
      fontColor: 'white'
    }
  }

 
  barChartLabels: Label[] = ['Java', 'C++', 'JavaScript/Angular', 'DB2', 'PostGreSQL', 'Jenkins'];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [6, 4, 2, 6, 2, 2],
      backgroundColor: '#DD6E42',
      borderWidth: 2,
      label: 'Languages'
    }
  ];

}
