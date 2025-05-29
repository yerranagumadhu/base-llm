import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxChartModule } from 'devextreme-angular';

@Component({
  selector: 'app-devext',
  standalone: true,
  imports: [
    CommonModule,
    DxChartModule   // bring in the chart directives
  ],
  templateUrl: './devext.component.html',
  styleUrls: ['./devext.component.scss']
})
export class DevextComponent {
  // simple sample data
  public salesData = [
    { year: 2016, value: 500 },
    { year: 2017, value: 650 },
    { year: 2018, value: 700 },
    { year: 2019, value: 850 },
    { year: 2020, value: 900 }
  ];
}
