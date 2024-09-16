import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { mortgageReducer } from '../store/mortgage.reducer';
import { environment } from 'src/environments/environments';
import { BarchartComponent } from '../barchart/barchart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    CalculatorFormComponent,
    BarchartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ mortgage: mortgageReducer }),
    NgChartsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  exports: [
    CalculatorFormComponent
  ],
})
export class MortgageModule { }
