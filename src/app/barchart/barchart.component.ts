import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnChanges {
  @Input() monthlyPayment: number | null = null;  // Correct @Input declaration

  // Chart configuration
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
  };

  public barChartLabels: string[] = ['Monthly Payment'];

  // Chart data should be of type `ChartData`
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [0], label: 'Payment' }
    ]
  };

  // Detect changes in @Input monthlyPayment
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['monthlyPayment'] && this.monthlyPayment !== null) {
      this.updateChart();
    }
  }

  // Update the chart with the new value
  updateChart() {
    this.barChartData.datasets[0].data = [this.monthlyPayment as number];
  }
}
